import VerseCard from './components/verse-card'
import './css/index.css'
import BookPage from './components/book-page'
import ChapterSection from './components/chapter-section'
import Divider from '@components/divider'
import { useEffect, useState } from 'react'

export default function BiblePage() {
	const [bible, setBible] = useState([])

	useEffect(() => {
		async function load() {
			const response = await fetch('http://localhost:3000/api/bible/ARC')

			const data = await response.json()

			setBible(data)
			console.log(data)
		}

		load()
	}, [])

	return (
		<>
			<h1>Bíblia</h1>

			<Divider />

			{bible.map((book) => (
				<BookPage key={book.name} name={book.name}>
					{book.chapters.map((chapter, chapterIndex: string) => (
						<ChapterSection
							key={chapterIndex}
							number={chapterIndex + 1}>
							{chapter.map((verse: string, verseIndex: number) => (
								<VerseCard
									key={verseIndex}
									number={verseIndex + 1}
									verse={verse}
								/>
							))}
						</ChapterSection>
					))}
				</BookPage>
			))}
		</>
	)
}
