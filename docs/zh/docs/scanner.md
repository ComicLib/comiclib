# 扫描脚本

ComicLib 的主体仅负责遍历漫画库，漫画文件的判断、解析等都是通过扫描脚本完成的。

扫描脚本分为[内置脚本](https://github.com/ComicLib/comiclib/tree/master/comiclib/scanner)和外置脚本，所有工作目录下的 *.py 文件都会作为外置脚本加载。

对于每个候选漫画文件（夹），扫描脚本按照文件名的顺序（与是否内置无关）依次执行，完成不同的任务。

可以在[官方仓库](https://github.com/ComicLib/scanner)找到一些外置扫描脚本，也可以下载其他人编写的。另外，只要会一些简单的 Python 就可以自己编写。

默认情况下除了在启动时扫描一遍，也会在运行时监视漫画库。
遇到曾扫入数据库的漫画会跳过。
参考[设置](settings.md)以变更行为。

## 内置扫描脚本

### 10-zip.py

将 *.zip 文件作为漫画文件。

### 20-ccloli.py

解析通过 [ccloli/E-Hentai-Downloader](https://github.com/ccloli/E-Hentai-Downloader) 下载的漫画文件。

### 21-hath.py

解析通过 [Hentai@Home](https://ehwiki.org/wiki/Hentai@Home#H.40H_Downloader) 下载的漫画文件夹。

### 22-ehviewer.py

解析通过 [EhViewer](https://github.com/seven332/EhViewer) 下载的漫画文件夹。

### 30-importEHdb.py

从 [ehentai 元数据库](https://sukebei.nyaa.si/user/gipaf23445)导入相应的元数据。
使用前要将数据库 api_dump.sqlite 下载到工作目录，否则会跳过。

环境变量设置：

| 环境变量 | 说明 | 默认值 |
| ------- | ---- | ----- |
| `importEHdb_thumb` | 是否从中导入缩略图（`True`/`False`）| `True` |
| `importEHdb_matchtitle` | 是否根据标题匹配（`True`/`False`/`exact`），`exact`为精准匹配，`True`模糊匹配 | `True` |
| `importEHdb_matchtorrent` | 是否根据种子标题匹配（`True`/`False`）| `True` |

根据 ehentai gid 匹配总是启用。

### 40-thumb.py

从漫画文件生成首页缩略图。

## 自己动手编写扫描脚本

由于扫描脚本是根据文件名确定执行顺序，因此在文件名开头添加数字。
一般约定

* 以 1 开头的扫描脚本通过文件类型判断是否为漫画文件，以及基本的解析（如将文件名作为标题、统计页数）；
* 以 2 开头的扫描脚本解析通过特定下载器下载的文件的元数据；
* 以 3 开头的扫描脚本对前面得到的元数据进行后处理；
* 以 4 开头的扫描脚本负责生成缩略图。

扫描脚本的基本结构如下
``` python
from pathlib import Path
from typing import Union
from pydantic_settings import BaseSettings
# some import and pre-process
# this may be executed multiple times, thus should avoid things like opening files

# optional
class Settings(BaseSettings):
    myscanner_settingA: bool = True  # It is recommended to prefix with the scanner name
    myscanner_settingB: Union[bool, str] = True
settings = Settings()

class Scanner:
    '''Your docstrings'''

    # optional
    def __init__(self) -> None:
        # Some initializations will only be executed once
    
    def scan(self, path: Path, id: str, metadata: dict, prev_scanners: list[str]) -> bool:
        # Process each file/directory
        if xxx:
            ...
            return True
        else:
            return False
```
其中 `Scanner.scan` 是实际扫描每个文件/目录的函数。

其返回值指示该扫描脚本是否成功处理（如认为这一文件/目录是有效漫画，或有无修改的元数据）。
如果所有脚本扫描后都得到 `False`，则 ComicLib 认为该文件/目录不是有效漫画，不存入数据库。
这一返回值也作为后面脚本的参考。

`Scanner.scan` 的参数：

* `path`: 文件/目录路径
* `id`: 由 ComicLib 生成的唯一 ID，不要试图写入此值
* `metadata`: 由前面脚本处理后得到的元数据，字段有 `title`, `subtitle` `source`, `pagecount`, `tags`, `categories`，最初值皆为 `None` 或 `set()`。扫描脚本将得到的元数据写入该 `dict`。
* `prev_scanners`: 前面返回 `True` 的脚本名称。
