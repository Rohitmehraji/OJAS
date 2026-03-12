# OJAS System Architecture (Scalable to Millions)

## High-level services
- **API Gateway**: authentication, rate limiting, routing.
- **Identity Service**: email login, OAuth, OTP, 2FA, password reset, email verification.
- **User Service**: student/teacher/admin/moderator/affiliate profiles.
- **Course Service**: courses, modules, lessons, assignments, quizzes.
- **Live Classroom Service**: WebRTC signaling, chat, polling, recordings metadata.
- **Marketplace Service**: search, trending, ranking, recommendations.
- **Payment Service**: Stripe/Razorpay/PayPal checkout and payouts.
- **Analytics Service**: business metrics and platform events.
- **AI Assistant Service**: tutoring chat, summary generation, adaptive learning prompts.

## Scalability strategy
1. Run each service as containerized microservices on AWS ECS/EKS.
2. PostgreSQL primary + read replicas + partitioned tables for events/bookings.
3. Redis for caching, session store, and distributed locks.
4. Kafka/SQS for asynchronous workflows (notifications, payouts, moderation).
5. WebSocket gateway for realtime chat/class updates.
6. Media pipeline for recordings via S3 + CloudFront + transcoding.
7. Multi-region failover with Route53 and active-active stateless APIs.

## Concurrency targets
- 1M+ users supported via horizontal service autoscaling.
- 100k concurrent live classes using regional signaling clusters and SFU workers.
- CDN edge caching for course discovery and recorded lessons.
