from pathlib import Path
from zipfile import ZipFile
import re

import logging
logger = logging.getLogger(__name__)

class Scanner:
    '''For https://github.com/fffonion/xeHentai'''
    
    def scan(self, path: Path, id: str, metadata: dict, prev_scanners: list[str]) -> bool:
        if not '10-zip' in prev_scanners or '20-ccloli' in prev_scanners:
            return False
        with ZipFile(path) as z:
            try:
                comment = z.comment.decode("utf-8")
            except UnicodeDecodeError:
                return False
            if (m := re.fullmatch('xeHentai Archiver v\\S+\nTitle:(.+)\nOriginal URL:(\\S+)', comment)) is not None:
                metadata["title"] = m[1]
                metadata["source"] = m[2]
                source = re.match(r"https?://e[x-]hentai\.org/g/(\d+)/(\w+)", metadata["source"])
                if source is None:
                    logger.error(metadata["source"])
                    raise NotImplementedError('Unknow source format.')
                metadata["id"] = f"EH{source[1]:>018}{source[2]}{id[-10:]}"
                return True
            else:
                return False
