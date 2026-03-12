import { Router } from 'express';
import { studentController } from '../controllers/studentController.js';
import { authenticate, authorize } from '../middlewares/auth.js';

const router = Router();

router.get('/dashboard', authenticate, authorize('student'), studentController.dashboard);
router.get('/teachers/discover', studentController.discoverTeachers);
router.post('/bookings', authenticate, authorize('student'), studentController.bookClass);

export default router;
