import { db } from '../config/database.js';
const insert = db.prepare(`INSERT INTO applications (full_name,email,phone,internship_id,cover_letter) VALUES (@fullName,@email,@phone,@internshipId,@coverLetter)`);
const all = db.prepare('SELECT id, full_name AS fullName, email, phone, internship_id AS internshipId, cover_letter AS coverLetter, created_at AS createdAt FROM applications ORDER BY id DESC');
export function createApplication(input) { const result = insert.run(input); return db.prepare('SELECT id, full_name AS fullName, email, phone, internship_id AS internshipId, cover_letter AS coverLetter, created_at AS createdAt FROM applications WHERE id = ?').get(result.lastInsertRowid); }
export function listApplications() { return all.all(); }
export function clearApplicationsForTests() { db.prepare('DELETE FROM applications').run(); }
