# OJAS - Global EdTech Marketplace

This repository contains a production-ready starter architecture for OJAS, a worldwide teaching marketplace where anyone can teach and earn.

## Stack
- Frontend: Next.js + React + Tailwind
- Backend: Node.js + Express
- Database: PostgreSQL (Prisma schema)
- Realtime: WebSockets (design-ready endpoints)
- Live classes: WebRTC-compatible APIs
- Cloud: AWS-first scalable architecture

## Implemented deliverables
- Backend APIs for auth, teacher/student/admin dashboards, marketplace, courses, live sessions, and payments.
- Frontend UI for homepage, marketplace, authentication module, and role-based dashboards.
- Database models covering users, teacher onboarding profiles, courses, modules, lessons, assignments, quizzes, bookings, payments, payouts, and reviews.
- Authentication flow endpoints for email login, Google OAuth callback, phone OTP, 2FA setup, password reset, and email verification.
- System architecture documentation for scaling to millions of users.

## Run backend
```bash
cd backend
npm install
npm run dev
```

## Run frontend
```bash
cd frontend
npm install
npm run dev
```
