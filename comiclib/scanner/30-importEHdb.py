from pathlib import Path
from typing import Union
import sqlite3, re, ast
from datetime import date
from urllib.parse import urlsplit
from pydantic import Field
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    importEHdb_thumb: bool = True
    importEHdb_matchtitle: Union[bool, str] = Field(default=True, union_mode='left_to_right')
    importEHdb_matchtorrent: bool = True
    importEHdb_database_URI: str = "file:api_dump.sqlite?mode=rw"
settings = Settings()

import logging
logger = logging.getLogger(__name__)

def blur_title(title: str):
    if not isinstance(title, str):
        return title
    if settings.importEHdb_matchtitle == 'exact':
        return title
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
blur_title_version = 3
title2gid_table = 'gallery' if settings.importEHdb_matchtitle == 'exact' else f'comiclib_title2gid_v{blur_title_version}'
title2gid_index = 'gallery_title' if settings.importEHdb_matchtitle == 'exact' else f'title_index_v{blur_title_version}'
titlejpn2gid_table = f"comiclib_titlejpn2gid_v{0 if settings.importEHdb_matchtitle == 'exact' else blur_title_version}"
titlejpn2gid_index = f"titlejpn_index_v{0 if settings.importEHdb_matchtitle == 'exact' else blur_title_version}"
# The title_jpn field in table galley contains many NULL, thus use table titlejpn_index_v0 for index instead here.

def dict_factory(cursor, row):
    fields = [column[0] for column in cursor.description]
    return {key: value for key, value in zip(fields, row)}

class Scanner:
    '''Import the dumped e-hentai metadata database api_dump.sqlite (you can download it from https://sukebei.nyaa.si/user/gipaf23445).
Currently only support matching by the source URL (from previous scanners).'''
    
    def __init__(self) -> None:
        db_path = urlsplit(settings.importEHdb_database_URI).path
        if Path(db_path).exists():
            self.con = sqlite3.connect(settings.importEHdb_database_URI, uri=True, check_same_thread=False)
            # Check if the database is out of date
            if self.con.execute("SELECT posted FROM gallery INDEXED BY gallery_posted ORDER BY posted DESC LIMIT 1").fetchone()[0] < 1736360728:
                logger.warning("There is a new version of api_dump.sqlite, you can download it from https://sukebei.nyaa.si/user/gipaf23445")
            # Build cache during the first run
            if settings.importEHdb_matchtitle:
                req_title2gid_index = self.con.execute(f"SELECT name FROM sqlite_master WHERE type='index' AND name=?", (title2gid_index,)).fetchone() is None
                req_titlejpn2gid_index = self.con.execute(f"SELECT name FROM sqlite_master WHERE type='index' AND name=?", (titlejpn2gid_index,)).fetchone() is None
                if req_title2gid_index or req_titlejpn2gid_index:
                    logger.info('Building ehentai database title cache, please wait...')
                    if req_title2gid_index:
                        if settings.importEHdb_matchtitle != 'exact':
                            self.con.execute(f"CREATE TABLE {title2gid_table} (title TEXT NOT NULL, gid INTEGER NOT NULL, FOREIGN KEY (gid) REFERENCES gallery (gid))")
                            self.con.executemany(f"INSERT INTO {title2gid_table} VALUES(?, ?)", ((blur_title(row[0]), row[1]) for row in self.con.execute("SELECT title, gid FROM gallery") if row[0] is not None))
                        self.con.execute(f"CREATE INDEX {title2gid_index} ON {title2gid_table} (title)")
                    if req_titlejpn2gid_index:
                        self.con.execute(f"CREATE TABLE {titlejpn2gid_table} (title_jpn TEXT NOT NULL, gid INTEGER NOT NULL, FOREIGN KEY (gid) REFERENCES gallery (gid))")
                        self.con.executemany(f"INSERT INTO {titlejpn2gid_table} VALUES(?, ?)", ((blur_title(row[0]), row[1]) for row in self.con.execute("SELECT title_jpn, gid FROM gallery") if row[0] is not None))
                        self.con.execute(f"CREATE INDEX {titlejpn2gid_index} ON {titlejpn2gid_table} (title_jpn)")
                    self.con.commit()
            if settings.importEHdb_matchtorrent and self.con.execute(f"SELECT name FROM sqlite_master WHERE type='index' AND name='torrent_index_v{blur_title_version}'").fetchone() is None:
                logger.info('Building ehentai database torrent cache, please wait...')
                self.con.execute(f"CREATE TABLE comiclib_torrent2gid_v{blur_title_version} (title TEXT NOT NULL, gid INTEGER NOT NULL, FOREIGN KEY (gid) REFERENCES gallery (gid))")
                for torrents, gid in self.con.execute("SELECT torrents, gid FROM gallery"):
                    if torrents is None: continue
                    for torrent in ast.literal_eval(torrents):
                        if torrent['name'] is None: continue
                        self.con.execute(f"INSERT INTO comiclib_torrent2gid_v{blur_title_version} VALUES(?, ?)", (blur_title(Path(torrent['name']).stem), gid))
                self.con.execute(f"CREATE INDEX torrent_index_v{blur_title_version} ON comiclib_torrent2gid_v{blur_title_version} (title)")
                self.con.commit()
            self.con.row_factory = dict_factory
        else:
            logger.warning(f"{db_path} not found. importEHdb.py will be skipped. Please download it from https://sukebei.nyaa.si/user/gipaf23445 if you need it.")
            self.con = None
    
    def get_gid(self, metadata: dict):
        if not metadata["source"] is None and not (m := re.match(r"https?://e[x-]hentai\.org/g/(\d+)/", metadata["source"])) is None:
            return m[1]
        if settings.importEHdb_matchtitle:
            if (row := self.con.execute(f"SELECT gid FROM {title2gid_table} INDEXED BY {title2gid_index} WHERE title == ?", (blur_title(metadata["title"]),)).fetchone()) is not None:
                return row['gid']
            elif (row := self.con.execute(f"SELECT gid FROM {titlejpn2gid_table} INDEXED BY {titlejpn2gid_index} WHERE title_jpn == ?", (blur_title(metadata["title"]),)).fetchone()) is not None:
                return row['gid']
            elif (row := self.con.execute(f"SELECT gid FROM {titlejpn2gid_table} INDEXED BY {titlejpn2gid_index} WHERE title_jpn == ?", (blur_title(metadata["subtitle"]),)).fetchone()) is not None:
                return row['gid']
        if settings.importEHdb_matchtorrent:
            if (row := self.con.execute(f"SELECT gid FROM comiclib_torrent2gid_v{blur_title_version} INDEXED BY torrent_index_v{blur_title_version} WHERE title == ?", (blur_title(metadata["title"]),)).fetchone()) is not None:
                return row['gid']
            elif (row := self.con.execute(f"SELECT gid FROM comiclib_torrent2gid_v{blur_title_version} INDEXED BY torrent_index_v{blur_title_version} WHERE title == ?", (blur_title(metadata["subtitle"]),)).fetchone()) is not None:
                return row['gid']
        return None
    
    def scan(self, path: Path, id: str, metadata: dict, prev_scanners: list[str]) -> bool:
        if self.con is None:
            return False
        elif prev_scanners and not (gid := self.get_gid(metadata)) is None:
            logger.info(f' <- {path}')
            res = self.con.execute("SELECT title, title_jpn, category, posted, thumb, token, artist, `group`, parody, character, female, male, language, mixed, other, cosplayer, rest FROM gallery WHERE gid == ?", (gid,)).fetchone()
            if res is None: return False
            token = res.pop('token')
            metadata["id"] = f"EH{gid:>018}{token}{id[-10:]}"
            metadata["title"] = res.pop("title")
            metadata["subtitle"] = res.pop("title_jpn")
            thumb = res.pop("thumb")
            if settings.importEHdb_thumb:
                metadata["thumb"] = thumb
            metadata["categories"] = set((res.pop("category"),))
            metadata["tags"] = set()
            metadata["tags"].add(f"date_posted:{date.fromtimestamp(res.pop('posted'))}")
            for namespace in res:
                if res[namespace] is None: continue
                metadata["tags"] |= set(map(lambda v: namespace+':'+v, ast.literal_eval(res[namespace])))
            if metadata["source"] is None or not re.fullmatch(r"https?://e[x-]hentai\.org/g/(\d+)/", metadata["source"]) is None:
                metadata["source"] = f"https://exhentai.org/g/{gid}/{token}/"
            return True
        else:
            return False
    
    def __del__(self) -> None:
        if not self.con is None:
            self.con.close()