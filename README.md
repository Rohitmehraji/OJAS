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

---

## How to run OJAS locally

### 1) Prerequisites
- Node.js **18+** (recommended: 20 LTS)
- npm **9+**
- PostgreSQL **14+** (optional for API stub run, required for Prisma migrations later)

Check your versions:
```bash
node -v
npm -v
psql --version
```

### 2) Clone and enter the repo
```bash
git clone <your-repo-url> OJAS
cd OJAS
```

### 3) Configure environment variables (backend)
Create a backend `.env` file:
```bash
cat > backend/.env <<'ENV'
PORT=8080
JWT_SECRET=replace_with_a_long_random_secret
APP_URL=http://localhost:3000
DATABASE_URL=postgresql://postgres:postgres@localhost:5432/ojas
ENV
```

### 4) Install and run backend
```bash
cd backend
npm install
npm run dev
```

Backend will run at:
- `http://localhost:8080`
- Health check: `http://localhost:8080/health`

Quick API checks (in a new terminal):
```bash
curl http://localhost:8080/health
curl http://localhost:8080/api/v1/marketplace/home
curl -X POST http://localhost:8080/api/v1/auth/email/login \
  -H "Content-Type: application/json" \
  -d '{"email":"student@example.com"}'
```

### 5) Install and run frontend
From repo root in a new terminal:
```bash
cd frontend
npm install
npm run dev
```

Frontend will run at:
- `http://localhost:3000`

Pages to verify quickly:
- `/` (homepage)
- `/marketplace`
- `/auth`
- `/teacher`
- `/student`
- `/admin`

---

## Current limitations of this starter
- Backend endpoints are functional stubs returning deterministic JSON.
- Prisma schema is defined but migration/client generation is not yet wired into scripts.
- Real payment/video/auth provider integrations (Stripe, Razorpay, PayPal, Google OAuth, OTP provider, WebRTC infra) are placeholders for implementation.

## Suggested next steps
1. Add Prisma client, migrations, and seed scripts.
2. Replace auth stubs with real identity provider integrations.
3. Add Redis + queue for notifications, payouts, and moderation workflows.
4. Add API tests (Jest/Supertest) and frontend tests (Playwright).
