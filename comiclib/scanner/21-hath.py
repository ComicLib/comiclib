from pathlib import Path
import re

import logging
logger = logging.getLogger(__name__)

class Scanner:
    '''For archives downloaded via Hentai@Home'''
    
    def scan(self, path: Path, id: str, metadata: dict, prev_scanners: list[str]) -> bool:
        if path.is_dir() and (path / 'galleryinfo.txt').exists():
            logger.info(f' <- {path}')
            if (match := re.search(r"\[(\d+)(?:-\d+x)?\]$", path.name, re.ASCII)) is not None:
                metadata["source"] = 'https://exhentai.org/g/' + match[1] + '/'
            elif re.fullmatch(r"\d+", path.name, re.ASCII) is not None:
                metadata["source"] = 'https://exhentai.org/g/' + path.name + '/'
            else:
                raise Exception(f"Unknow hath folder name: {path.name}")
            information = (path / 'galleryinfo.txt').read_text().splitlines()
            _key, _, title = information[0].partition(':')
            assert _key == 'Title'
            metadata["title"] = title.lstrip()
            _key, _, tags = information[4].partition(':')
            assert _key == 'Tags'
            metadata["tags"] = set(tags.lstrip().split(', '))
            _key, _, date_posted = information[1].partition(':')
            assert _key == 'Upload Time'
            metadata["tags"].add(f"date_posted:{date_posted.lstrip().partition(' ')[0]}")
            metadata["pagecount"] = len(list(path.iterdir())) - 1
            return True
        else:
            return False
