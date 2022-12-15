import { db } from '../../src/utils/lowdb'

export default async function handler(req, res) {
  await db.read()

  switch (req.method) {
    case 'POST':
      db.data ||= { meetups: [] }

      db.data.meetups.push({
        id: randomBytes(7).toString('base64url'),
        ...req.body
      })
      await db.write()
      res.status(201).json(db.data)
      break

    case 'DELETE':
      const id = req.query.id
      db.data.meetups = db.data.meetups.filter(meetup => meetup.id !== id)
      await db.write()

      res.status(204).json(db.data.meetups)
      break

    default:
      res.status(401)
      break
  }
}
