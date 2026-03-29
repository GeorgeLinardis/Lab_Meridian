# Meridian

> A personal wealth engine built around one question: *am I on track to reach my financial goal?*

Connect accounts, log transactions, and track stock holdings.
Run what-if simulations and get AI-powered insights via a local Ollama model.

*Built to solve a real personal finance problem — and as a vehicle for going deep on the full stack: auth, real-time data, background jobs, and AI integration.*

![Status](https://img.shields.io/badge/status-in%20progress-yellow)
![CI](https://github.com/GeorgeLinardis/Lab_Meridian/actions/workflows/main_workflow.yml/badge.svg)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)

---

## Progress

```
Infrastructure    ████████████░░░░░░░░  60%
Authentication    ░░░░░░░░░░░░░░░░░░░░   0%
Core Features     ░░░░░░░░░░░░░░░░░░░░   0%
AI Layer          ░░░░░░░░░░░░░░░░░░░░   0%
```

---

## Stack

| Layer | Tech |
|---|---|
| Client | React 19, Vite, TypeScript, Tailwind CSS |
| Server | Bun, Fastify, TypeScript |
| Database | PostgreSQL (Prisma), MongoDB (Mongoose) |
| Cache / Queues | Redis, BullMQ |
| Infra | Docker Compose, GitHub Actions CI |
| LLM | Ollama (local) |

---

## Roadmap

- [ ] Auth — register, login, JWT with refresh token rotation
- [ ] Goals — set a financial target with a deadline
- [ ] Accounts & transactions — income, expenses, savings
- [ ] Holdings — stock positions with live quotes
- [ ] Dashboard — net worth, goal status, savings rate
- [ ] Simulation engine — what-if scenarios
- [ ] AI layer — Ollama with full financial context

---

## Structure

```
/
├── client/               # React frontend
├── server/               # Fastify API
├── docker-compose.yml
└── .env.example
```

## Running locally

```bash
cp .env.example .env
docker compose up
```

---

## Conventions

**Commits** — conventional commits: `feat`, `fix`, `docs`, `refactor`, `infra`, `test`

## Docs

- [Development guide](./DEVELOPMENT.md)
- [Client](./client/README.md)
- [Server](./server/README.md)
