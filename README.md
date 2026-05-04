# Meridian

> A personal wealth engine built around one simple question:\
> **Am I on track to reach my financial goal?**

![Status](https://img.shields.io/badge/status-in%20progress-yellow)
![CI](https://github.com/GeorgeLinardis/Lab_Meridian/actions/workflows/main_workflow.yml/badge.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

---

## What is Meridian?

Meridian is a full-stack personal finance application that brings together account aggregation, transaction tracking, investment monitoring, and forward-looking simulations into a single dashboard. A local AI layer provides contextual insights based on your full financial picture.

The goal is to answer practical questions like: *"If I keep saving at this rate, will I hit my target by December?"* or *"What happens to my net worth if the market drops 20%?"*

This is also an engineering project. It's designed as a production-grade system covering authentication, real-time data flows, background jobs, CI/CD, and AI integration — built from scratch with modern tooling.

---

## What it does

- **Authentication** — secure login with JWT access/refresh tokens, httpOnly cookies, Passport strategies
- **Account tracking** — connect and monitor bank accounts, brokerages, and savings
- **Transactions** — categorize income, expenses, and transfers
- **Holdings** — track stock positions with live market data
- **Goal tracking** — set financial targets with deadlines and monitor progress
- **Simulations** — run what-if scenarios to forecast net worth under different conditions
- **AI insights** — query a local LLM (Ollama) with full context of your financial data

---

## Tech Stack

| Layer | Tech |
|---|---|
| **Web Client** | Next.js 15, React 19, TypeScript, Tailwind CSS, shadcn/ui |
| **Server** | Node.js, NestJS, Passport, TypeScript |
| **Database** | PostgreSQL (Prisma) |
| **Cache / Queues** | Redis, BullMQ |
| **AI** | Python, FastAPI, Ollama, LangChain *(planned)* |
| **Mobile** | React Native *(planned)* |
| **Infra** | Docker Compose, GitHub Actions CI |

---

## Architecture

```
Browser (Next.js)  ──>  NestJS API  ──>  PostgreSQL
                            │
                            ├──>  Redis (cache/queues)
                            └──>  AI Service (planned)
```

- The **Next.js client** calls the NestJS server directly from the browser (no BFF proxy)
- **Authentication** uses Passport with local + JWT strategies, tokens stored as httpOnly cookies
- **Next.js middleware** guards routes client-side by checking cookie presence
- **NestJS guards** protect API endpoints by verifying JWT signatures server-side
- Everything runs in **Docker** for local development

---

## Progress

```
Infrastructure    ████████████████░░░░  80%
Authentication    ██████████████████░░  90%
Core Features     ░░░░░░░░░░░░░░░░░░░░   0%
AI Layer          ░░░░░░░░░░░░░░░░░░░░   0%
```

---

## Roadmap

- [x] Auth — login, JWT with refresh token rotation
- [ ] Registration — user sign-up with email verification
- [ ] Goals — define financial targets with deadlines
- [ ] Accounts & Transactions — track income, expenses, savings
- [ ] Holdings — manage stock positions with live pricing
- [ ] Dashboard — net worth, savings rate, goal tracking
- [ ] Simulation Engine — scenario-based forecasting
- [ ] AI Layer — local LLM with full financial context

---

## Project Structure

```
/
├── client/                     # Next.js web frontend
│   ├── src/app/(auth)/         # Login page (public route)
│   ├── src/app/(dashboard)/    # Authenticated shell with sidebar
│   ├── src/components/         # UI components (shadcn/ui + custom)
│   ├── src/lib/                # Axios config, Zod schemas, utilities
│   └── src/proxy.ts            # Next.js middleware (route protection)
├── server/                     # NestJS API
│   ├── src/auth/               # AuthModule (Passport, JWT, guards)
│   ├── src/users/              # UsersModule (Prisma)
│   ├── src/prisma/             # Prisma service
│   └── src/redis/              # Redis module
├── mobile/                     # React Native app (planned)
└── ai/                         # Python AI service (planned)
```

---


## Conventions

Commits follow [Conventional Commits](https://www.conventionalcommits.org/):

| Prefix | Purpose |
|---|---|
| `feat` | New feature |
| `fix` | Bug fix |
| `docs` | Documentation |
| `refactor` | Code improvement |
| `infra` | Infrastructure |
| `test` | Testing |

---
