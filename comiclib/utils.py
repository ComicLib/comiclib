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

def convert_image(f_or_path, saveto: str, thumbnail=False):
    try:
        with Image.open(f_or_path) as im:
            if thumbnail:
                im.thumbnail((500, 709))
            im.save(saveto)
    except PIL.UnidentifiedImageError:
        if not isinstance(f_or_path, Path):
            with tempfile.NamedTemporaryFile() as tmpf:  # libjxl has problem with pipe yet
                f_or_path.seek(0)
                shutil.copyfileobj(f_or_path, tmpf)
                tmpf.flush()
                cmd = ['ffmpeg', '-i', tmpf.name, '-vf', 'scale=500:-1', str(saveto), '-y'] if thumbnail else ['ffmpeg', '-i', tmpf.name, str(saveto), '-y']
                subprocess.run(cmd, check=True, stderr=None if settings.debug else subprocess.DEVNULL)
        else:
            cmd = ['ffmpeg', '-i', str(f_or_path), '-vf', 'scale=500:-1', str(saveto), '-y'] if thumbnail else ['ffmpeg', '-i', str(f_or_path), str(saveto), '-y']
            subprocess.run(cmd, check=True, stderr=None if settings.debug else subprocess.DEVNULL)


def extract_thumbnail(path: Union[str, Path], id: str, page: int, cache=False, cover=False) -> Path:
    path = Path(path)
    saveto = Path(settings.thumb) / id / f'{page}.webp'
    if cache and saveto.exists():
        return saveto.relative_to(settings.thumb)
    saveto.parent.mkdir(parents=True, exist_ok=True)
    if path.is_dir():
        convert_image(sorted(filter(lambda p:p.suffix != '.txt' and not p.name.startswith('.'), path.iterdir()))[page-1], saveto, thumbnail=True)
    elif path.suffix == '.zip':
        with ZipFile(path) as z:
            with z.open(list(filter(lambda z_info: not z_info.is_dir(), z.infolist()))[page-1].filename) as f:
                convert_image(f, saveto, thumbnail=True)
    else:
        raise NotImplementedError
    if cover:
        cover_path = Path(settings.cover) / f'{id}.webp'
        cover_path.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(saveto, cover_path)
        return cover_path.name
    return saveto.relative_to(settings.thumb)