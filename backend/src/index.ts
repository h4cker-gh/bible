import express from 'express'
import cors from 'cors'
import bibleRouter from './api/bible-route.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/api/bible', bibleRouter)

app.listen(3000, () => {
	console.log('Backend running on http://localhost:3000')
})
