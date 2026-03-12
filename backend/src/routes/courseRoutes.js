import { Router } from 'express';
import { courseController } from '../controllers/courseController.js';
import { authenticate, authorize } from '../middlewares/auth.js';

const router = Router();

router.get('/', courseController.list);
router.post('/', authenticate, authorize('teacher'), courseController.create);

export default router;
