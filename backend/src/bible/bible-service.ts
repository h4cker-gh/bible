import type { Translation } from './bible-types.js'
import { fetchBible } from './bible-source.js'
import { hasTranslation, saveTranslation } from './bible-repository.js'

export async function loadBible(code: string): Promise<Translation> {
	const normalizedCode = code.toUpperCase()

	if (hasTranslation(normalizedCode)) {
		return loadTranslationFromDatabase(normalizedCode)
	}

	const translation = await fetchBible(normalizedCode)

	// saveTranslation(translation)

	return translation
}

function loadTranslationFromDatabase(code: string): Translation {
	throw new Error('Not implemented')
}
