import dotenv from 'dotenv';

dotenv.config();

export const env = {
  port: process.env.PORT || 8080,
  jwtSecret: process.env.JWT_SECRET || 'development_secret',
  appUrl: process.env.APP_URL || 'http://localhost:3000'
};
