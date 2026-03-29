# Server

Fastify API running on port 3001.

## Stack

- **Bun** — runtime and package manager
- **Fastify** — HTTP framework with built-in logger
- **ioredis** — Redis client, connected on startup

## How it works

- Entry point: `src/index.ts` — starts the server and connects to Redis
- App setup: `src/app.ts` — registers plugins (CORS) and routes
- All responses follow the `ApiResponse<T>` shape: `{ success: true, data }` or `{ success: false, error }`
- CORS allows all origins in dev; restricts to `CLIENT_URL` in production

## Dev

```bash
bun run dev   # start with hot reload
```
