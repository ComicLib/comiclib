# Settings

Almost all settings are specified through environment variables, except server network related settings.

For example:
=== "Linux/MacOS"
    You can add it before the command
    ``` bash
    CONTENT=../mycomics/ thumb=/tmp/thumb/ comiclib
    ```
    Or set it first
    ``` bash
    export CONTENT=../mycomics/
    export thumb=/tmp/thumb/
    comiclib
    ```
=== "Windows"
    ```
    set CONTENT=..\mycomics\
    set thumb=C:\Users\Administrator\AppData\Local\Temp\thumb\
    comiclib
    ```
Environment variable keys are generally not case-sensitive.

The following is a list of available settings:

| Environment variable | Description | Default value |
| ------- | ---- | ----- |
| `debug` | Turn on debug output (`True`/`False`) | `False` |
| `loglevel` | Log level (`DEBUG`/`INFO`/`WARNING`/`ERROR`/`CRITICAL`). If `debug` is `True`, it will be overwritten to `DEBUG` | `INFO` |
| `content` | The path where the comic file is stored | `.` |
| `thumb` | The path where the generated thumbnails are stored | `./thumb`|
| `metadata` | The URL for metadata database, refer to [SQLAlchemy documentation](https://docs.sqlalchemy.org/en/20/core/engines.html#database-urls) | `sqlite:///./comiclib_metadata.db` |
| `password` | Admin password. If it is `None`, any visitor will have editing permissions. This feature is designed to protect against gentlemen but not villains. If you need security protection, please use e.g. the HTTP basic authentication of the reverse proxy, Cloudflare Access or TLS client certificate, etc. | `None`|
| `skip_exists`| Skip comics that have been scanned into the metadata database during scanning? (`True`/`False`) | `True` |
| `watch` | Monitor comic folders and automatically scan (`True`/`False`) | `True` |
| `UA_convert_jxl` | For requests with matched user-agent, convert JPEG XL files to other popular formats on the server side. The value is a regular expression. | `Android` |
| `UA_convert_all` | For requests with matched user-agent, convert all files to other popular formats on the server side. The value is a regular expression. | `\b\B` (will not match anything) |

For the settings of the scanners, please refer to the respective instructions.
