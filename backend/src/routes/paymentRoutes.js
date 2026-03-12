import { Router } from 'express';
import { paymentController } from '../controllers/paymentController.js';
import { authenticate } from '../middlewares/auth.js';

const router = Router();

router.post('/checkout', authenticate, paymentController.checkout);
router.post('/payout', authenticate, paymentController.payout);

export default router;
