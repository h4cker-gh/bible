import database from '../database/database.js'
import type { Translation } from './bible-types.js'

export function hasTranslation(code: string): boolean {
	const result = database
		.prepare('SELECT 1 FROM translations WHERE code = ? LIMIT 1')
		.get(code)

	return result !== undefined
}

export function saveTranslation(translation: Translation): void {
	const insertTranslation = database.prepare(`
        INSERT INTO translations (
            code,
            name,
            language
        )
        VALUES (?, ?, ?)
    `)

	const insertBook = database.prepare(`
        INSERT INTO books (
            translation_id,
            code,
            name,
            position
        )
        VALUES (?, ?, ?, ?)
    `)

	const insertChapter = database.prepare(`
        INSERT INTO chapters (
            book_id,
            number
        )
        VALUES (?, ?)
    `)

	const insertVerse = database.prepare(`
        INSERT INTO verses (
            chapter_id,
            number,
            text
        )
        VALUES (?, ?, ?)
    `)

	const transaction = database.transaction(() => {
		const translationResult = insertTranslation.run(
			translation.code,
			translation.name,
			translation.language,
		)

		const translationId = Number(translationResult.lastInsertRowid)

		for (const book of translation.books) {
			const bookResult = insertBook.run(
				translationId,
				book.code,
				book.name,
				book.position,
			)

			const bookId = Number(bookResult.lastInsertRowid)

			for (const chapter of book.chapters) {
				const chapterResult = insertChapter.run(bookId, chapter.number)

				const chapterId = Number(chapterResult.lastInsertRowid)

				for (const verse of chapter.verses) {
					insertVerse.run(chapterId, verse.number, verse.text)
				}
			}
		}
	})

	transaction()
}
