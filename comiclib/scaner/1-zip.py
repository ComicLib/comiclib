from pathlib import Path

from zipfile import ZipFile


class Scaner:
    '''Handle regular zip files, with the filename as the title.'''
    
    async def scan(self, path: Path, archive: dict, prev_scaners: list[str]) -> bool:
        if path.match('**/*.zip') and not path.is_dir():
            print(f' -> zip.py get {path}')
            archive["title"] = path.stem
            with ZipFile(path) as z:
                archive["pagecount"] = len(
                    list(filter(lambda z_info: not z_info.is_dir(), z.infolist())))
            assert archive["pagecount"] > 0
            return True
        else:
            return False
