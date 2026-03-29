# Development Guide

Quick reference for local development.

## Services

| Service    | Container  | Port  |
|------------|------------|-------|
| PostgreSQL | mer_db     | 5432  |
| Redis      | mer_redis   | 6379 |
| Server     | mer_server | 3001  |
| Client     | mer_client | 5173  |

---

## Architecture Notes

- **CORS** — in dev all origins are allowed; in production only `CLIENT_URL` is whitelisted
- **ApiResponse\<T\>** — all server responses use a discriminated union: `{ success: true, data: T }` or `{ success: false, error: { message, code } }`
- **Redis** — connected via ioredis on startup; server exits if connection fails

---

## Commands

### Docker

```bash
docker-compose up          # start all services
docker-compose up --build  # rebuild images first (after Dockerfile changes)
docker-compose down        # stop and remove containers
docker-compose logs -f     # follow logs
```
