<h1 align="center">📚 ComicLib</h1>
<p align="center"><sup>Manage, read and share your comic/manga library</sup></p>

English | [中文](https://github.com/comiclib/comiclib/blob/master/README.zh.md)

💬 Join Discussion: [![Discord](https://img.shields.io/discord/1100655762411372604?logo=discord&style=flat-square)](https://discord.gg/UmjCbgGUFW)

# ✨ Features
- 📁 Support multiple archive formats
- 🏷️ Support tag and category metadata import and management
- 🔌 Support [plugins](https://comiclib.github.io/comiclib/en/scanner/)
- 🖼️ Support JPEG XL
- 💻 [LANraragi](https://github.com/Difegue/LANraragi)-compatible API
- 📜 scroll / book mode reader ([eHunter](https://github.com/hanFengSan/eHunter))
- 🔁 Tag translation ([EhTagTranslation](https://github.com/EhTagTranslation/Database))

# 🚀 Installation
Make sure you have 🐍 Python ⩾ 3.9 installed, and install 📚 ComicLib with the following command
```
pip install -U "comiclib[full]"
```
Then run the following command in the location of your comic library to start
```
comiclib
```
It will automatically scan the comics in the current working directory.

Now you can open http://127.0.0.1:8000 and start reading.

# 🍰 One more step

## Specify the location for scanning comics
The default scan location is the current working directory, which can be specified via the environment variable `CONTENT`.
For example, you can add it before the command
```
CONTENT=/home/user/mycomics comiclib
```

## Modify the bound port or IP address
Instead of run `comiclib` directly, run with the following command
```
uvicorn comiclib.main:app --host 0.0.0.0 --port 80
```
where `--host 0.0.0.0` specifies the bound IP (`0.0.0.0` enables LAN access), and `--port 80` specifies the bound port.

📄 Please see the [documentation](https://ComicLib.github.io/comiclib/en/) for more settings.

# ⚠️ Warning

ComicLib is currently in an early development stage🚧, and many things may change as new features are added. Click *watch* in the upper right corner of GitHub or join our group to be notified of the first official release.

# 👩‍💻 Contributing
Contributions, issues and feature requests are very much welcome.
Feel free to join the group for deeper communication.
