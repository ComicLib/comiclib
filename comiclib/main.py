from .scan import watch, scan
from .config import settings
from typing import Union, Annotated
from enum import Enum
from pathlib import Path
from zipfile import ZipFile
import re
import asyncio
from urllib.parse import quote, unquote

from PIL import Image
try:
    from jxlpy import JXLImagePlugin
except ModuleNotFoundError:
    pass

from fastapi import FastAPI, Cookie, Request, Query, Depends, BackgroundTasks, Response, status, Form
from fastapi.responses import HTMLResponse, FileResponse, StreamingResponse, JSONResponse, RedirectResponse
from fastapi.staticfiles import StaticFiles

from template import Template

if not (Path(__file__).parent / 'LANraragi/public/js/vendor/jquery.min.js').exists():
    from . import frontend_boost

from .database import engine, Base, Archive, Tag, Category
from sqlalchemy import func, select, or_, update, delete
from sqlalchemy.orm import Session
Base.metadata.create_all(bind=engine)


app = FastAPI()
app_path = Path(__file__).parent
app.mount("/css", StaticFiles(directory=app_path / "LANraragi/public/css"))
app.mount("/img", StaticFiles(directory=app_path / "LANraragi/public/img"))
app.mount("/js", StaticFiles(directory=app_path / "LANraragi/public/js"))
app.mount("/themes", StaticFiles(directory=app_path / "LANraragi/public/themes"))


@app.on_event('startup')
async def app_startup():
    asyncio.create_task(scan(Path(settings.content).rglob('*')))
    asyncio.create_task(watch())


def get_db():
    db = Session(engine)
    try:
        yield db
    finally:
        db.close()


# https://sugoi.gitbook.io/lanraragi/v/dev/api-documentation/getting-started

# Search API

class OrderingDirection(str, Enum):
    asc = "asc"
    desc = "desc"


def do_search(db: Session, category: str, filters: str, order: Union[OrderingDirection, None] = None, sortby: str = "title", count: Union[int, None] = None, start: Union[int, None] = None, query_total: bool = False):
    if query_total:
        stmt = select(func.count()).select_from(
            Archive).outerjoin(Archive.tags).distinct(Archive.id)
        if category:
            stmt = stmt.outerjoin(Archive.categories).where(
                Category.id == category)
        recordsTotal = db.scalar(stmt)
    else:
        recordsTotal = None

    stmt = select(Archive).outerjoin(Archive.tags).distinct(Archive.id)
    if order is None:
        stmt = stmt.order_by(func.random())
    else:
        if sortby == "title":
            stmt = stmt.order_by(getattr(Archive.title, order.value)())
        else:
            stmt = stmt.where(Tag.tag.like(sortby+':%')
                              ).order_by(getattr(Tag.tag, order.value)())
    if category:
        stmt = stmt.outerjoin(Archive.categories).where(
            Category.id == category)
    if not count is None:
        stmt = stmt.limit(count)
    if not start is None:
        stmt = stmt.offset(start)
    for f in filter(None, map(str.strip, filters.split(','))):
        if f[0] == '"' and f[-1] == '"':
            f = f.strip('"')
        elif f[-1] == '$':
            f = f'%{f[:-1]}'
        else:
            f = f'%{f}%'
        f.replace('*', '%').replace('?', '_')
        stmt = stmt.where(or_(Archive.title.like(
            f), Archive.subtitle.like(f), Tag.tag.like(f)))
    return [
        {"arcid": a.id, "isnew": "none", "extension": Path(
            a.path).suffix, "tags": ", ".join(map(lambda t: t.tag, a.tags)), "title": a.title}
        for a in db.scalars(stmt)
    ], recordsTotal


@app.get("/api/search")
def search_archive(category: str, filter: str, start: int, order: OrderingDirection, sortby: str = "title", db: Session = Depends(get_db)):
    data, recordsTotal = do_search(db, category=category, filters=filter,
                                   start=start, order=order, sortby=sortby, query_total=True)
    return {"data": data, "draw": 0, "recordsFiltered": len(data), "recordsTotal": recordsTotal}


@app.get("/api/search/random")
def get_random_archives(category: str, filter: str, count: int = 5, db: Session = Depends(get_db)):
    data, _ = do_search(db, category=category,
                        filters=filter, order=None, count=count)
    return {"data": data}


@app.delete("/api/search/cache")
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

    data, recordsTotal = do_search(db, category=categoryfilter, filters=filters, order=sortorder,
                                   sortby=request.query_params[f"columns[{sortindex}][name]"], query_total=True, count=length, start=start)
    return {"data": data, "draw": draw, "recordsFiltered": len(data), "recordsTotal": recordsTotal}


# Archive API

@app.get("/api/archives")
def get_all_archives(db: Session = Depends(get_db)):
    data = [
        {"arcid": a.id, "isnew": "none", "extension": Path(
            a.path).suffix, "pagecount": a.pagecount, "progress": 0, "tags": ", ".join(map(lambda t: t.tag, a.tags)), "title": a.title}
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
    return {"arcid": a.id, "isnew": "false", "pagecount": a.pagecount, "progress": 0, "tags": ", ".join(map(lambda t: t.tag, a.tags)), "title": a.title}


@app.put("/api/archives/{id}/metadata")
def update_archive_metadata(id: str, title: Annotated[str, Form()], tags: Annotated[str, Form()], db: Session = Depends(get_db)):
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


def extract_thumbnail(path: Union[str, Path], id: str, page: int, saveto: Path):
    path = Path(path)
    saveto.parent.mkdir(parents=True, exist_ok=True)
    if path.is_dir():
        raise NotImplementedError
    elif path.suffix == '.zip':
        with ZipFile(path) as z:
            with z.open(list(filter(lambda z_info: not z_info.is_dir(), z.infolist()))[page-1].filename) as f, Image.open(f) as im:
                im.thumbnail((500, 709))
                im.save(saveto)
    else:
        raise NotImplementedError


@app.get("/api/archives/{id}/thumbnail")
def get_archive_thumbnail(id: str, background_tasks: BackgroundTasks, response: Response, page: Union[int, None] = None, db: Session = Depends(get_db)):
    thumb_path = Path(
        'thumb') / (id+'.webp') if page is None else Path('thumb') / id / f'{page}.webp'
    if thumb_path.exists():
        return FileResponse(thumb_path)
    a = db.get(Archive, id)
    if a is None:
        return JSONResponse({"operation": "", "error": "This ID doesn't exist on the server.", "success": 0}, status.HTTP_400_BAD_REQUEST)
    extract_thumbnail(a.path, id, 1 if page is None else page, thumb_path)
    return FileResponse(thumb_path)


@app.put("/api/archives/{id}/thumbnail")
def update_thumbnail(id: str, page: int = 1, db: Session = Depends(get_db)):
    a = db.get(Archive, id)
    if a is None:
        return JSONResponse({"operation": "", "error": "This ID doesn't exist on the server.", "success": 0}, status.HTTP_400_BAD_REQUEST)
    thumb_path = Path('thumb') / (id+'.webp')
    extract_thumbnail(a.path, a.id, page, thumb_path)
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
    return FileResponse(a.path)


@app.get("/api/archives/{id}/files")
def extract_archive(id: str, force: bool, db: Session = Depends(get_db)):
    a = db.get(Archive, id)
    if a is None:
        return JSONResponse({"operation": "", "error": "This ID doesn't exist on the server.", "success": 0}, status.HTTP_400_BAD_REQUEST)
    path = Path(a.path)
    if path.suffix == '.zip':
        with ZipFile(path) as z:
            pages = [f"./api/archives/{id}/page?path="+quote(z_info.filename, safe='') for z_info in filter(
                lambda z_info: not z_info.is_dir(), z.infolist())]
    else:
        raise NotImplementedError
    return {"job": -1, "pages": pages}


@app.get("/api/archives/{id}/page")
def get_archive_page(id: str, path: str, db: Session = Depends(get_db)):
    a = db.get(Archive, id)
    if a is None:
        return JSONResponse({"operation": "", "error": "This ID doesn't exist on the server.", "success": 0}, status.HTTP_400_BAD_REQUEST)
    p = Path(a.path)
    path = unquote(path)
    if p.suffix == '.zip':
        def iterfile():
            with ZipFile(p) as z:
                with z.open(path) as f:
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


@app.delete("/api/archives/{id}")
def delete_archive(id: str, db: Session = Depends(get_db)):
    a = db.get(Archive, id)
    if a is None:
        return JSONResponse({"operation": "", "error": "This ID doesn't exist on the server.", "success": 0}, status.HTTP_400_BAD_REQUEST)
    p = Path(a.path)
    if p.is_file():
        p.unlink()
    else:
        p.rmdir()
    return {
        "operation": "delete_archive",
        "success": 1,
        "id": id,
        "filename": str(p)
    }


# Database API

@app.get("/api/database/stats")
def get_statistics(minweight: int = 1, db: Session = Depends(get_db)):
    return [
        {"namespace": tag.rpartition(':')[0], "text": tag.rpartition(
            ':')[-1], "weight": count}
        for tag, count in db.execute(select(Tag.tag, func.count(Tag.tag)).group_by(Tag.tag).having(func.count(Tag.tag) >= minweight))
    ]


@app.post("/api/database/clean")
def clean_database(db: Session = Depends(get_db)):
    deleted = 0
    for id, path in db.execute(select(Archive.id, Archive.path)):
        path = Path(path)
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


@app.post("/api/database/drop")
def drop_database(db: Session = Depends(get_db)):
    Base.metadata.drop_all(bind=engine)
    Base.metadata.create_all(bind=engine)
    return {
        "operation": "drop_database",
        "success": 1
    }


@app.delete("/api/database/isnew")
def clean_all_new_flag(db: Session = Depends(get_db)):
    raise NotImplementedError

# Category API


@app.get("/api/categories")
def get_all_categories(db: Session = Depends(get_db)):
    return [
        {"archives": [a.id for a in c.archive], "id": c.id, "last_used": 0,
            "name": c.name, "pinned": c.pinned, "search": c.search}
        for c in db.scalars(select(Category))
    ]


@app.put("/api/categories")
def create_category(name: str, pinned: bool = False, search: Union[str, None] = None, db: Session = Depends(get_db)):
    c = Category(name=name, pinned=pinned, search=search)
    db.add(c)
    db.commit()
    return {
        "category_id": c.id,
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


@app.put("/api/categories/{id}")
def update_category(id: str, name: Union[str, None], search: Union[str, None] = None, pinned: bool = False, db: Session = Depends(get_db)):
    stmt = update(Category).where(Category.id == id)
    if name:
        stmt = stmt.values(name=name)
    if search:
        stmt = stmt.values(search=search)
    if pinned:
        stmt = stmt.values(pinned=pinned)
    db.execute(stmt)
    return {
        "category_id": id,
        "operation": "update_category",
        "success": 1
    }


@app.delete("/api/categories/{id}")
def delete_category(id: str, db: Session = Depends(get_db)):
    db.execute(delete(Category).where(Category.id == id))
    return {
        "operation": "delete_category",
        "success": 1
    }


@app.put("/api/categories/{id}/{archive}")
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


@app.delete("/api/categories/{id}/{archive}")
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
        "version": "0.0.0",
        "version_name": "Kaosu",
        "version_desc": "Ababababa",
        "total_pages_read": "0",
        "has_password": "0",
        "debug_mode": "1",
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
    for p in Path("/home/root/LANraragi/public/themes").glob("*.css"):
        if p.name == config_style:
            themes_header += f'<link rel="stylesheet" type="text/css" title="{css_default_data.get(p.name, p.name)}" href="/themes/{p.name}">'
        else:
            themes_header += f'<link rel="alternate stylesheet" type="text/css" title="{css_default_data.get(p.name, p.name)}" href="/themes/{p.name}">'
    return themes_header


@app.get("/", response_class=RedirectResponse)
def read_root():
    return "index"


@app.post("/login")
def login(password: str):
    return


@app.get("/favicon.ico")
def favicon():
    return FileResponse(app_path / "LANraragi/public/favicon.ico")


@app.get("/{path}", response_class=HTMLResponse)
@app.get("/config/{path}", response_class=HTMLResponse)
def read_template(request: Request, path: str, id: Union[str, None] = None, csshead: str = Depends(csshead), db: Session = Depends(get_db)):
    vars = {"csshead": csshead, "id": id, "userlogged": True}
    if path == "index":
        vars["categories"] = [{"id": c.id, "name": c.name} for c in db.scalars(select(Category).where(Category.search.is_(None)))]
    if path == "categories":
        path = "category"
    if path == "edit" and not (a := db.get(Archive, id)) is None:
        vars["file"] = a.path
        vars["arctitle"] = a.title
        vars["tags"] = ', '.join(map(lambda t: t.tag, a.tags))
    return Template({"INCLUDE_PATH": str(app_path / "LANraragi/templates")}).process(path, vars)


print("ｷﾀ━━━━━━(ﾟ∀ﾟ)━━━━━━!!!!!")
