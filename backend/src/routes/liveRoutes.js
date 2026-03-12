import { Router } from 'express';
import { liveController } from '../controllers/liveController.js';
import { authenticate } from '../middlewares/auth.js';

const router = Router();

router.post('/sessions', authenticate, liveController.createSession);

export default router;
