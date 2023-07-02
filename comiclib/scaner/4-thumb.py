from pathlib import Path
from ..utils import extract_thumbnail

class Scaner:
    '''Generate thumbnails from files.'''
    
    async def scan(self, id: str, path: Path, metadata: dict, prev_scaners: list[str]) -> bool:
        if not prev_scaners or not metadata.get('thumb') is None:
            return False
        print(f' -> thumb.py get {path}')
        thumb = await extract_thumbnail(path, id, 1)
        metadata['thumb'] = str(thumb)
        return True
