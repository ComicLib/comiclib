from typing import Optional
from sqlalchemy import Column, ForeignKey, Table
from sqlalchemy import create_engine
from sqlalchemy.orm import relationship
from sqlalchemy.orm import mapped_column
from sqlalchemy.orm import Mapped
from sqlalchemy.orm import DeclarativeBase

from .config import settings


engine = create_engine(
    settings.metadata, connect_args={"check_same_thread": False}, echo=settings.debug
)


class Base(DeclarativeBase):
    pass


categories_association_table = Table(
    "categories_association",
    Base.metadata,
    Column("archive_id", ForeignKey("archives.id"), primary_key=True),
    Column("category_name", ForeignKey("categories.name"), primary_key=True),
)


class Archive(Base):
    __tablename__ = "archives"

    id: Mapped[str] = mapped_column(primary_key=True)
    title: Mapped[str]
    subtitle: Mapped[Optional[str]]
    source: Mapped[Optional[str]]
    path: Mapped[str]
    pagecount: Mapped[int]
    thumb: Mapped[str]

    tags: Mapped[list["Tag"]] = relationship(
        back_populates="archive", cascade="all, delete-orphan")
    categories: Mapped[list["Category"]] = relationship(
        secondary=categories_association_table, back_populates="archive")


class Tag(Base):
    __tablename__ = "tags"

    archive_id: Mapped[str] = mapped_column(
        ForeignKey("archives.id"), primary_key=True)
    tag: Mapped[str] = mapped_column(primary_key=True)

    archive: Mapped["Archive"] = relationship(back_populates="tags")


class Category(Base):
    __tablename__ = "categories"

    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str]
    pinned: Mapped[bool]
    search: Mapped[Optional[str]]

    archive: Mapped[list["Archive"]] = relationship(
        secondary=categories_association_table, back_populates="categories")
