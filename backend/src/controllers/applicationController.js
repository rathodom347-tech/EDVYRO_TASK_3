import { createApplication, listApplications } from '../services/applicationService.js';
export function getApplications(req,res) { res.json({ success:true, data:listApplications() }); }
export function postApplication(req,res) { const application=createApplication(req.validatedBody); res.status(201).json({ success:true, message:'Application submitted successfully', data:application }); }
