from pathlib import Path
from typing import Union
import sqlite3, re, ast
from datetime import date
from pydantic import Field
from pydantic_settings import BaseSettings

class Settings(BaseSettings):
    importEHdb_thumb: bool = True
    importEHdb_matchtitle: Union[bool, str] = Field(default=True, union_mode='left_to_right')
    importEHdb_matchtorrent: bool = True
settings = Settings()

import logging
logger = logging.getLogger(__name__)

def blur_title(title: str):
    if not isinstance(title, str):
        return title
    if settings.importEHdb_matchtitle == 'exact':
        return title
    return title.translate(str.maketrans({
        ' ': None,
        '*': None,
        '_': None,
        '(': None,
        ')': None
    }))

def dict_factory(cursor, row):
    fields = [column[0] for column in cursor.description]
    return {key: value for key, value in zip(fields, row)}

class Scanner:
    '''Import the dumped e-hentai metadata database api_dump.sqlite (you can download it from https://sukebei.nyaa.si/user/gipaf23445).
Currently only support matching by the source URL (from previous scanners).'''
    
    def __init__(self) -> None:
        if Path("api_dump.sqlite").exists():
            logger.info('Loading ehentai metadata database, please wait...')
            self.con = sqlite3.connect("api_dump.sqlite", check_same_thread=False)
            if settings.importEHdb_matchtitle:
                self.db_title = {blur_title(row[0]): row[1] for row in self.con.execute("SELECT title, gid FROM gallery") if not row[0] is None}
                self.db_title_jpn = {blur_title(row[0]): row[1] for row in self.con.execute("SELECT title_jpn, gid FROM gallery") if not row[0] is None}
            if settings.importEHdb_matchtorrent:
                self.db_title_torrent = {}
                for torrents, gid in self.con.execute("SELECT torrents, gid FROM gallery"):
                    if torrents is None: continue
                    for torrent in ast.literal_eval(torrents):
                        if torrent['name'] is None: continue
                        self.db_title_torrent[blur_title(Path(torrent['name']).stem)] = gid
            self.con.row_factory = dict_factory
            logger.info('Loaded.')
        else:
            self.con = None
    
    def get_gid(self, metadata: dict):
        if not metadata["source"] is None and not (m := re.match(r"https?://e[x-]hentai\.org/g/(\d+)/", metadata["source"])) is None:
            return m[1]
        if settings.importEHdb_matchtitle:
            if not (gid := self.db_title.get(blur_title(metadata["title"]))) is None:
                return gid
            elif not (gid := self.db_title_jpn.get(blur_title(metadata["title"]))) is None:
                return gid
            elif not (gid := self.db_title_jpn.get(blur_title(metadata["subtitle"]))) is None:
                return gid
        if settings.importEHdb_matchtorrent:
            if not (gid := self.db_title_torrent.get(blur_title(metadata["title"]))) is None:
                return gid
            elif not (gid := self.db_title_torrent.get(blur_title(metadata["subtitle"]))) is None:
                return gid
        return None
    
    def scan(self, path: Path, id: str, metadata: dict, prev_scanners: list[str]) -> bool:
        if self.con is None:
            return False
        elif prev_scanners and not (gid := self.get_gid(metadata)) is None:
            logger.info(f' <- {path}')
            res = self.con.execute("SELECT title, title_jpn, category, posted, thumb, artist, `group`, parody, character, female, male, language, mixed, other, cosplayer, rest FROM gallery WHERE gid == ?", (gid,)).fetchone()
            if res is None: return False
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
                token = self.con.execute("SELECT token FROM gallery WHERE gid == ?", (gid,)).fetchone()['token']
                metadata["source"] = f"https://exhentai.org/g/{gid}/{token}/"
            return True
        else:
            return False
    
    def __del__(self) -> None:
        if not self.con is None:
            self.con.close()