FROM python:3.11

WORKDIR /root

ENV content=/root/comiclib watch=False
EXPOSE 8000

RUN apt-get -y update && apt-get -y install ffmpeg

COPY . /tmp/comiclib

RUN pip install --no-cache-dir -U "/tmp/comiclib[full]"
RUN pip install --no-cache-dir -U gunicorn

ADD https://www.7-zip.org/a/7z2301-linux-x64.tar.xz /tmp/
RUN tar -C /usr/bin/ -xvf /tmp/7z*.tar.xz 7zz

# Please download through BitTorrent yourself.
RUN 7zz x /tmp/comiclib/e-hentai_*/api_dump.sqlite.7z
RUN rm -r /tmp/*

RUN python3 -c "from comiclib import frontend_boost"

VOLUME /root

CMD [ "gunicorn", "comiclib.main:app", "--worker-class", "uvicorn.workers.UvicornWorker", "--bind", "0.0.0.0:8000", "--preload", "--workers", "4" ]
