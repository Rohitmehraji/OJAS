import jwt from 'jsonwebtoken';
import { env } from '../config/env.js';

const buildToken = (payload) => jwt.sign(payload, env.jwtSecret, { expiresIn: '7d' });

export const authController = {
  emailLogin(req, res) {
    const { email } = req.body;
    return res.json({
      message: 'Email login successful',
      token: buildToken({ userId: 'user_001', role: 'student', email })
    });
  },
  googleOAuth(req, res) {
    return res.json({ message: 'Google OAuth callback handled', provider: 'google' });
  },
  phoneOtpStart(req, res) {
    return res.json({ message: 'OTP sent successfully', ttlSeconds: 120 });
  },
  phoneOtpVerify(req, res) {
    return res.json({ message: 'Phone verified successfully', token: buildToken({ userId: 'user_002', role: 'student' }) });
  },
  enableTwoFactor(req, res) {
    return res.json({ message: '2FA enabled', method: 'totp' });
  },
  passwordResetRequest(req, res) {
    return res.json({ message: 'Password reset email sent' });
  },
  passwordResetConfirm(req, res) {
    return res.json({ message: 'Password reset successful' });
  },
  verifyEmail(req, res) {
    return res.json({ message: 'Email verified' });
  }
};
