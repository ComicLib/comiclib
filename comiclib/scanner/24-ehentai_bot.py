from pathlib import Path
from zipfile import ZipFile
import re, json
from datetime import date

import logging
logger = logging.getLogger(__name__)

class Scanner:
    '''For https://github.com/z-mio/ehentai_bot and https://github.com/mhdy2233/tg-eh-distributed-arc-bot, with <gid>.json put into the zip archive.'''
    
    def scan(self, path: Path, id: str, metadata: dict, prev_scanners: list[str]) -> bool:
        if not '10-zip' in prev_scanners or '20-ccloli' in prev_scanners:
            return False
        with ZipFile(path) as z:
            for filename in z.namelist():
                if (m := re.fullmatch(r'(\d+)\.json', filename, flags=re.ASCII)):
                    with z.open(filename) as f:
                        json_content = json.load(f)
                        if not isinstance(json_content, dict):
                            break
                        gmetadata = json_content.get('gmetadata')
                        if not (isinstance(gmetadata, list) and len(gmetadata) == 1 and isinstance(gmetadata[0], dict)):
                            break
                        logger.info(f' <- {path}')
                        gmetadata = gmetadata[0]
                        if gmetadata.get('gid') != int(m[1]):
                            break
                        metadata["id"] = f"EH{gmetadata['gid']:>018}{gmetadata['token']}{id[-10:]}"
                        metadata["title"] = gmetadata['title']
                        metadata["subtitle"] = gmetadata['title_jpn']
                        metadata["categories"] = set((gmetadata['category'],))
                        metadata["thumb"] = gmetadata['thumb']
                        metadata["pagecount"] = gmetadata['filecount']
                        metadata["tags"] = gmetadata['tags'] + [
                            f"date_posted:{date.fromtimestamp(int(gmetadata['posted']))}",
                        ]
                        metadata["source"] = f"https://exhentai.org/g/{gmetadata['gid']}/{gmetadata['token']}/"
                        return True
        return False
