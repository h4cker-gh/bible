type VerseCardProps = {
	number: number
	chapter?: number
	book?: string
	verse: string
}

export default function VerseCard({
	number,
	chapter = 1,
	book = '?',
	verse,
}: VerseCardProps) {
	const verseId = `${book}-${chapter}:${number}`
	return (
		<div id={verseId} className='bible-verse-card'>
			<span className='bible-verse-number'>{number} </span>
			<span className='bible-verse'>{verse}</span>
		</div>
	)
}
