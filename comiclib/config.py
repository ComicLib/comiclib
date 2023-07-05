from pydantic import BaseSettings
from typing import Union
import re

class Settings(BaseSettings):
    debug: bool = False
    skip_exits: bool = True
    content: str = '.'
    thumb: str = './thumb'
    UA_convert_jxl: str = 'Android'
    UA_convert_all: str = r'\b\B'  # default: match nothing
    password: Union[str, None] = None

settings = Settings()

if settings.debug:
    print(settings)

settings.UA_convert_jxl = re.compile(settings.UA_convert_jxl)
settings.UA_convert_all = re.compile(settings.UA_convert_all)
