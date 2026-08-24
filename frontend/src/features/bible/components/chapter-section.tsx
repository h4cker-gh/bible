import Divider from "@components/divider";
import type { ReactNode } from "react";

type ChapterPageProps = { number: number, children: ReactNode }

export default function ChapterSection({ number, children }: ChapterPageProps) {
	return (
		<article className='bible-chapter-section'>
			<h2>Capítulo {number}</h2>
			<Divider />
            {children}
		</article>
	)
}
