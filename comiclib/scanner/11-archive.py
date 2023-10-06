from pathlib import Path

from comiclib.utils import is_image, ArchiveFile

import logging
logger = logging.getLogger(__name__)

class Scanner:
    '''Handle regular archived files, except zip, with the filename as the title.'''
    
    def scan(self, path: Path, id: str, metadata: dict, prev_scanners: list[str]) -> bool:
        if '10-zip' not in prev_scanners and not ArchiveFile.support_formats.fullmatch(path.name) is None and not path.is_dir():
            logger.info(f' <- {path}')
            metadata["title"] = path.stem
            with ArchiveFile(path) as z:
                metadata["pagecount"] = len(
                    list(filter(lambda z_info: not z_info.is_dir() and is_image(z_info.filename), z.infolist())))
            assert metadata["pagecount"] > 0
            return True
        else:
            return False
