from typing import Union
from pathlib import Path
from zipfile import ZipFile
import asyncio
import subprocess
import tempfile
import shutil
import PIL
from PIL import Image
try:
    from jxlpy import JXLImagePlugin
except ModuleNotFoundError:
    pass

from .config import settings

def extract_thumbnail(path: Union[str, Path], id: str, page: int, cache=False) -> Path:
    path = Path(path)
    saveto = Path(settings.thumb) / (id+'.webp') if page == 1 else Path(settings.thumb) / id / f'{page}.webp'
    if cache and saveto.exists():
        return saveto.relative_to(settings.thumb)
    saveto.parent.mkdir(parents=True, exist_ok=True)
    if path.is_dir():
        raise NotImplementedError
    elif path.suffix == '.zip':
        with ZipFile(path) as z:
            with z.open(list(filter(lambda z_info: not z_info.is_dir(), z.infolist()))[page-1].filename) as f:
                try:
                    with Image.open(f) as im:
                        im.thumbnail((500, 709))
                        im.save(saveto)
                except PIL.UnidentifiedImageError:
                    with tempfile.NamedTemporaryFile() as tmpf:  # libjxl has problem with pipe yet
                        f.seek(0)
                        shutil.copyfileobj(f, tmpf)
                        tmpf.flush()
                        cmd = ['ffmpeg', '-i', tmpf.name, '-vf', 'scale=500:-1', str(saveto), '-y']
                        # proc = await asyncio.create_subprocess_exec(*cmd, stderr=None if settings.debug else subprocess.DEVNULL)
                        # if not (returncode := await proc.wait()) == 0:
                        #     raise subprocess.CalledProcessError(returncode, cmd)
                        subprocess.run(cmd, check=True, stderr=None if settings.debug else subprocess.DEVNULL)
        return saveto.relative_to(settings.thumb)
    else:
        raise NotImplementedError