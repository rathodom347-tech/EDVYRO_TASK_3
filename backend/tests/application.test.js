import { beforeEach, describe, expect, it } from 'vitest';
import request from 'supertest';
import { createApp } from '../src/app.js';
import { clearApplicationsForTests } from '../src/services/applicationService.js';
const app=createApp();
const valid={fullName:'Aarav Sharma',email:'aarav@example.com',phone:'+91 9876543210',internshipId:'frontend-intern-01',coverLetter:'I am interested in this internship and have experience with HTML CSS and JavaScript.'};
beforeEach(()=>clearApplicationsForTests());
describe('Application API',()=>{
 it('returns API health status',async()=>{const r=await request(app).get('/api/health');expect(r.status).toBe(200);expect(r.body.status).toBe('ok');});
 it('creates a valid application',async()=>{const r=await request(app).post('/api/applications').send(valid);expect(r.status).toBe(201);expect(r.body.data.email).toBe(valid.email);});
 it('rejects invalid email and short cover letter',async()=>{const r=await request(app).post('/api/applications').send({...valid,email:'bad',coverLetter:'short'});expect(r.status).toBe(400);expect(r.body.errors).toHaveProperty('email');});
 it('lists submitted applications',async()=>{await request(app).post('/api/applications').send(valid);const r=await request(app).get('/api/applications');expect(r.status).toBe(200);expect(r.body.data).toHaveLength(1);});
 it('returns 404 for unknown routes',async()=>{const r=await request(app).get('/unknown');expect(r.status).toBe(404);});
});
