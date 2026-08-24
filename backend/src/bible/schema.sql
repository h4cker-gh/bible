CREATE TABLE IF NOT EXISTS translations (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    code TEXT NOT NULL UNIQUE,
    name TEXT NOT NULL,
    language TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS books (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    translation_id INTEGER NOT NULL,
    code TEXT NOT NULL,
    name TEXT NOT NULL,
    position INTEGER NOT NULL,

    FOREIGN KEY (translation_id)
        REFERENCES translations(id)
        ON DELETE CASCADE,

    UNIQUE (translation_id, code)
);

CREATE TABLE IF NOT EXISTS chapters (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    book_id INTEGER NOT NULL,
    number INTEGER NOT NULL,

    FOREIGN KEY (book_id)
        REFERENCES books(id)
        ON DELETE CASCADE,

    UNIQUE (book_id, number)
);

CREATE TABLE IF NOT EXISTS verses (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    chapter_id INTEGER NOT NULL,
    number INTEGER NOT NULL,
    text TEXT NOT NULL,

    FOREIGN KEY (chapter_id)
        REFERENCES chapters(id)
        ON DELETE CASCADE,

    UNIQUE (chapter_id, number)
);