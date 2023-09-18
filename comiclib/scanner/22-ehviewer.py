from pathlib import Path
import re

import logging
logger = logging.getLogger(__name__)

class Scanner:
    '''For archives downloaded via Ehviewer'''
    
    def scan(self, path: Path, id: str, metadata: dict, prev_scanners: list[str]) -> bool:
        if path.is_dir() and not (m := re.match(r'(\d+)-(.+)', path.name)) is None:
            logger.info(f' <- {path}')
            metadata["source"] = 'https://exhentai.org/g/' + m[1] + '/'
            metadata["title"] = m[2]
            metadata["pagecount"] = len([p for p in path.iterdir() if not p.name.startswith('.')])
            return metadata["pagecount"] > 0
        else:
            return False