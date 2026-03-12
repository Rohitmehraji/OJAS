import { Router } from 'express';
import { adminController } from '../controllers/adminController.js';
import { authenticate, authorize } from '../middlewares/auth.js';

const router = Router();

router.get('/overview', authenticate, authorize('admin', 'moderator'), adminController.overview);
router.post('/teachers/moderate', authenticate, authorize('admin', 'moderator'), adminController.moderateTeacher);
router.get('/analytics', authenticate, authorize('admin'), adminController.analytics);

export default router;
