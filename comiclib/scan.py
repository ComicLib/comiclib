import importlib
import itertools
import os
import sys
import copy
import hashlib
import time
import traceback
from pathlib import Path
from pprint import pformat

import logging
logger = logging.getLogger(__name__)

from .database import engine, Base, Archive, Tag, Category
from sqlalchemy import select
from sqlalchemy.orm import Session
import watchfiles
try:
    import psutil
    _check_inuse = True
except ModuleNotFoundError:
    _check_inuse = False

from .config import settings

Base.metadata.create_all(bind=engine)

from . import scanner

sys.path.append('.')
scanners = [(importlib.import_module('.scanner.'+name, __package__).Scanner(), name) for name in scanner.__all__] + \
          [(importlib.import_module(p.stem).Scanner(), p.stem) for p in Path('.').glob('*.py')]
scanners.sort(key=lambda t:t[1])
logger.info(f"Loaded scanners: {[scanner[1] for scanner in scanners]}")


def scan(paths):
    exceptions = Exception if settings.skip_scan_error else ()
    errors = {}
    with Session(engine) as db:
        try:
            for p in paths:
                checkpoint = db.begin_nested()
                try:
                    name = None
                    p = Path(os.path.relpath(p, settings.content))
                    if p.is_relative_to('thumb'):
                        continue
                    old_a = db.scalar(select(Archive).where(
                        Archive.path == p.as_posix()))
                    if old_a is None:
                        a = Archive(path=p.as_posix())
                        archive_id = '00' + hashlib.blake2b(p.as_posix().encode(), digest_size=19).hexdigest()  # 00 stands for ID type origin
                    elif settings.skip_exits:
                        continue
                    else:
                        a = old_a
                        archive_id = old_a.id
                    metadata = {"id": archive_id, "title": a.title, "subtitle": a.subtitle, "source": a.source, "pagecount": a.pagecount, "tags": set(
                        t.tag for t in a.tags if not t.tag.startswith("date_added:")), "categories": set(c.name for c in a.categories)}
                    real_path = Path(settings.content) / p
                    prev_scanners = []
                    for scanner, name in scanners:
                        prev_metadata = copy.deepcopy(metadata)
                        if scanner.scan(path=real_path, id=archive_id, metadata=metadata, prev_scanners=prev_scanners):
                            prev_scanners.append(name)
                        else:
                            metadata = prev_metadata
                    name = 'post_process'
                    if not prev_scanners:
                        continue
                    if not any(tag.startswith("date_added:") for tag in metadata["tags"]):
                        # Directory modification times are often difficult to synchronize.
                        mtime_path = next(real_path.iterdir()) if real_path.is_dir() else real_path
                        metadata["tags"].add(f"date_added:{int(mtime_path.stat().st_mtime)}")
                    logging.debug(pformat(metadata))
                    a.title = metadata["title"]
                    a.subtitle = metadata["subtitle"]
                    a.source = metadata["source"]
                    a.pagecount = metadata["pagecount"]
                    a.thumb = metadata["thumb"]
                    for tag in filter(lambda t: not t.tag in metadata["tags"], a.tags):
                        a.tags.remove(tag)
                    for tag in metadata["tags"] - set(t.tag for t in a.tags):
                        a.tags.append(Tag(archive_id=metadata["id"], tag=tag))
                    for category in filter(lambda c: not c.name in metadata["categories"], a.categories):
                        a.categories.remove(category)
                    for category in metadata["categories"] - set(c.name for c in a.categories):
                        if (c := db.scalar(select(Category).where(Category.name == category))) is None:
                            c = Category(name=category, pinned=0)
                            db.add(c)
                        a.categories.append(c)
                    if old_a is None:
                        assert len(metadata["id"]) == 40, f'The length of ID {metadata["id"]} is incorrect.'
                        a.id = metadata["id"]
                        db.add(a)
                    checkpoint.commit()
                except exceptions:
                    logger.error(traceback.format_exc())
                    errors[str(p)] = name
                finally:
                    if checkpoint.is_active:
                        checkpoint.rollback()
        finally:
            db.commit()
            if settings.skip_scan_error and errors:
                logger.error('Processing failed while scanning the following files:\n%s', pformat(errors))

def get_files_inuse():
    ret = set()
    for proc in psutil.process_iter():
        try:
            ret |= {f.path for f in proc.open_files()}
        except (psutil.AccessDenied, psutil.NoSuchProcess):
            pass
    return ret

def watch():
    file_sizes = {}
    for changes in watchfiles.watch(settings.content, watch_filter=lambda change, path: change in (watchfiles.Change.added, watchfiles.Change.modified) and Path(path).is_file()):
        for _, fname in changes:
            try:
                if _check_inuse:
                    if next((file_inuse for file_inuse in get_files_inuse() if os.path.samefile(fname, file_inuse)), None) is None:
                        scan([fname])
                else:
                    while file_sizes.get(fname, -1) != (fsize := Path(fname).stat().st_size):
                        file_sizes[fname] = fsize
                        time.sleep(1)
                    scan([fname])
            except Exception as err:
                logger.error(err)


def scannow():
    # TODO: https://github.com/python/cpython/issues/77609
    scan(itertools.chain.from_iterable(
        itertools.chain((Path(dirpath)/dirname for dirname in dirnames), (Path(dirpath)/filename for filename in filenames)) for dirpath, dirnames, filenames in os.walk(settings.content, followlinks=True))
    )
