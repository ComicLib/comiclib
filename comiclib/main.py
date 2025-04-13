__version__ = "0.0.7"
print(f" >>> ComicLib v{__version__}")

from .scan import watch, scannow
from .config import settings
from .utils import is_image, extract_thumbnail, convert_image, ArchiveFile, ordered
from typing import Union, Annotated
from enum import Enum
from pathlib import Path
import re
import base64
import tempfile
import multiprocessing
import shutil
from urllib.parse import quote, unquote, urlparse

from fastapi import FastAPI, Cookie, Request, Query, Depends, BackgroundTasks, Response, status, Form, HTTPException
from fastapi.responses import HTMLResponse, FileResponse, StreamingResponse, JSONResponse, RedirectResponse
from fastapi.security import OAuth2PasswordBearer
from fastapi.staticfiles import StaticFiles

# https://github.com/lmr/Template-Toolkit-Python/pull/2
import collections.abc
collections.Callable = collections.abc.Callable
from template import Template

from . import frontend_boost

from .database import engine, Base, Archive, Tag, Category
from sqlalchemy import func, select, not_, or_, update, delete
from sqlalchemy.orm import Session
Base.metadata.create_all(bind=engine)

import tempfile
with tempfile.TemporaryDirectory() as cache_dir:
    cache_dir = Path(cache_dir)
scannow()
if settings.watch:
    multiprocessing.Process(target=watch, daemon=True).start()


app = FastAPI()
app_path = Path(__file__).parent
app.mount("/css", StaticFiles(directory=app_path / "LANraragi/public/css"))
app.mount("/img", StaticFiles(directory=app_path / "LANraragi/public/img"))
app.mount("/js", StaticFiles(directory=app_path / "LANraragi/public/js"))
app.mount("/eHunter", StaticFiles(directory=app_path / "eHunter"))
app.mount("/themes", StaticFiles(directory=app_path / "LANraragi/public/themes"))

@app.middleware("http")
async def add_COEPCOOP(request: Request, call_next):
    response = await call_next(request)
    if (request.url.path == '/reader' or (request.headers.get("referer") and urlparse(request.headers["referer"]).path == '/reader')) and re.search(settings.UA_convert_jxl, request.headers.get("user-agent", "")) is not None:
        response.headers["Cross-Origin-Embedder-Policy"] = "require-corp"
        response.headers["Cross-Origin-Opener-Policy"] = "same-origin"
    return response


def get_db():
    db = Session(engine)
    try:
        yield db
    finally:
        db.close()

oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")
async def verify_token(request: Request):
    if request.cookies.get("tokenv0") != settings.password and base64.b64decode((await oauth2_scheme(request)).encode()).decode() != settings.password:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid authentication credentials",
            headers={"WWW-Authenticate": "Bearer"},
        )
if settings.password is None:
    authorization = None
else:
    authorization = [Depends(verify_token)]

def display_title(a: Archive) -> str:
    if settings.display_title_format is None:
        return a.title
    else:
        return settings.display_title_format.replace('{title}', a.title).replace('{subtitle}', '' if a.subtitle is None else a.subtitle).replace('{path}', a.path).replace(r'\n', '\n')

# https://sugoi.gitbook.io/lanraragi/v/dev/api-documentation/getting-started

# Search API

class OrderingDirection(str, Enum):
    asc = "asc"
    desc = "desc"


def do_search(db: Session, category: str, filters: str, order: Union[OrderingDirection, None] = None, sortby: str = "title", count: Union[int, None] = None, start: Union[int, None] = None, query_total: bool = False):
    if query_total:
        recordsTotal = db.scalar(select(func.count(Archive.id.distinct())).select_from(Archive))
    else:
        recordsTotal = None

    stmt = select(Archive).distinct(Archive.id)
    if category:
        if (search := db.get(Category, category).search) is None:
            stmt = stmt.outerjoin(Archive.categories).where(Category.id == category)
        else:
            filters += ', ' + search
    for f in filter(None, map(str.strip, filters.split(','))):
        if f[0] == '-':
            f = f[1:]
            condition = lambda *expressions: not_(or_(*expressions))
        else:
            condition = or_
        pre =  suff = '%'
        if f[-1] == '$':
            f = f[:-1]
            suff = ''
        if f[0] == '"' and f[-1] == '"':
            f = f.strip('"')
            pre = suff = ''
        f = pre + f + suff
        f.replace('*', '%').replace('?', '_')
        stmt = stmt.where(condition(Archive.title.like(f), Archive.subtitle.like(f), Archive.id.in_(select(Archive.id).outerjoin(Archive.tags).where(Tag.tag.like(f)))))
    if order is None:
        stmt = stmt.order_by(func.random())
    else:
        if sortby == "title":
            stmt = stmt.order_by(getattr(Archive.title, order.value)())
        else:
            stmt = stmt.outerjoin(Archive.tags).where(Tag.tag.like(sortby+':%')
                              ).order_by(getattr(Tag.tag, order.value)())
    if query_total:
        recordsFiltered = db.scalar(stmt.with_only_columns(func.count(Archive.id.distinct())))
    else:
        recordsFiltered = None
    if not count is None:
        stmt = stmt.limit(count)
    if not start is None:
        stmt = stmt.offset(start)
    return [
        {"arcid": a.id, "isnew": "none", "extension": Path(
            a.path).suffix, "tags": ", ".join(map(lambda t: t.tag, a.tags)), "title": display_title(a)}
        for a in db.scalars(stmt)
    ], recordsFiltered, recordsTotal


@app.get("/api/search")
def search_archive(start: int, filter: str = '', order: OrderingDirection = OrderingDirection.asc, category: str = '', sortby: str = "title", db: Session = Depends(get_db)):
    data, recordsFiltered, recordsTotal = do_search(db, category=category, filters=filter,
                                          count=None if start== -1 else 100, start=start, order=order, sortby=sortby, query_total=True)
    return {"data": data, "draw": 0, "recordsFiltered": recordsFiltered, "recordsTotal": recordsTotal}


@app.get("/api/search/random")
def get_random_archives(category: str = '', filter: str = '', count: int = 5, db: Session = Depends(get_db)):
    data, _, _ = do_search(db, category=category,
                        filters=filter, order=None, count=count)
    return {"data": data}


@app.delete("/api/search/cache", dependencies=authorization)
def discard_search_cache():
    return {"operation": "clear_cache", "success": 1}

# Undocumented API matching the Datatables spec.
# https://datatables.net/manual/server-side


@app.get("/search")
def handle_datatables(request: Request, draw: int, start: int, length: int, filters: str = Query(alias="search[value]"), sortindex: int = Query(alias="order[0][column]"), sortorder: OrderingDirection = Query(alias="order[0][dir]"), db: Session = Depends(get_db)):
    categoryfilter = ""
    for m in filter(None, map(lambda s: re.fullmatch(r"columns\[(\d+)\]\[name\]", s), request.query_params)):
        if request.query_params[m[0]] == "tags":
            categoryfilter = request.query_params[f"columns[{m[1]}][search][value]"]
        elif request.query_params[m[0]] == "isnew":
            newfilter = request.query_params[f"columns[{m[1]}][search][value]"] == "true"
        elif request.query_params[m[0]] == "untagged":
            untaggedfilter = request.query_params["columns[$i][search][value]"] == "true"

    data, recordsFiltered, recordsTotal = do_search(db, category=categoryfilter, filters=filters, order=sortorder,
                                   sortby=request.query_params[f"columns[{sortindex}][name]"], query_total=True, count=length, start=start)
    return {"data": data, "draw": draw, "recordsFiltered": recordsFiltered, "recordsTotal": recordsTotal}


# Archive API

@app.get("/api/archives")
def get_all_archives(db: Session = Depends(get_db)):
    data = [
        {"arcid": a.id, "isnew": "none", "extension": Path(
            a.path).suffix, "pagecount": a.pagecount, "progress": 0, "tags": ", ".join(map(lambda t: t.tag, a.tags)), "title": display_title(a)}
        for a in db.scalars(select(Archive))
    ]
    return {"data": data}


@app.get("/api/archives/untagged")
def get_untagged_archives(db: Session = Depends(get_db)):
    return db.scalars(select(Archive.id).outerjoin(Tag).where(Tag.tag == None).distinct(Archive.id)).all()


@app.get("/api/archives/{id}/metadata")
def get_archive_metadata(id: str, db: Session = Depends(get_db)):
    a = db.get(Archive, id)
    if a is None:
        return JSONResponse({"operation": "metadata", "error": "This ID doesn't exist on the server.", "success": 0}, status.HTTP_400_BAD_REQUEST)
    return {"arcid": a.id, "isnew": "false", "pagecount": a.pagecount, "progress": 1, "tags": ", ".join(map(lambda t: t.tag, a.tags)), "title": display_title(a)}


@app.put("/api/archives/{id}/metadata", dependencies=authorization)
def update_archive_metadata(id: str, title: Annotated[str, Form()], tags: Annotated[str, Form()], db: Session = Depends(get_db)):
    if settings.display_title_format is not None:
        a = db.get(Archive, id)
        if not (a.title == title or a.subtitle == title):
            return {"operation": "update_metadata", "error": "You are using a non-standard title display mode, and there is ambiguity in modifying the title.", "success": 0}
    else:
        db.execute(update(Archive).where(Archive.id == id).values(title=title))
    db.execute(delete(Tag).where(Tag.archive_id == id))
    db.add_all(map(lambda t: Tag(archive_id=id, tag=t.strip()), tags.split(',')))
    db.commit()
    return {"operation": "update_metadata", "success": 1}


@app.get("/api/archives/{id}/categories")
def get_archive_categories(id: str, db: Session = Depends(get_db)):
    a = db.get(Archive, id)
    if a is None:
        return JSONResponse({"operation": "", "error": "This ID doesn't exist on the server.", "success": 0}, status.HTTP_400_BAD_REQUEST)
    return {
        "categories": [
            {
                "archives": [a.id for a in c.archive],
                "id": c.id,
                "last_used": "0",
                "name": c.name,
                "pinned": c.pinned,
                "search": c.search
            } for c in a.categories
        ],
        "operation": "find_arc_categories",
        "success": 1
    }


@app.get("/api/archives/{id}/thumbnail")
def get_archive_thumbnail(id: str, background_tasks: BackgroundTasks, response: Response, page: Union[int, None] = None, db: Session = Depends(get_db)):
    a = db.get(Archive, id)
    if a is None:
        return JSONResponse({"operation": "", "error": "This ID doesn't exist on the server.", "success": 0}, status.HTTP_400_BAD_REQUEST)
    db.close()
    if page is None:
        if a.thumb.startswith('http'):
            return RedirectResponse(a.thumb)
        else:
            thumb_path = Path(settings.cover) / a.thumb
    else:
        thumb_path = Path(settings.thumb) / extract_thumbnail(Path(settings.content) / a.path, id, page, cache=True)
    return FileResponse(thumb_path)


@app.put("/api/archives/{id}/thumbnail", dependencies=authorization)
def update_thumbnail(id: str, page: int = 1, db: Session = Depends(get_db)):
    a = db.get(Archive, id)
    if a is None:
        return JSONResponse({"operation": "", "error": "This ID doesn't exist on the server.", "success": 0}, status.HTTP_400_BAD_REQUEST)
    thumb_path = extract_thumbnail(Path(settings.content) / a.path, a.id, page, cover=True)
    a.thumb = str(thumb_path)
    db.commit()
    return {
        "operation": "update_thumbnail",
        "success": 1,
        "new_thumbnail": f"/api/archives/{a.id}/thumbnail"
    }


@app.get("/api/archives/{id}/download")
def download_archive(id: str, db: Session = Depends(get_db)):
    a = db.get(Archive, id)
    if a is None:
        return JSONResponse({"operation": "", "error": "This ID doesn't exist on the server.", "success": 0}, status.HTTP_400_BAD_REQUEST)
    return FileResponse(Path(settings.content) / a.path)


@app.get("/api/archives/{id}/files")
def extract_archive(id: str, force: bool = True, db: Session = Depends(get_db)):
    a = db.get(Archive, id)
    if a is None:
        return JSONResponse({"operation": "", "error": "This ID doesn't exist on the server.", "success": 0}, status.HTTP_400_BAD_REQUEST)
    path = Path(settings.content) / a.path
    if path.is_dir():
        pages = [f"./api/archives/{id}/page?path="+quote(p.name, safe='') for p in ordered(filter(is_image, path.iterdir()))]
    elif ArchiveFile.support_formats.fullmatch(path.name):
        with ArchiveFile(path) as z:
            pages = [f"./api/archives/{id}/page?path="+quote(filename, safe='') for filename in ordered(map(lambda z_info: z_info.filename, filter(lambda z_info: not z_info.is_dir() and is_image(z_info.filename), z.infolist())))]
    else:
        raise NotImplementedError
    return {"job": -1, "pages": pages}


@app.get("/api/archives/{id}/page")
def get_archive_page(request: Request, id: str, path: str, db: Session = Depends(get_db)):
    a = db.get(Archive, id)
    if a is None:
        return JSONResponse({"operation": "", "error": "This ID doesn't exist on the server.", "success": 0}, status.HTTP_400_BAD_REQUEST)
    db.close()
    p = Path(settings.content) / a.path
    path = unquote(path)
    UA = request.headers.get("user-agent", "")
    if not re.search(settings.UA_convert_all, UA) is None or (path.endswith('.jxl') and not re.search(settings.UA_convert_jxl, UA) is None):
        saveto = (cache_dir / a.path / path).with_suffix('.webp')
        if not saveto.exists():
            saveto.parent.mkdir(parents=True, exist_ok=True)
            if p.is_dir():
                convert_image(p / path, saveto)
            elif ArchiveFile.support_formats.fullmatch(path.name):
                with ArchiveFile(p) as z, z.open(path) as f:
                    convert_image(f, saveto)
            else:
                raise NotImplementedError
        return FileResponse(saveto)
    if ArchiveFile.support_formats.fullmatch(str(p)):
        def iterfile():
            with ArchiveFile(p) as z, z.open(path) as f:
                yield from f
        return StreamingResponse(iterfile())
    else:
        return FileResponse(p / path)


@app.delete("/api/archives/{id}/isnew")
def clear_archive_new_flag(id: str):
    return {
        "id": id,
        "operation": "clear_new",
        "success": 1
    }


@app.put("/api/archives/{id}/progress/{page}")
def update_reading_progression(id: str, page: int):
    return {
        "id": id,
        "operation": "update_progress",
        "page": page,
        "success": 1
    }


@app.delete("/api/archives/{id}", dependencies=authorization)
def delete_archive(id: str, db: Session = Depends(get_db)):
    a = db.get(Archive, id)
    if a is None:
        return JSONResponse({"operation": "", "error": "This ID doesn't exist on the server.", "success": 0}, status.HTTP_400_BAD_REQUEST)
    p = Path(settings.content) / a.path
    db.execute(delete(Archive).where(Archive.id == id))
    db.commit()
    if p.is_file():
        p.unlink()
    else:
        shutil.rmtree(p)
    return {
        "operation": "delete_archive",
        "success": 1,
        "id": id,
        "filename": str(p)
    }

@app.post("/api/archives/{id}/extract")  # Deprecated but used by Ichaival
def extract_archive(id: str):
    return RedirectResponse(f'/api/archives/{id}/files', status_code=status.HTTP_303_SEE_OTHER)


# Database API

@app.get("/api/database/stats")
def get_statistics(minweight: int = 1, db: Session = Depends(get_db)):
    return [
        {"namespace": tag.partition(':')[0], "text": tag.partition(
            ':')[-1], "weight": count}
        for tag, count in db.execute(select(Tag.tag, func.count(Tag.tag)).group_by(Tag.tag).having(func.count(Tag.tag) >= minweight))
    ]


@app.post("/api/database/clean", dependencies=authorization)
def clean_database(db: Session = Depends(get_db)):
    deleted = 0
    for id, path in db.execute(select(Archive.id, Archive.path)):
        path = Path(settings.content) / path
        if path.exists():
            continue
        db.execute(delete(Archive).where(Archive.id == id))
        deleted += 1
    return {
        "operation": "clean_database",
        "success": 1,
        "deleted": deleted,
        "unlinked": 0
    }


@app.post("/api/database/drop", dependencies=authorization)
def drop_database(db: Session = Depends(get_db)):
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    return {
        "operation": "drop_database",
        "success": 1
    }


@app.delete("/api/database/isnew", dependencies=authorization)
def clean_all_new_flag(db: Session = Depends(get_db)):
    raise NotImplementedError

# Category API


@app.get("/api/categories")
def get_all_categories(db: Session = Depends(get_db)):
    return [
        {"archives": [a.id for a in c.archive], "id": str(c.id), "last_used": "0",
            "name": c.name, "pinned": "1" if c.pinned else "0", "search": "" if c.search is None else c.search}
        for c in db.scalars(select(Category))
    ]


@app.put("/api/categories", dependencies=authorization)
def create_category(name: Annotated[str, Form()] = None, name2: Annotated[str, Query(alias="name")] = None, pinned: bool = False, search: Union[str, None] = None, db: Session = Depends(get_db)):
    if name is None: name = name2
    if not search is None and len(search) == 0: search = None
    c = Category(name=name, pinned=pinned, search=search)
    db.add(c)
    db.commit()
    return {
        "category_id": str(c.id),
        "operation": "create_category",
        "success": 1
    }


@app.get("/api/categories/{id}")
def get_single_category(id: str, response: Response, db: Session = Depends(get_db)):
    c = db.get(Category, id)
    if c is None:
        response.status_code = status.HTTP_400_BAD_REQUEST
        return {
            "error": "The given category does not exist.",
            "operation": "get_category",
            "success": 0
        }
    else:
        return {"archives": [a.id for a in c.archive], "id": c.id, "last_used": 0, "name": c.name, "pinned": c.pinned, "search": c.search}


@app.put("/api/categories/{id}", dependencies=authorization)
def update_category(id: str, name: Union[str, None], search: Union[str, None] = None, pinned: bool = False, db: Session = Depends(get_db)):
    stmt = update(Category).where(Category.id == id)
    if name:
        stmt = stmt.values(name=name)
    if search:
        stmt = stmt.values(search=search)
    stmt = stmt.values(pinned=pinned)
    db.execute(stmt)
    db.commit()
    return {
        "category_id": id,
        "operation": "update_category",
        "success": 1
    }


@app.delete("/api/categories/{id}", dependencies=authorization)
def delete_category(id: str, db: Session = Depends(get_db)):
    db.execute(delete(Category).where(Category.id == id))
    db.commit()
    return {
        "operation": "delete_category",
        "success": 1
    }


@app.put("/api/categories/{id}/{archive}", dependencies=authorization)
def add_archive_to_category(id: str, archive: str, db: Session = Depends(get_db)):
    a = db.get(Archive, archive)
    c = db.get(Category, id)
    if a is None or c is None:
        return JSONResponse({"operation": "", "error": "This ID doesn't exist on the server.", "success": 0}, status.HTTP_400_BAD_REQUEST)
    a.categories.append(c)
    db.commit()
    return {
        "operation": "add_to_category",
        "success": 1,
        "successMessage": f'Added "{a.title}" to category "{c.name}"'
    }


@app.delete("/api/categories/{id}/{archive}", dependencies=authorization)
def remove_archive_from_category(id: str, archive: str, db: Session = Depends(get_db)):
    a = db.get(Archive, archive)
    c = db.get(Category, id)
    if a is None or c is None:
        return JSONResponse({"operation": "", "error": "This ID doesn't exist on the server.", "success": 0}, status.HTTP_400_BAD_REQUEST)
    a.categories.remove(c)
    db.commit()
    return {
        "operation": "remove_from_category",
        "success": 1
    }


# Shinobu API

@app.get("/api/shinobu")
def get_shinobu_status():
    return {
        "success": 1,
        "is_alive": 0,
        "operation": "shinobu_status",
        # "pid": 1608
    }

# Minion API


@app.get("/api/minion/{jobid}")
def get_job_status(jobid: int):
    if jobid == -1:
        return {
            "state": "finished",
            "task": "TASK NAME",
            "error": None
        }
    else:
        raise NotImplementedError


# Miscellaneous other API

@app.get("/api/info")
def info():
    return {
        "name": "ComicLib",
        "motd": "Welcome to the library powered by ComicLib!",
        "version": __version__,
        "version_name": "ComicLib",
        "version_desc": "Ababababa",
        "total_pages_read": "0",
        "has_password": "0",
        "debug_mode": "1" if settings.debug else "0",
        "nofun_mode": "0",
        "archives_per_page": "100",
        "server_resizes_images": "0",
        "server_tracks_progress": "0",
        "cache_last_cleared": "0"
    }


def csshead():
    config_style = "modern.css"
    css_default_data = {"g.css": "H-Verse", "modern.css": "Hachikuji",
                        "modern_clear.css": "Yotsugi", "modern_red.css": "Nadeko", "ex.css": "Sad Panda"}
    themes_header = ""
    for p in (app_path / "LANraragi/public/themes").glob("*.css"):
        if p.name == config_style:
            themes_header += f'<link rel="stylesheet" type="text/css" title="{css_default_data.get(p.name, p.name)}" href="/themes/{p.name}">'
        else:
            themes_header += f'<link rel="alternate stylesheet" type="text/css" title="{css_default_data.get(p.name, p.name)}" href="/themes/{p.name}">'
    return themes_header


@app.get("/", response_class=RedirectResponse)
def read_root(request: Request):
    return "index?" + request.url.query


@app.post("/login")
def login(password: str = Form()):
    if settings.password == password:
        response = RedirectResponse('index', status_code=status.HTTP_303_SEE_OTHER)
        response.set_cookie(key="tokenv0", value=password)
        return response
    else:
        return HTMLResponse(Template({"INCLUDE_PATH": str(app_path / "LANraragi/templates")}).process("login", {"csshead": csshead(), "wrongpass": True}))

@app.get("/logout")
def logout():
    response = RedirectResponse('index', status_code=status.HTTP_303_SEE_OTHER)
    response.delete_cookie("tokenv0")
    return response 

@app.get("/{path}", response_class=HTMLResponse)
@app.get("/config/{path}", response_class=HTMLResponse)
def read_template(request: Request, path: str, id: Union[str, None] = None, csshead: str = Depends(csshead), db: Session = Depends(get_db), tokenv0: Union[str, None] = Cookie(default=None)):
    vars = {"csshead": csshead, "id": id, "userlogged": settings.password is None or tokenv0 == settings.password, "needlog": not settings.password is None}
    if path in ("index", "reader"):
        vars["categories"] = [{"id": c.id, "name": c.name} for c in db.scalars(select(Category).where(Category.search.is_(None)))]
    if path == "categories":
        path = "category"
        vars["arclist"] = ''.join([f"<li><input type='checkbox' name='archive' id='{a.id}' class='archive' onchange='Category.updateArchiveInCategory(this.id, this.checked)'>" + \
                                   f"<label for='{a.id}'> {a.title}</label></li>" for a in db.scalars(select(Archive))])
    if path == "edit" and not (a := db.get(Archive, id)) is None:
        vars["file"] = a.path
        vars["arctitle"] = a.title
        vars["tags"] = ', '.join(map(lambda t: t.tag, a.tags))
    return Template({"INCLUDE_PATH": str(app_path / "LANraragi/templates")}).process(path, vars)


print("ｷﾀ━━━━━━(ﾟ∀ﾟ)━━━━━━!!!!!")
