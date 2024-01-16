# 开始使用

## 安装

推荐的方式是通过 pip 安装。

确保你安装了 [🐍 Python ⩾ 3.9](https://www.python.org/downloads/)。
=== "Linux/MacOS"
    由于 [PEP 668](https://peps.python.org/pep-0668/)，你可能需要在虚拟环境中安装，以 [venv](https://docs.python.org/zh-cn/3/library/venv.html) 为例：
    !!! tip inline end "直接 pip 安装"
        如果你不想使用虚拟环境，你可以直接 pip 安装并加上 `--break-system-packages`。
    ``` bash
    python3 -m venv /我的/新/虚拟环境/位置 # (3)!
    source /我的/新/虚拟环境/位置/bin/activate # (2)!
    pip install -U "comiclib[full]" # (1)!
    ```
    
    1.  `[full]` 指定了完整安装。`-U` 指定升级 ComicLib（如果存在旧版本）。
    2.  由于虚拟环境不是系统默认环境，以后启动前都需运行这条命令启动虚拟环境。
    3.  该路径下会创建虚拟环境所需的文件。

=== "Windows"
    打开命令提示符或 PowerShell，运行
    ``` yaml
    pip install -U "comiclib[full]" # (1)!
    ```
    
    1.  `[full]` 指定了完整安装。`-U` 指定升级 ComicLib（如果存在旧版本）。

### 从 GitHub 安装

如果你想要尝试最新的功能或修补，可以考虑从源码安装：
``` bash
pip install -U "comiclib[full] @ git+https://github.com/comiclib/comiclib.git"
```

### Docker（试验性）

!!! tip inline end "最小安装"
    使用 tag `v0.0.5`（没有`-full`后缀）的镜像不自带 ehentai 元数据库，其大小会小很多。可手动下载 ehentai 元数据库并将其放在 `/userdata` 下。

``` bash
docker run -p 8000:8000 \
--mount type=bind,source=你的漫画库路径,target=/root/comiclib \
--mount type=bind,source=将要存放数据的路径,target=/userdata \
ghcr.io/comiclib/comiclib:v0.0.5-full
```

现在 ComicLib 运行在了 http://localhost:8000 。

注：目前监视漫画文件夹默认对 Docker 禁用。


## 运行

切换工作目录到你的漫画库的位置，通过如下命令启动：
!!! warning inline end "注意"
    工作目录下不要存在无关的 *.py 文件，因为这会被误当成扫描脚本。
``` bash
comiclib
```
它会自动扫描当前工作目录下的漫画，具体细节见[扫描脚本](scanner.md)。

!!! tip "如果你使用 ehentai"
    强烈建议先[从此](https://sukebei.nyaa.si/user/gipaf23445)下载 ehentai 元数据库 api_dump.sqlite 至工作目录，详见[扫描脚本的说明](scanner.md#30-importehdbpy)。

!!! danger "不要随意更改工作目录"
    扫描得到的元数据默认存于工作目录，因此下次运行时也要在此目录。
    可以设置数据库为一绝对路径，这样就不用担心这一问题。

等待启动完成提示后，现在你可以打开 http://localhost:8000 开始阅读了。

几乎所有设置都通过环境变量指定，你可以在[设置](settings.md)找到所有的环境变量，下面是一个最常见的例子。

!!! question "想要彻底重新开始"
    如果你搞错了什么事，想重新开始。
    只需停止程序，删除元数据库（./comiclib_metadata.db），删除缩略图（默认在 ./thumb）即可。

### 指定扫描漫画的位置

默认扫描当前工作目录，可以通过环境变量`CONTENT`来指定.
=== "Linux/MacOS"
    你可以在命令前添加它
    ``` bash
    CONTENT=/我的/漫画/路径 comiclib
    ```
    或者先设定好
    ``` bash
    export CONTENT=/我的/漫画/路径
    comiclib
    ```
=== "Windows"
    ```
    set CONTENT=D:\我的\漫画\路径
    comiclib
    ```

### 修改绑定的端口或IP地址

使用以下命令运行而不是直接运行 `comiclib`
```
uvicorn comiclib.main:app --host 0.0.0.0 --port 80
```
其中`--host 0.0.0.0`指定绑定的IP（`0.0.0.0`可使局域网访问），`--port 80`指定了绑定的端口。

!!! tip "通过 uvicorn 配置服务器网络相关设置"
    服务器网络相关设置皆由 uvicorn 配置。
    例如可通过 `--uds` 绑定到 UNIX 域套接字，通过 `--reload` 在开发期间自动重载。
    更多请参阅 [uvicorn 的文档](https://www.uvicorn.org)。

### 进阶：通过 Gunicorn 高性能运行（仅适用于类 UNIX 系统）

Gunicorn 提供了强大的并发性能。由于依赖 UNIX 的 fork 功能，其不能在 Windows 上运行。

通过 pip 安装（当然，如果你使用了虚拟环境，任何安装或使用前都要激活它）：
``` bash
pip install gunicorn
```
运行：
``` bash
gunicorn comiclib.main:app --worker-class uvicorn.workers.UvicornWorker --bind 0.0.0.0:
80 --preload --workers 4
```

* `--worker-class uvicorn.workers.UvicornWorker` 是为让 gunicorn 利用 ASGI 必需的；
* `--bind` 指定了绑定的IP地址和端口；
* `--preload --workers 4` 指定了多 worker，这里是4个，可以根据服务器的性能增加。

更多设置请参阅 [Gunicorn 的文档](https://docs.gunicorn.org/en/stable/settings.html)。

最后你的命令可能会像这样（我的个人用例）：
``` bash
CONTENT=../mycomics/ thumb=/tmp/thumb/ display_title_format='{subtitle}\n{title}\n{path}' gunicorn comiclib.main:app --worker-class uvicorn.workers.UvicornWorker --bind unix:/tmp/comiclib.sock --preload --workers 4
```
或者
``` bash
CONTENT=../mycomics/ thumb=/tmp/thumb/ display_title_format='{subtitle}\n{title}\n{path}' uvicorn comiclib.main:app --uds /tmp/comiclib.sock --reload --log-level trace
```
用于调试。
然后通过 Nginx 反代为 HTTPS 连接。
