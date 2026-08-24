export type Verse = { number: number; text: string }

export type Chapter = { number: number; verses: Verse[] }

export type Book = {
	code: string
	name: string
	position: number
	chapters: Chapter[]
}

export type Translation = {
	code: string
	name: string
	language: string
	books: Book[]
}
