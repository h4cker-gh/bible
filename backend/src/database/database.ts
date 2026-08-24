import Database from 'better-sqlite3'
import fs from 'node:fs'
import path from 'node:path'

const databasePath = path.resolve(process.cwd(), 'data/bible.db')
const schemaPath = path.resolve(process.cwd(), 'src/bible/schema.sql')

const database = new Database(databasePath)

database.pragma('foreign_keys = ON')

const schema = fs.readFileSync(schemaPath, 'utf8')

database.exec(schema)

export default database
