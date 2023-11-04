from pathlib import Path
from ..utils import extract_thumbnail

import logging
logger = logging.getLogger(__name__)

class Scanner:
    '''Generate thumbnails from files.'''
    
    def scan(self, path: Path, id: str, metadata: dict, prev_scanners: list[str]) -> bool:
        if not prev_scanners or not metadata.get('thumb') is None:
            return False
        logger.info(f' <- {path}')
        thumb = extract_thumbnail(path, metadata['id'], 1, cover=True)
        metadata['thumb'] = str(thumb)
        return True
