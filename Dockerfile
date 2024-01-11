FROM debian:12-slim AS build-venv

RUN apt-get update && \
    apt-get install --no-install-suggests --no-install-recommends --yes xz-utils python3 python3-venv && \
    apt-get clean && \
    python3 -m venv /venv && \
    /venv/bin/pip install --upgrade pip

ADD https://files.niconi.org/api_dump.sqlite.7z /tmp
ADD https://github.com/eugeneware/ffmpeg-static/releases/download/b6.0/ffmpeg-linux-x64 /usr/bin/ffmpeg
ADD https://www.7-zip.org/a/7z2301-linux-x64.tar.xz /tmp/
RUN tar -C /usr/bin -xvf /tmp/7z*.tar.xz 7zz
RUN mkdir /exract
WORKDIR /extract
RUN 7zz x /tmp/api_dump.sqlite.7z
COPY . /tmp/comiclib
RUN /venv/bin/pip install --no-cache-dir -U "/tmp/comiclib[full]"
RUN /venv/bin/pip install --no-cache-dir -U gunicorn
RUN mkdir /userdata 
# RUN rm -r /tmp/*

FROM gcr.io/distroless/python3-debian12 
COPY --from=build-venv /venv                            /venv
COPY --from=build-venv /usr/bin/7zz                     /usr/bin
COPY --from=build-venv /usr/bin/ffmpeg                  /usr/bin
COPY --from=build-venv /extract/api_dump.sqlite         /data
COPY --from=build-venv /userdata                        /userdata
ENV API_DUMP_PATH=/data/api_dump.sqlite content=/root/comiclib watch=False
EXPOSE 8000
WORKDIR /userdata
VOLUME /userdata
VOLUME /root/comiclib
RUN [ "/venv/bin/python", "-c", "from comiclib import frontend_boost" ]
ENTRYPOINT [ "/venv/bin/python", "-m" , "gunicorn", "comiclib.main:app", "--worker-class", "uvicorn.workers.UvicornWorker", "--bind", "0.0.0.0:8000", "--preload", "--workers", "4" ]
