import { join, dirname, resolve } from 'node:path'
import { Low, JSONFile } from 'lowdb'

// cara untuk mendapatkan root directory dari project
// dengan keluar dua kali dari folder utils, src, lalu masuk ke root.
const __dirname = resolve(dirname('../'))

// karena kita taruh file db.json di root, maka kita perlu join
// __dirname dengan db.json.
const file = join(__dirname, 'db.json')

// kita buat instance dari JSONFile untuk mengakses file db.json
const adapter = new JSONFile(file)

// kita bisa mengakses file db.json melalui instance db
export const db = new Low(adapter)
