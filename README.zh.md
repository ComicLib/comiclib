<h1 align="center">📚 ComicLib</h1>
<p align="center"><sup>管理、阅读、分享你的漫画库</sup></p>

中文 | [English](https://github.com/comiclib/comiclib/blob/master/README.md)

💬 加入讨论: [![Discord](https://img.shields.io/discord/1100655762411372604?logo=discord&style=flat-square)](https://discord.gg/UmjCbgGUFW)

# ✨ 特点
- 📁 支持多种存档格式
- 🏷️ 支持tag和分类元数据导入和管理
- 🔌 支持[插件](https://comiclib.github.io/comiclib/zh/scanner/)
- 🖼️ 支持JPEG XL
- 💻 与 [LANraragi](https://github.com/Difegue/LANraragi) 兼容的API
- 📜 卷轴式/书本式阅读器（[eHunter](https://github.com/hanFengSan/eHunter)）
- 🔁 标签翻译（[EhTagTranslation](https://github.com/EhTagTranslation/Database)）

# 🚀 安装
确保你安装了 🐍 Python ⩾ 3.9，并通过如下命令安装 📚 ComicLib
```
pip install -U "comiclib[full]"
```
然后在你的漫画库的位置运行通过如下命令启动
```
comiclib
```
它会自动扫描当前工作目录下的漫画。

现在你可以打开 http://127.0.0.1:8000 开始阅读了。

# 🍰 更进一步

## 指定扫描漫画的位置
默认扫描当前工作目录，可以通过环境变量`CONTENT`来指定.
例如，你可以在命令前添加它
```
CONTENT=/home/user/mycomics comiclib
```

## 修改绑定的端口或IP地址
使用以下命令运行而不是直接运行 `comiclib`
```
uvicorn comiclib.main:app --host 0.0.0.0 --port 80
```
其中`--host 0.0.0.0`指定绑定的IP（`0.0.0.0`可使局域网访问），`--port 80`指定了绑定的端口。

📄 更多设置请查看[文档](https://ComicLib.github.io/comiclib/zh/)。

# ⚠️ 警告

目前ComicLib正处在早期开发阶段🚧，随着新功能的加入，很多东西都可能变化。点击GitHub右上角的watch或者加入我们的群组以获取第一个正式版本的通知。

# 👩‍💻 贡献
我们非常欢迎贡献、问题和功能请求。
欢迎加入群组以深度交流。
