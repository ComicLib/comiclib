from typing import Union, Iterable
from pathlib import Path
from zipfile import ZipFile
import io
import re
import subprocess
import tempfile
import shutil
import mimetypes
import itertools
import PIL
from PIL import Image
try:
    from jxlpy import JXLImagePlugin
except ModuleNotFoundError:
    pass

import logging
logger = logging.getLogger(__name__)

from .config import settings


def ordered(iterable: Iterable[str]) -> list[str]:
    unsorted = tuple(iterable)
    try:
        unsorted_path = tuple(Path(s) for s in unsorted)
        if any(unsorted_path[0].parent != p.parent for p in unsorted_path[1:]):
            raise ValueError
        return sorted(unsorted, key=lambda s: int(Path(s).stem))
    except ValueError:
        return sorted(unsorted)

mimetypes.add_type('image/jxl', '.jxl')
def is_image(p: Union[str, Path]):
    if Path(p).parts[0] == '__MACOSX': return False
    mime = mimetypes.guess_type(p, strict=False)[0]
    return False if mime is None else mime.partition('/')[0] == 'image'

def convert_image(f_or_path, saveto: str, thumbnail=False):
    try:
        with Image.open(f_or_path) as im:
            if thumbnail:
                im.thumbnail((500, 709))
            im.save(saveto)
    except PIL.UnidentifiedImageError:
        if not isinstance(f_or_path, Path):
            with tempfile.NamedTemporaryFile() as tmpf:  # libjxl has problem with pipe yet
                f_or_path.seek(0)
                shutil.copyfileobj(f_or_path, tmpf)
                tmpf.flush()
                cmd = ['ffmpeg', '-i', tmpf.name, '-vf', 'scale=500:-1', str(saveto), '-y'] if thumbnail else ['ffmpeg', '-i', tmpf.name, str(saveto), '-y']
                subprocess.run(cmd, check=True, stderr=None if settings.debug else subprocess.DEVNULL)
        else:
            cmd = ['ffmpeg', '-i', str(f_or_path), '-vf', 'scale=500:-1', str(saveto), '-y'] if thumbnail else ['ffmpeg', '-i', str(f_or_path), str(saveto), '-y']
            subprocess.run(cmd, check=True, stderr=None if settings.debug else subprocess.DEVNULL)


def extract_thumbnail(path: Union[str, Path], id: str, page: int, cache=False, cover=False) -> Path:
    path = Path(path)
    saveto = Path(settings.thumb) / id / f'{page}.webp'
    if cache and saveto.exists():
        return saveto.relative_to(settings.thumb)
    saveto.parent.mkdir(parents=True, exist_ok=True)
    if path.is_dir():
        convert_image(ordered(filter(is_image, path.iterdir()))[page-1], saveto, thumbnail=True)
    elif ArchiveFile.support_formats.fullmatch(path.name):
        with ArchiveFile(path) as z:
            with z.open(ordered(map(lambda z_info: z_info.filename, filter(lambda z_info: not z_info.is_dir() and is_image(z_info.filename), z.infolist())))[page-1]) as f:
                convert_image(f, saveto, thumbnail=True)
    else:
        raise NotImplementedError
    if cover:
        cover_path = Path(settings.cover) / f'{id}.webp'
        cover_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(saveto, cover_path)
        return cover_path.name
    return saveto.relative_to(settings.thumb)

class ArchiveInfo:
    def __init__(self, filename):
        self.filename = filename
    
    def is_dir(self):
        return self._is_dir

class ArchiveFile:
    support_formats = re.compile('.+\.(zip|rar|7z)$', re.IGNORECASE)
    executable = None

    def __init__(self, file):
        self.file = Path(file)
        if self.file.suffix.lower() == '.zip':
            self.zipfile = ZipFile(file)
            # Fix handling of duplicate ZipFile entries
            # see https://github.com/python/cpython/issues/117779
            for zinfo in self.zipfile.infolist():
                zinfo._end_offset = None
            return
        else:
            self.zipfile = None
        self._infolist = None
        if self.executable is None:
            sevenzip = ('7zzs', '7zz', '7z', '7za', '7zr')
            for executable in itertools.chain(('./'+_s for _s in sevenzip), sevenzip):
                try:
                    p = subprocess.run([executable, 'i'], capture_output=True)
                    if p.returncode == 0:
                        self.executable = executable
                    if b'Rar' not in p.stdout:
                        logger.warning("Your version of 7-Zip does not support rar files, please download the correct version from https://7-zip.org/download.html.")
                except FileNotFoundError:
                    continue
            if self.executable is None:
                raise FileNotFoundError("We encountered a non-zip archive, this requires 7-Zip, but you do not have it installed, please download from https://7-zip.org/download.html and make sure 7zzs or 7zz or 7z is in the working directory or the directory indicated by PATH.")
            logger.debug(f"Use 7-Zip {self.executable}")
    
    def infolist(self):
        if not self._infolist is None:
            return self._infolist
        self._infolist = []
        stdout = subprocess.run([self.executable, 'l', str(self.file)], check=True, capture_output=True, text=True).stdout
        list_start = False
        line_sep = '------------------- ----- ------------ ------------  ------------------------'
        for line in stdout.splitlines():
            if list_start:
                if line == line_sep:
                    break
                m = re.match(r'\S+ \S+ ([\.D])\S{4} +\d+ +\d*  (.+)', line)
                if m is None: raise NotImplementedError
                archive_info = ArchiveInfo(m[2])
                archive_info._is_dir = m[1] == 'D'
                self._infolist.append(archive_info)
            if line == line_sep:
                list_start = True
        return self._infolist
    
    def namelist(self):
        return (archive_info.filename for archive_info in self.infolist())
    
    def open(self, name):
        p = subprocess.run([self.executable, 'e', '-so', str(self.file), name], check=True, capture_output=True)
        return io.BytesIO(p.stdout)
    
    def __enter__(self):
        if self.zipfile is None:
            return self
        else:
            return self.zipfile.__enter__()

    def __exit__(self, *args):
        if not self.zipfile is None:
            self.zipfile.__exit__(*args)
