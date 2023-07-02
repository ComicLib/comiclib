from pathlib import Path
import sqlite3, re


def dict_factory(cursor, row):
    fields = [column[0] for column in cursor.description]
    return {key: value for key, value in zip(fields, row)}

class Scaner:
    '''Import the dumped e-hentai metadata database (you can download it from https://sukebei.nyaa.si/view/3812785).
Currently only support matching by the source URL (from previous scaners).'''
    
    def __init__(self) -> None:
        if Path("api_dump.sqlite").exists():
            self.con = sqlite3.connect("api_dump.sqlite", check_same_thread=False)
            self.con.row_factory = dict_factory
        else:
            self.con = None
    
    async def scan(self, id: str, path: Path, metadata: dict, prev_scaners: list[str]) -> bool:
        if self.con is None:
            return False
        elif metadata["source"] is None:
            return False
        elif not (m := re.match(r"https?://e[x-]hentai\.org/g/(\d+)/", metadata["source"])) is None:
            print(f' -> importEHdb get {path}')
            res = self.con.execute("SELECT title, title_jpn, category, thumb, artist, `group`, parody, character, female, male, language, mixed, other, cosplayer, rest FROM gallery WHERE gid == ?", (m[1],)).fetchone()
            if res is None: return False
            metadata["title"] = res.pop("title")
            metadata["subtitle"] = res.pop("title_jpn")
            metadata["thumb"] = res.pop("thumb")
            metadata["categories"] = set((res.pop("category"),))
            metadata["tags"] = set()
            for namespace in res:
                if res[namespace] is None: continue
                metadata["tags"] |= set(map(lambda v: namespace+':'+v.strip(" []'"), res[namespace].split(',')))
            return True
        else:
            return False
    
    def __del__(self) -> None:
        if not self.con is None:
            self.con.close()