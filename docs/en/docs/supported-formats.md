# Supported comic archive formats

| File extension | Download method | Corresponding scanner |
| -------------- | --------------- | ----------- |
| zip | general | 10-zip.py |
| rar, 7z [^1] | general | 11-archive.py |
| zip | [ccloli/E-Hentai-Downloader](https://github.com/ccloli/E-Hentai-Downloader) | 20-ccloli.py |
| zip | [xeHentai](https://github.com/fffonion/xeHentai) | 23-xeHentai.py |
| zip [^2] | [EHentai Telegram bot](https://github.com/z-mio/ehentai_bot) or [分布式tg eh归档bot](https://github.com/mhdy2233/tg-eh-distributed-arc-bot) | 24-ehentai_bot.py |
| folder | [Hentai@Home](https://ehwiki.org/wiki/Hentai@Home#H.40H_Downloader) | 21-hath.py |
| folder | [EhViewer](https://github.com/seven332/EhViewer) | 22-ehviewer.py |

[^1]: They require 7-Zip, download it from [https://7-zip.org/download.html](https://7-zip.org/download.html) and make sure 7zzs or 7zz or 7z is in the working directory or the directory indicated by PATH. 7-Zip obtained from some other sources may not support rar files.
[^2]: The metadata file `<gid>.json` needs to be put into the zip archive.