FROM debian:13-slim AS build-venv

RUN apt-get update && \
    apt-get install --no-install-suggests --no-install-recommends --yes gcc python3-dev python3 python3-venv && \
    rm -rf /var/lib/apt/lists/* && \
    python3 -m venv /venv && \
    /venv/bin/pip install --upgrade pip

COPY . /tmp/comiclib
RUN /venv/bin/pip install --no-cache-dir -U "/tmp/comiclib[full]" gunicorn pillow-jxl-plugin

FROM debian:13-slim AS data
RUN apt-get update && \
    apt-get install --no-install-suggests --no-install-recommends --yes zstd && \
    rm -rf /var/lib/apt/lists/*
ADD https://github.com/URenko/e-hentai-db/releases/download/nightly/e-hentai.db.zstd /tmp/e-hentai.db.zstd
RUN mkdir -p /extract && zstd -dc /tmp/e-hentai.db.zstd > /extract/e-hentai.db

FROM debian:13-slim AS sevenzip
ARG TARGETARCH=amd64
RUN apt-get update && \
    apt-get install --no-install-suggests --no-install-recommends --yes xz-utils && \
    rm -rf /var/lib/apt/lists/*
# Official upstream binaries (with RAR support); pin version explicitly.
ADD https://github.com/ip7z/7zip/releases/download/26.03/7z2603-linux-x64.tar.xz /tmp/7z-amd64.tar.xz
ADD https://github.com/ip7z/7zip/releases/download/26.03/7z2603-linux-arm64.tar.xz /tmp/7z-arm64.tar.xz
RUN mkdir -p /7z && tar -xJf /tmp/7z-${TARGETARCH}.tar.xz -C /7z

FROM gcr.io/distroless/python3-debian13 AS base
COPY --from=build-venv /venv  /venv
COPY --from=sevenzip   /7z/7zz /usr/bin/7zz
# COPY --from=docker.io/mwader/static-ffmpeg:latest \
#                        /ffmpeg                          /usr/bin

ENV content=/root/comiclib watch=False
EXPOSE 8000
WORKDIR /userdata
VOLUME ["/userdata", "/root/comiclib"]
RUN [ "/venv/bin/python", "-c", "from comiclib import frontend_boost" ]
ENTRYPOINT [ "/venv/bin/python", "-m" , "gunicorn", "comiclib.main:app", "--worker-class", "uvicorn.workers.UvicornWorker", "--bind", "0.0.0.0:8000", "--preload", "--workers", "4" ]

FROM base AS full
COPY --from=data /extract/e-hentai.db /data/e-hentai.db
ENV importEHdb_database_URI=file:/data/e-hentai.db?mode=ro

FROM base AS minimal
ENV importEHdb_database_URI=file:e-hentai.db?mode=ro
