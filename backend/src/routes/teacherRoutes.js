import { Router } from 'express';
import { teacherController } from '../controllers/teacherController.js';
import { authenticate, authorize } from '../middlewares/auth.js';

const router = Router();

router.post('/onboarding', teacherController.onboarding);
router.get('/dashboard', authenticate, authorize('teacher'), teacherController.dashboard);
router.post('/courses', authenticate, authorize('teacher'), teacherController.createCourse);
router.post('/live-classes', authenticate, authorize('teacher'), teacherController.scheduleLiveClass);

export default router;
