import type { ReactNode } from 'react'

type BookPageProps = { name: string; children: ReactNode }

export default function BookPage({ name, children }: BookPageProps) {
	return (
		<section className='bible-book-page'>
			<h2>{name}</h2>

			{children}
		</section>
	)
}
