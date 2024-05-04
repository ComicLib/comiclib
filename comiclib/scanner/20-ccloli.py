from pathlib import Path
from zipfile import ZipFile
import re

import logging
logger = logging.getLogger(__name__)

try:
    from charset_normalizer import from_bytes
    def decode(s):
        return str(from_bytes(s).best())
except ModuleNotFoundError:
    decode = lambda s: s.decode()

class Scanner:
    '''For https://github.com/ccloli/E-Hentai-Downloader'''
    
    def scan(self, path: Path, id: str, metadata: dict, prev_scanners: list[str]) -> bool:
        if not '10-zip' in prev_scanners:
            return False
        with ZipFile(path) as z:
            if "info.txt" in z.namelist():
                with z.open("info.txt") as f:
                    info = decode(f.read()).splitlines()
                    if len(info) < 3: return False
            elif (z_comments := decode(z.comment).splitlines()) and len(z_comments) >= 3:
                info = z_comments
            else:
                return False
            logger.info(f' <- {path}')
            metadata["source"] = info[2]
            m = re.match(r"https?://e[x-]hentai\.org/g/(\d+)/(\w+)", metadata["source"])
            if m is None:
                return False
            metadata["title"] = info[0]
            metadata["subtitle"] = info[1]
            metadata["id"] = f"EH{m[1]:>018}{m[2]}{id[-10:]}"
            line_tags = False
            for line in info:
                if line.startswith("Category: "): metadata["categories"].add(line.removeprefix("Category: "))
                elif line_tags:
                    if line.startswith("> "):
                        namespace, _, names = line.removeprefix("> ").replace("：", ":", 1).partition(':')
                        for name in names.split(","):
                            metadata["tags"].add(f"{namespace}:{name.strip()}")
                    else:
                        line_tags = False
                elif line == "Tags:": line_tags = True
            return True