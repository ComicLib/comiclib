ARG BUILDTYPE=minimal

FROM debian:12-slim AS build-venv

RUN apt-get update && \
    apt-get install --no-install-suggests --no-install-recommends --yes gcc python3-dev python3 python3-venv && \
    apt-get clean && \
    python3 -m venv /venv && \
    /venv/bin/pip install --upgrade pip

COPY . /tmp/comiclib
RUN /venv/bin/pip install --no-cache-dir -U "/tmp/comiclib[full]"
RUN /venv/bin/pip install --no-cache-dir -U gunicorn
RUN mkdir /userdata 

FROM quay.io/karuboniru/7zz:latest AS data
ADD https://files.niconi.org/api_dump.sqlite.7z /tmp
RUN mkdir /exract
WORKDIR /extract
RUN 7zz x /tmp/api_dump.sqlite.7z

FROM gcr.io/distroless/python3-debian12 AS product-env-full
ENV importEHdb_database_URI=file:/data/api_dump.sqlite?mode=rw
COPY --from=data /extract/api_dump.sqlite /data/api_dump.sqlite

FROM gcr.io/distroless/python3-debian12 AS product-env-minimal
ENV importEHdb_database_URI=file:api_dump.sqlite?mode=rw


FROM product-env-${BUILDTYPE}
COPY --from=build-venv /venv                            /venv
COPY --from=build-venv /userdata                        /userdata
COPY --from=quay.io/karuboniru/7zz:2301  \
                       /usr/local/bin/7zz               /usr/bin
COPY --from=docker.io/mwader/static-ffmpeg:6.1.1 \
                       /ffmpeg                          /usr/bin

ENV content=/root/comiclib watch=False
EXPOSE 8000
WORKDIR /userdata
VOLUME /userdata
VOLUME /root/comiclib
RUN [ "/venv/bin/python", "-c", "from comiclib import frontend_boost" ]
ENTRYPOINT [ "/venv/bin/python", "-m" , "gunicorn", "comiclib.main:app", "--worker-class", "uvicorn.workers.UvicornWorker", "--bind", "0.0.0.0:8000", "--preload", "--workers", "4" ]
