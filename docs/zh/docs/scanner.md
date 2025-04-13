# 扫描脚本

请先阅读 [扫描与监视的细节](scan&watch.md)。

扫描脚本分为[内置脚本](https://github.com/ComicLib/comiclib/tree/master/comiclib/scanner)和外置脚本，所有工作目录下的 *.py 文件都会作为外置脚本加载。

对于每个候选漫画文件（夹），扫描脚本按照文件名的顺序（与是否内置无关）像流水线一样依次执行，完成不同的任务。

可以在[官方仓库](https://github.com/ComicLib/scanner)找到一些外置扫描脚本，也可以下载其他人编写的。另外，只要会一些简单的 Python 就可以自己编写。

## 内置扫描脚本

### 10-zip.py

将 *.zip 文件作为漫画文件。

### 11-archive.py

将常见压缩文件（除 zip 外）作为漫画文件。
需要安装 7-Zip，请从 [https://7-zip.org/download.html](https://7-zip.org/download.html) 下载并确保 7zzs 或 7zz 或 7z 处在工作目录或 PATH 指示的目录内。从其他一些渠道获取的 7-Zip 可能不支持 rar 文件。

### 20-ccloli.py

解析通过 [ccloli/E-Hentai-Downloader](https://github.com/ccloli/E-Hentai-Downloader) 下载的漫画文件。

### 21-hath.py

解析通过 [Hentai@Home](https://ehwiki.org/wiki/Hentai@Home#H.40H_Downloader) 下载的漫画文件夹。

### 22-ehviewer.py

解析通过 [EhViewer](https://github.com/seven332/EhViewer) 下载的漫画文件夹。

### 23-xeHentai.py

解析通过 [xeHentai](https://github.com/fffonion/xeHentai) 下载的漫画文件。

### 24-ehentai_bot.py

解析通过 [EHentai Telegram bot](https://github.com/z-mio/ehentai_bot) 或 [分布式tg eh归档bot](https://github.com/mhdy2233/tg-eh-distributed-arc-bot) 下载的漫画文件，需要将元数据文件 `<gid>.json` 放进 zip 存档中。

### 30-importEHdb.py

从 [ehentai 元数据库](https://sukebei.nyaa.si/user/gipaf23445)导入相应的元数据。
使用前要将数据库 api_dump.sqlite 下载到工作目录，否则会跳过。

环境变量设置：

| 环境变量 | 说明 | 默认值 |
| ------- | ---- | ----- |
| `importEHdb_thumb` | 是否从中导入缩略图（`True`/`False`）| `True` |
| `importEHdb_matchtitle` | 是否根据标题匹配（`True`/`False`/`exact`），`exact`为精准匹配，`True`模糊匹配 | `True` |
| `importEHdb_matchtorrent` | 是否根据种子标题匹配（`True`/`False`）| `True` |
| `importEHdb_database_URI` | ehentai 元数据库的 [URI](https://www.sqlite.org/uri.html) | `file:api_dump.sqlite?mode=rw` |

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
from pydantic import Field
from pydantic_settings import BaseSettings
# some import and pre-process
# this may be executed multiple times, thus should avoid things like opening files

# optional
class Settings(BaseSettings):
    myscanner_settingA: bool = True  # It is recommended to prefix with the scanner name
    myscanner_settingB: Union[bool, str] = Field(default=True, union_mode='left_to_right')
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
* `id`: 由 ComicLib 预生成的唯一 ID，是相对于 `CONTENT` 的路径的散列值，但最终数据库使用的是 `metadata[id]` 给出的 ID，见下面自定义ID的说明。
* `metadata`: 由前面脚本处理后得到的元数据，字段有 `id`, `title`, `subtitle` `source`, `pagecount`, `tags`, `categories`，除`id` 外最初值皆为 `None` 或 `set()`。扫描脚本将得到的元数据写入该 `dict`。
* `prev_scanners`: 前面返回 `True` 的脚本名称。

!!! example "自定义ID（试验性）"
    ComicLib 先根据路径预生成一个唯一 ID，以 `00` 开头，作为参数 `id` 的值。最初这一 ID 与 `metadata[id]` 相同。
    扫描脚本可以根据 `id` 、前面扫描脚本修改的 `metadata[id]` 和其他信息生成一个新的 ID，写入 `metadata[id]`。
    一般约定 ID 的前几个字符表示 ID 的含义，如内置脚本用 `EH` 表示其设计的带有 ehentai gid 信息的 ID。
    最终的 `metadata[id]` 作为漫画的唯一标识符写入数据库。
    ID 必须保证唯一，且为 40 个字符。自定义 ID 对重新扫描更新元数据无效。
