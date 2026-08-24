import { Router } from 'express'
import { loadBible } from '../bible/bible-service.js'

const router = Router()

router.get('/:translation', async (request, response) => {
	try {
		const bible = await loadBible(request.params.translation)

		response.json(bible)
	} catch (error) {
		response
			.status(404)
			.json({
				error:
					error instanceof Error ?
						error.message
					:	'Failed to load Bible',
			})
	}
})

export default router
