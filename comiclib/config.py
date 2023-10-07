from pydantic_settings import BaseSettings
from typing import Union
import re
import logging

logger = logging.getLogger('ComicLib')

class Settings(BaseSettings):
    debug: bool = False
    loglevel: str = 'INFO'
    content: str = '.'
    cover: str = './thumb'
    thumb: Union[str, None] = None
    metadata: str = 'sqlite:///./comiclib_metadata.db'
    password: Union[str, None] = None
    skip_exits: bool = True
    watch: bool = True
    display_subtitle: bool = True
    UA_convert_jxl: str = 'Android'
    UA_convert_all: str = r'\b\B'  # default: match nothing

settings = Settings()

if settings.debug:
    settings.loglevel = 'DEBUG'
numeric_level = getattr(logging, settings.loglevel.upper(), None)
if not isinstance(numeric_level, int):
    raise ValueError(f'Invalid log level: {settings.loglevel}')
logging.basicConfig(format='%(asctime)s %(levelname)-8s %(name)s: %(message)s',
                    datefmt='%Y-%m-%d %H:%M:%S',
                    level=numeric_level)
logger.debug(settings)

settings.UA_convert_jxl = re.compile(settings.UA_convert_jxl)
settings.UA_convert_all = re.compile(settings.UA_convert_all)
if settings.thumb is None:
    settings.thumb = settings.cover
