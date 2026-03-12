import { Router } from 'express';
import { authController } from '../controllers/authController.js';

const router = Router();

router.post('/email/login', authController.emailLogin);
router.get('/google/callback', authController.googleOAuth);
router.post('/phone/otp/start', authController.phoneOtpStart);
router.post('/phone/otp/verify', authController.phoneOtpVerify);
router.post('/2fa/enable', authController.enableTwoFactor);
router.post('/password/reset/request', authController.passwordResetRequest);
router.post('/password/reset/confirm', authController.passwordResetConfirm);
router.post('/email/verify', authController.verifyEmail);

export default router;
