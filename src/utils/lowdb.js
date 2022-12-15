import { join, dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { randomBytes } from 'node:crypto'
import { Low, JSONFile } from 'lowdb'

const __dirname = resolve(dirname('../'))
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
export const db = new Low(adapter)
