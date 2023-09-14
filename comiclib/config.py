from pydantic import BaseSettings
from typing import Union
import re

class Settings(BaseSettings):
    debug: bool = False
    content: str = '.'
    thumb: str = './thumb'
    metadata: str = 'sqlite:///./comiclib_metadata.db'
    password: Union[str, None] = None
    skip_exits: bool = True
    watch: bool = True
    UA_convert_jxl: str = 'Android'
    UA_convert_all: str = r'\b\B'  # default: match nothing

settings = Settings()

if settings.debug:
    print(settings)

settings.UA_convert_jxl = re.compile(settings.UA_convert_jxl)
settings.UA_convert_all = re.compile(settings.UA_convert_all)
