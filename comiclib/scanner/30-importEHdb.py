from pathlib import Path
from typing import Union
import html
import sqlite3, re
from datetime import date
from urllib.parse import urlsplit
from pydantic import Field
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    importEHdb_thumb: bool = True
    importEHdb_matchtitle: Union[bool, str] = Field(default=True, union_mode='left_to_right')
    importEHdb_matchtorrent: bool = True
    importEHdb_database_URI: str = "file:e-hentai.db?mode=ro"
    importEHdb_cache_URI: str = "file:comiclib_ehcache.db"
settings = Settings()

import logging
logger = logging.getLogger(__name__)

def blur_title(title: str):
    if not isinstance(title, str):
        return title
    if settings.importEHdb_matchtitle == 'exact':
        return title
    # e-hentai.db stores HTML-escaped titles (e.g. I&#039;m, &amp;)
    title = html.unescape(title)
    # torrent names carry file extensions while local stems don't
    title = re.sub(r"\.(zip|rar|7z|cbz|cbr)$", "", title, flags=re.IGNORECASE)
    # also restrict to Basic Multilingual Plane
    return ''.join(map(lambda c:c if ord(c) <= 0xFFFF else '_', title)).translate(
        str.maketrans({
        ' ': None,
        '_': None,
        '(': None,
        ')': None,
        ':': None,
        '：': None,
        '"': None,
        '＂': None,
        '*': None,
        '＊': None,
        '?': None,
        '？': None,
        '|': None,
        '｜': None,
        '<': None,
        '＜': None,
        '>': None,
        '＞': None,
        '/': None,
        '／': None,
        '\\': None,
        '＼': None,
    }))

# Please update the version once the above function is updated.
blur_title_version = 4
exact_mode = settings.importEHdb_matchtitle == 'exact'
title2gid_table = 'comiclib_title2gid_exact' if exact_mode else f'comiclib_title2gid_v{blur_title_version}'
title2gid_index = 'title_index_exact' if exact_mode else f'title_index_v{blur_title_version}'
titlejpn2gid_table = 'comiclib_titlejpn2gid_exact' if exact_mode else f'comiclib_titlejpn2gid_v{blur_title_version}'
titlejpn2gid_index = 'titlejpn_index_exact' if exact_mode else f'titlejpn_index_v{blur_title_version}'

def dict_factory(cursor, row):
    fields = [column[0] for column in cursor.description]
    return {key: value for key, value in zip(fields, row)}

# When several gallery versions share a root (replaced/expunged/removed),
# prefer a live one for *indirect* matches (title/torrent), but a direct gid
# hit always returns that exact version: the local file was downloaded at
# that time, so its contemporary metadata is the correct match.
LIVE_FIRST = "(replaced = 0 AND expunged = 0 AND removed = 0) DESC, posted DESC"

class Scanner:
    '''Import gallery metadata from e-hentai.db (URenko/e-hentai-db, download
    e-hentai.db.zstd from its nightly release and decompress it into the working directory).
    The gid comes from the source URL set by previous scanners; title/torrent
    fuzzy matching is available as a fallback.'''

    def __init__(self) -> None:
        db_path = urlsplit(settings.importEHdb_database_URI).path
        if Path(db_path).exists():
            self.con = sqlite3.connect(settings.importEHdb_database_URI, uri=True, check_same_thread=False)
            self.con.execute("PRAGMA query_only = ON")
            count, latest = self.con.execute("SELECT COUNT(*), MAX(posted) FROM gallery").fetchone()
            logger.info(f"e-hentai.db: {count} galleries, latest posted {date.fromtimestamp(latest) if latest else None}.")
            # Title/torrent caches live in a sidecar database so the (read-only,
            # periodically replaced) e-hentai.db is never written to.
            self.cache = sqlite3.connect(settings.importEHdb_cache_URI, uri=True, check_same_thread=False)
            self._build_cache()
            self.con.row_factory = dict_factory
            self.cache.row_factory = dict_factory
        else:
            logger.warning(f"{db_path} not found. importEHdb.py will be skipped. Please download e-hentai.db.zstd from https://github.com/URenko/e-hentai-db/releases/tag/nightly and decompress it into the working directory if you need it.")
            self.con = None
            self.cache = None

    def _need(self, index: str) -> bool:
        return self.cache.execute("SELECT name FROM sqlite_master WHERE type='index' AND name=?", (index,)).fetchone() is None

    def _build_cache(self) -> None:
        if settings.importEHdb_matchtitle and (self._need(title2gid_index) or self._need(titlejpn2gid_index)):
            logger.info('Building ehentai database title cache, please wait...')
            if self._need(title2gid_index):
                self.cache.execute(f"CREATE TABLE {title2gid_table} (title TEXT NOT NULL, gid INTEGER NOT NULL)")
                self.cache.executemany(f"INSERT INTO {title2gid_table} VALUES(?, ?)",
                    ((blur_title(row[0]), row[1]) for row in self.con.execute("SELECT title, gid FROM gallery") if row[0] is not None))
                self.cache.execute(f"CREATE INDEX {title2gid_index} ON {title2gid_table} (title)")
            if self._need(titlejpn2gid_index):
                self.cache.execute(f"CREATE TABLE {titlejpn2gid_table} (title_jpn TEXT NOT NULL, gid INTEGER NOT NULL)")
                self.cache.executemany(f"INSERT INTO {titlejpn2gid_table} VALUES(?, ?)",
                    ((blur_title(row[0]), row[1]) for row in self.con.execute("SELECT title_jpn, gid FROM gallery") if row[0] is not None))
                self.cache.execute(f"CREATE INDEX {titlejpn2gid_index} ON {titlejpn2gid_table} (title_jpn)")
            self.cache.commit()
        if settings.importEHdb_matchtorrent and self._need(f'torrent_index_v{blur_title_version}'):
            logger.info('Building ehentai database torrent cache, please wait...')
            self.cache.execute(f"CREATE TABLE comiclib_torrent2gid_v{blur_title_version} (title TEXT NOT NULL, gid INTEGER NOT NULL)")
            # torrent.gid refers to the root gallery; resolved via _resolve_root on lookup.
            self.cache.executemany(f"INSERT INTO comiclib_torrent2gid_v{blur_title_version} VALUES(?, ?)",
                ((blur_title(row[0]), row[1]) for row in self.con.execute("SELECT name, gid FROM torrent") if row[0] is not None))
            self.cache.execute(f"CREATE INDEX torrent_index_v{blur_title_version} ON comiclib_torrent2gid_v{blur_title_version} (title)")
            self.cache.commit()

    def _resolve_root(self, root_gid: int):
        '''Resolve a root_gid (e.g. from the torrent table) to one gallery gid,
        preferring a live version but never missing when only old ones exist.'''
        row = self.con.execute(
            f"SELECT gid FROM gallery WHERE gid == ? OR root_gid == ? ORDER BY {LIVE_FIRST} LIMIT 1",
            (root_gid, root_gid)).fetchone()
        return row['gid'] if row is not None else None

    def fetch_gallery(self, gid):
        # Exact version as downloaded; no replaced/expunged/removed filtering here.
        gallery = self.con.execute("SELECT gid, token, title, title_jpn, category, posted, thumb, root_gid FROM gallery WHERE gid == ?", (gid,)).fetchone()
        if gallery is None:
            return None
        gallery['tags'] = [row['name'] for row in self.con.execute(
            "SELECT t.name FROM gid_tid g JOIN tag t ON g.tid = t.id WHERE g.gid == ?", (gallery['gid'],))]
        return gallery

    def _lookup(self, table: str, index: str, column: str, value: str):
        '''Blurred exact lookup in a sidecar cache table; returns a gid or None.'''
        row = self.cache.execute(
            f"SELECT gid FROM {table} INDEXED BY {index} WHERE {column} == ?", (value,)).fetchone()
        return row['gid'] if row is not None else None

    def get_gid(self, metadata: dict):
        if not metadata["source"] is None and not (m := re.match(r"https?://e[x-]hentai\.org/g/(\d+)/", metadata["source"])) is None:
            return m[1]
        if self.cache is None:
            return None
        if settings.importEHdb_matchtitle:
            for table, index, column, key in (
                (title2gid_table, title2gid_index, "title", "title"),
                (titlejpn2gid_table, titlejpn2gid_index, "title_jpn", "title"),
                (titlejpn2gid_table, titlejpn2gid_index, "title_jpn", "subtitle"),
            ):
                if (gid := self._lookup(table, index, column, blur_title(metadata[key]))) is not None:
                    return gid
        if settings.importEHdb_matchtorrent:
            for key in ("title", "subtitle"):
                if (gid := self._lookup(f"comiclib_torrent2gid_v{blur_title_version}", f"torrent_index_v{blur_title_version}", "title", blur_title(metadata[key]))) is not None:
                    return self._resolve_root(gid)
        return None

    def scan(self, path: Path, id: str, metadata: dict, prev_scanners: list[str]) -> bool:
        if self.con is None:
            return False
        elif prev_scanners and not (gid := self.get_gid(metadata)) is None:
            logger.info(f' <- {path}')
            gallery = self.fetch_gallery(gid)
            if gallery is None: return False
            token = gallery['token']
            metadata["id"] = f"EH{gallery['gid']:>018}{token}{id[-10:]}"
            metadata["title"] = gallery["title"]
            metadata["subtitle"] = gallery["title_jpn"]
            if settings.importEHdb_thumb:
                metadata["thumb"] = gallery["thumb"]
            metadata["categories"] = set((gallery["category"],))
            metadata["tags"] = set(gallery["tags"])
            metadata["tags"].add(f"date_posted:{date.fromtimestamp(gallery['posted'])}")
            if metadata["source"] is None or re.fullmatch(r"https?://e[x-]hentai\.org/g/(\d+)/", metadata["source"]) is not None:
                metadata["source"] = f"https://exhentai.org/g/{gallery['gid']}/{token}/"
            return True
        else:
            return False

    def __del__(self) -> None:
        if not getattr(self, 'con', None) is None:
            self.con.close()
        if not getattr(self, 'cache', None) is None:
            self.cache.close()
