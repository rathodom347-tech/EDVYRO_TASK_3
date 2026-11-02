import Database from 'better-sqlite3';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const here = path.dirname(fileURLToPath(import.meta.url));
const defaultFile = path.resolve(here, '../../data/applications.db');
const dbFile = process.env.DATABASE_FILE ? path.resolve(process.cwd(), process.env.DATABASE_FILE) : defaultFile;
fs.mkdirSync(path.dirname(dbFile), { recursive: true });
export const db = new Database(dbFile);
db.pragma('journal_mode = WAL');
db.exec(`CREATE TABLE IF NOT EXISTS applications (
 id INTEGER PRIMARY KEY AUTOINCREMENT,
 full_name TEXT NOT NULL,
 email TEXT NOT NULL,
 phone TEXT NOT NULL,
 internship_id TEXT NOT NULL,
 cover_letter TEXT NOT NULL,
 created_at TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
)`);
