# Getting started

## 安装

The recommended way is to install via pip.

Make sure you have [🐍 Python ⩾ 3.9](https://www.python.org/downloads/) installed
=== "Linux/MacOS"
    Due to [PEP 668](https://peps.python.org/pep-0668/), you may need to install within a virtual environment, take [venv](https://docs.python.org/zh-cn/3/library/venv.html) as example:
    !!! tip inline end "Install directly with pip"
        If you don't want to use a virtual environment, you can install it directly with pip and add `--break-system-packages`.
    ``` bash
    python3 -m venv /my/new/venv/position # (3)!
    source /my/new/venv/position/bin/activate # (2)!
    pip install -U "comiclib[full]" # (1)!
    ```
    
    1.  `[full]` specifies a full installation. `-U` specifies upgrading ComicLib if an older version exists.
    2.  Since the virtual environment is not the default environment of the system, you need to run this command to start the virtual environment before starting in the future.
    3.  The files required for the virtual environment will be created in this path.

=== "Windows"
    Open a command prompt or PowerShell and run
    ``` yaml
    pip install -U "comiclib[full]" # (1)!
    ```
    
    1.  `[full]` specifies a full installation. `-U` specifies upgrading ComicLib if an older version exists.

### Install from GitHub

If you want to try out the latest features or fixes, consider installing from source:
``` bash
pip install -U "comiclib[full] @ git+https://github.com/comiclib/comiclib.git"
```

### Docker (Experimental)

!!! tip inline end "Minimal installation"
    Image with tag `v0.0.5` (without `-full` suffix) does not ship the ehentai metadata database, therefore its size is much smaller. You can download the ehentai metadata database to `/userdata` if you need it.

``` bash
docker run -p 8000:8000 \
--mount type=bind,source=<YOUR_COMIC_DIRECTORY_HERE>,target=/root/comiclib \
--mount type=bind,source=<USER_DATA_PATH>,target=/userdata \
ghcr.io/comiclib/comiclib:v0.0.5-full
```
ComicLib now runs at http://localhost:8000 .

P.S.: Monitoring comic folders is disabled by default for Docker currently.


## Launch

Change the working directory to the location of your comic library and run the following command to start:
!!! warning inline end
    Do not have irrelevant *.py files in the working directory, as they will be mistaken for scanner.
``` bash
comiclib
```
It will automatically scan comics in the current working directory. See [Scan Script](scanner.md) for details.

!!! tip "If you use ehentai"
    It is strongly recommended to download the ehentai metadata database api_dump.sqlite to the working directory [from here](https://sukebei.nyaa.si/user/gipaf23445) first. For details, see [Scanner](scanner.md#30-importehdbpy).

!!! danger "Do not change the working directory arbitrarily"
    The metadata obtained by scanning is stored in the working directory by default, so it should be the same directory the next time.
    You can set the metadata database to an absolute path so you don't have to worry about this problem.

After waiting for the startup completion prompt, you can now open http://localhost:8000 and start reading.

Almost all settings are specified through environment variables. You can find all environment variables in [Settings](settings.md). The following is the most common example.

!!! question "Want a complete fresh start?"
    If you made a mistake and want to start over.
    Just stop the program, delete the metadata database (./comiclib_metadata.db), delete the thumbnails (default is in ./thumb).

### Specify the location for scanning comics

The default scan location is the current working directory, which can be specified via the environment variable `CONTENT`.
=== "Linux/MacOS"
    You can add it before the command
    ``` bash
    CONTENT=/my/comics/path comiclib
    ```
    或者先设定好
    ``` bash
    export CONTENT=/my/comics/path
    comiclib
    ```
=== "Windows"
    ```
    set CONTENT=D:\my\comics\path
    comiclib
    ```

### Modify the bound port or IP address

Instead of run `comiclib` directly, run with the following command
```
uvicorn comiclib.main:app --host 0.0.0.0 --port 80
```
where `--host 0.0.0.0` specifies the bound IP (`0.0.0.0` enables LAN access), and `--port 80` specifies the bound port.

!!! tip "Configure server network related settings through uvicorn"
    Server network related settings are configured by uvicorn.
    For example, you can bind to a UNIX domain socket via `--uds` and automatically reload during development via `--reload`.
    For more information, please refer to [uvicorn’s documentation](https://www.uvicorn.org).

### Advanced: High-performance running with Gunicorn (only for UNIX-like systems)

Gunicorn provides powerful concurrency performance. It does not run on Windows due to its reliance on UNIX's fork functionality.

Install via pip (of course, if you use a virtual environment, activate it before any installation or use):
``` bash
pip install gunicorn
```
run:
``` bash
gunicorn comiclib.main:app --worker-class uvicorn.workers.UvicornWorker --bind 0.0.0.0:
80 --preload --workers 4
```

* `--worker-class uvicorn.workers.UvicornWorker` is required for gunicorn to utilize ASGI;
* `--bind` specifies the bound IP address and port;
* `--preload --workers 4` specifies multiple workers, here are 4, which can be increased according to the performance of the server.

For more settings, please refer to [Gunicorn's documentation](https://docs.gunicorn.org/en/stable/settings.html).

In the end your command might look like this (my personal use case):
``` bash
CONTENT=../mycomics/ thumb=/tmp/thumb/ display_title_format='{subtitle}\n{title}\n{path}' gunicorn comiclib.main:app --worker-class uvicorn.workers.UvicornWorker --bind unix:/tmp/comiclib.sock --preload --workers 4
```
or
``` bash
CONTENT=../mycomics/ thumb=/tmp/thumb/ display_title_format='{subtitle}\n{title}\n{path}' uvicorn comiclib.main:app --uds /tmp/comiclib.sock --reload --log-level trace
```
for debugging.
Then use Nginx to reverse proxy to HTTPS connection.
