import type { Translation } from './bible-types.js'

const sources: Record<string, string> = {
	ARC: 'https://raw.githubusercontent.com/MaatheusGois/bible/main/versions/pt-br/arc.json',
}

export async function fetchBible(code: string): Promise<Translation> {
	const url = sources[code]

	if (!url) {
		throw new Error(`Bible translation "${code}" is not supported`)
	}

	const response = await fetch(url)

	if (!response.ok) {
		throw new Error(
			`Failed to fetch "${code}": ${response.status} ${response.statusText}`,
		)
	}

	return response.json() as Promise<Translation>
}
