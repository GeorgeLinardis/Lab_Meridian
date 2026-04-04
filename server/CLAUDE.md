Default to using Node.js and npm.

- Use `npx ts-node <file>` instead of `bun <file>`
- Use `npm test` to run tests
- Use `npm install` instead of `bun install`
- Use `npm run <script>` instead of `bun run <script>`
- Use `npx <package> <command>` instead of `bunx <package> <command>`
- Use `dotenv` or NestJS built-in `ConfigModule` for environment variables

## Framework

- NestJS — use modules, controllers, services, and dependency injection
- Do not use `express` directly
- Do not use `Bun.serve()`

## APIs

- Use `ioredis` for Redis
- Use Prisma for PostgreSQL
- Use `ws` or NestJS WebSocket gateway for WebSockets

## Testing

Use Jest (NestJS default).

```ts
import { Test, TestingModule } from '@nestjs/testing';

describe('AppController', () => {
  it('should be defined', () => {
    expect(true).toBe(true);
  });
});
```
