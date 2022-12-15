import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'
import { randomBytes } from 'node:crypto'
import { Low, JSONFile } from 'lowdb'

const __dirname = dirname(fileURLToPath(import.meta.url))
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

async function insertMeetup(meetupData) {
  db.data ||= { meetups: [] }

  db.data.meetups.push({
    id: randomBytes(7).toString('base64url'),
    ...meetupData
  })
  await db.write()
}

export default async function handler(req, res) {
  await db.read()

  switch (req.method) {
    case 'POST':
      await insertMeetup(req.body)
      res.status(201).json(db.data)
      break

    case 'GET':
      // find by id
      if (req.query.id) {
        const meetup = db.data.meetups.find(meetup => {
          return meetup.id === req.query.id
        })
        return res.status(200).json(meetup)
      }

      // find all
      res.status(200).json(db.data)
      break

    case 'DELETE':
      const id = req.query.id
      db.data.meetups = db.data.meetups.filter(meetup => meetup.id !== id)
      await db.write()

      res.status(204).json(db.data.meetups)
      break

    default:
      res.status(200).json(db.data)
      break
  }
}
