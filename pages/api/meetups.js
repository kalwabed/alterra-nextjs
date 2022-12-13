import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { randomBytes } from 'node:crypto'
import { Low, JSONFile } from 'lowdb'

const __dirname = dirname(fileURLToPath(import.meta.url))
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

export default async function handler(req, res) {
  await db.read()
  db.data ||= { meetups: [] }

  db.data.meetups.push({
    id: randomBytes(7).toString('base64url'),
    ...req.body
  })
  await db.write()

  res.status(200).json(db.data)
}
