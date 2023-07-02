from pathlib import Path

from zipfile import ZipFile


class Scaner:
    '''Handle regular zip files, with the filename as the title.'''
    
    async def scan(self, path: Path, id: str, metadata: dict, prev_scaners: list[str]) -> bool:
        if path.match('**/*.zip') and not path.is_dir():
            print(f' -> zip.py get {path}')
            metadata["title"] = path.stem
            with ZipFile(path) as z:
                metadata["pagecount"] = len(
                    list(filter(lambda z_info: not z_info.is_dir(), z.infolist())))
            assert metadata["pagecount"] > 0
            return True
        else:
            return False
