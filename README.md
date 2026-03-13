# Meridian

Personal wealth engine. Track net worth, goals, holdings, and run what-if simulations. Athens Stock Exchange first-class. AI layer via Ollama.

## Stack

**Frontend** — React 19, Vite, Tailwind CSS 4, React Router 7, Zustand, TanStack Query, React Hook Form + Zod

**API** — Bun, Fastify, JWT auth

**Data** — PostgreSQL + Prisma, MongoDB + Mongoose, Redis

**Infra** — Docker, BullMQ, Socket.io, Ollama + Llama 3

## Running

```bash
cp .env.example .env
docker compose up
```
