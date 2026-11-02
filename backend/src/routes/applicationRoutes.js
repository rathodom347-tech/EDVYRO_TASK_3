import { Router } from 'express';
import { getApplications, postApplication } from '../controllers/applicationController.js';
import { validateApplication } from '../middleware/validateApplication.js';
const router=Router();
router.get('/', getApplications);
router.post('/', validateApplication, postApplication);
export default router;
