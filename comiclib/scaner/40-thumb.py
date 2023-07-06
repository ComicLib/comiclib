from pathlib import Path
from ..utils import extract_thumbnail

class Scaner:
    '''Generate thumbnails from files.'''
    
    def scan(self, path: Path, id: str, metadata: dict, prev_scaners: list[str]) -> bool:
        if not prev_scaners or not metadata.get('thumb') is None:
            return False
        print(f' -> thumb.py get {path}')
        thumb = extract_thumbnail(path, id, 1)
        metadata['thumb'] = str(thumb)
        return True
