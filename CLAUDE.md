# Stock Smart Investor - Project Instructions

## Working Preferences

This is a **learning project**. When working with Claude:
- Take **small steps** with explanations of concepts
- Explain the "why" behind decisions, not just the "what"
- Don't rush ahead - wait for confirmation before proceeding
- When introducing new patterns or tools, explain how they work

### Tech Decision Rule — Brainstorm Before You Install

**Before adding any new technology, package, or service to the stack, a brainstorming session is required.** No `bun add`, no new Docker service, no new config — until the decision has been talked through.

The session should answer:
- **What problem does this solve?** Be specific to this project, not in general.
- **Do we already have something that covers it?** (e.g. does Fastify's built-in validation make Zod redundant here?)
- **What's the simpler alternative?** Could we solve this with less?
- **What's the cost?** Bundle size, complexity, learning curve, maintenance.
- **Why this one over alternatives?** (e.g. Zod vs Valibot vs Yup, Redis vs in-memory cache)

This applies to everything: databases (do we actually need both PostgreSQL *and* MongoDB?), caching layers, auth libraries, UI component libraries, state managers, background job runners — everything.

The goal is to make deliberate choices, not assemble a stack from defaults.

**When starting a prep/study session:** check `docs/theory-prep/PROGRESS.md` for current state, then open the next incomplete day file in `docs/theory-prep/prep/`.

## Project Overview

A **personal wealth engine** built around a single question: *"Am I on track to reach my financial goal, and what can I do to get there faster?"*

The core use case: you have a big financial goal (e.g. a house down payment). You have income, expenses, savings, and investments. This app connects all of it, tracks your net worth over time, calculates whether you're ahead or behind your target, and lets you run "what-if" simulations (what if I save €200 more/month? what if my portfolio grows at 7%?). The AI layer has full context of your financial picture and can answer real questions about your trajectory.

Greek stock market support (`.AT` suffix, Athens Stock Exchange) is first-class — this is built for personal use.

## Tech Stack

### Backend
- **Runtime**: Node.js with Bun (as package manager + runner)
- **Framework**: Fastify _(to install)_
- **Database**: PostgreSQL with Prisma ORM (relational data) _(to install)_
- **Database**: MongoDB with Mongoose (documents: LLM analysis, audit logs, activity) _(to install)_
- **Cache/Queue**: Redis (caching, rate limiting, sessions, job queues)
- **Background Jobs**: BullMQ _(to install)_
- **WebSockets**: Socket.io _(to install)_
- **Auth**: JWT with refresh token rotation _(to install)_
- **Stock Data**: yahoo-finance2 (Greek stocks use .AT suffix, e.g., OPAP.AT) _(to install)_
- **Logging**: Winston (structured logging) _(to install)_
- **Testing**: Vitest + supertest _(to install)_

### Frontend
- **Framework**: React 19 with TypeScript ✓
- **Build Tool**: Vite ✓
- **Styling**: Tailwind CSS 4 ✓
- **UI Components**: shadcn/ui (built on Radix UI) _(to install)_
- **State Management**: Zustand (client state) + TanStack Query (server state) _(to install)_
- **Forms**: React Hook Form + Zod _(to install)_
- **Routing**: React Router 7 ✓
- **Testing**: Vitest with happy-dom _(to install)_

### Tooling
- **Linting/Formatting**: Biome (replaces ESLint + Prettier)
- **Git Hooks**: lefthook
- **Commit Standard**: Conventional Commits (commitlint)

### Infrastructure
- **Containerization**: Docker & Docker Compose
- **Local LLM**: Ollama with Llama 3
- **Services**: PostgreSQL, MongoDB, Redis, API, Frontend, Ollama

## Development Commands

```bash
# Install dependencies
bun install

# Start all services (Docker)
docker compose up

# Run frontend in development
cd frontend && bun run dev

# Run api in development
cd api && bun run dev
```

## Database Strategy

### PostgreSQL (Relational Data)
- Users, authentication, sessions
- Portfolios, holdings, transactions
- Watchlists
- Stock metadata
- Subscriptions, payments

### MongoDB (Document Data)
- LLM analysis results & conversation history
- Audit logs (user actions, system events)
- Activity tracking & analytics
- Stock analysis reports (complex nested structures)
- User notification history

### Redis (Cache & Queues)
- Stock quote cache (5min TTL)
- Financial data cache (1hr TTL)
- Rate limiting counters
- Session storage
- Background job queues
- Real-time pub/sub

## Project Structure

```
/
├── api/
│   ├── src/
│   │   ├── config/         # DB connections, env config
│   │   ├── controllers/    # Route handlers
│   │   ├── middlewares/    # Auth, rate limiting, validation
│   │   ├── models/
│   │   │   └── mongo/      # MongoDB schemas
│   │   ├── repositories/   # Data access layer
│   │   ├── routes/         # API routes
│   │   ├── services/       # Business logic
│   │   ├── jobs/           # Background job processors
│   │   ├── utils/          # Helpers
│   │   └── websocket/      # Socket.io handlers
│   ├── prisma/             # Prisma schema + migrations
│   │   └── schema.prisma
│   ├── Dockerfile          # API container build instructions
│   ├── .dockerignore       # Files excluded from Docker build
│   └── tests/
├── frontend/
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── features/       # Feature-based modules
│   │   ├── hooks/          # Custom React hooks
│   │   ├── pages/          # Route pages
│   │   ├── services/       # API client
│   │   ├── stores/         # Zustand stores (to add)
│   │   └── utils/          # Helpers
├── .env.example            # Environment template for Docker
├── docker-compose.yml      # Container orchestration
├── CLAUDE.md               # Project instructions
└── DEVELOPMENT.md          # Development commands reference
```

## Key Patterns to Implement

### Backend Patterns
1. **Repository Pattern** - Separate data access from business logic
2. **Service Layer** - Business logic in services, not controllers
3. **JWT with Refresh Tokens** - Access token (15min) + Refresh token (7d) rotation
4. **Rate Limiting** - Redis-based, per-user and per-endpoint
5. **Caching Strategy** - Stock quotes, financials, user data with appropriate TTLs
6. **Background Jobs** - Price alerts, portfolio updates, email notifications
7. **WebSocket Events** - Real-time price updates, notifications
8. **Audit Logging** - Track all user actions in MongoDB

### Frontend Patterns
1. **Optimistic Updates** - Immediate UI feedback, rollback on error
2. **Debounced Search** - 300ms debounce on search inputs
3. **Infinite Scroll / Cursor Pagination** - For stock listings, transaction history
4. **Error Boundaries** - Graceful error handling per feature

## Stock Market Notes

- Primary market: Athens Stock Exchange (ASE) — `.AT` suffix in Yahoo Finance (e.g. OPAP.AT, ALPHA.AT)
- yahoo-finance2 supports any market — `.AT` is default but not exclusive
- Market hours ASE: 10:00 - 17:20 EET (Monday-Friday)
- Currency: EUR
- Common ASE stocks: OPAP.AT, ALPHA.AT, EUROB.AT, PPC.AT, OTE.AT, MYTIL.AT

## MVP Features (Month 1 Scope)

1. User authentication (register, login, refresh, logout)
2. Goal setup — name, target amount, target date
3. Accounts — manual cash/savings accounts with current balance
4. Transaction log — income and expenses with categories
5. Holdings — stock positions with live quotes (yahoo-finance2, cached in Redis)
6. Net worth calculation — total across all accounts + portfolio value
7. On-track status — are you ahead or behind your goal, by how much, revised target date
8. Dashboard — single view with goal status, net worth, savings rate, portfolio summary

**Month 2:** Simulation engine (what-if scenarios), AI layer (Ollama with financial context), nightly net worth snapshots (BullMQ), financial event timeline (MongoDB)

**Month 3+:** Real-time portfolio updates (WebSockets during market hours), CSV import, price alerts, OAuth

## Learning Objectives

This project covers:

### TypeScript & JavaScript
- [ ] TypeScript generics (`ApiResponse<T>`, repository interfaces, utility types)
- [ ] Error handling patterns (`AppError` classes, typed errors, error middleware)

### HTTP & API Fundamentals
- [ ] HTTP fundamentals — status codes, headers, REST conventions
- [ ] CORS — what it is, why it exists, how to configure it
- [ ] API versioning
- [ ] Input validation (Zod)

### Auth & Security
- [ ] JWT authentication with refresh token rotation
- [ ] OAuth 2.0 integration
- [ ] Role-based access control (RBAC)

### Database & ORM
- [ ] PostgreSQL with Prisma ORM (relational)
- [ ] MongoDB with Mongoose (documents)
- [ ] Database transactions
- [ ] Full-text search

### Caching & Performance
- [ ] Redis caching strategies
- [ ] Rate limiting implementation
- [ ] Cursor-based pagination
- [ ] Offset-based pagination (for comparison)

### Real-time & Background
- [ ] WebSocket real-time updates
- [ ] WebSockets vs polling vs SSE — when to use each
- [ ] Background job processing (BullMQ)

### Architecture & Patterns
- [ ] Repository/Service patterns
- [ ] Environment variables / config management
- [ ] Logging strategy — levels, what to log, when (Winston)
- [ ] System design for a real-time data app (stock prices)

### Frontend
- [ ] Optimistic UI updates
- [ ] Debouncing/throttling

### Infrastructure
- [x] Docker containerization
- [ ] CI/CD basics — GitHub Actions, automated deploys

### Integrations
- [ ] Stripe payment integration
- [ ] Local LLM integration (Ollama)

---

## Interview Prep Structure

The `docs/prep/` folder is the daily study system running in parallel with the project build.

### Folder Layout

```
docs/
├── theory-prep/
│   ├── PROGRESS.md              # Interview prep + DSA progress tracker
│   ├── prep/
│   │   ├── day-XX.md            # Study plan for that day
│   │   ├── day-XX_answers.md    # Blank answers template
│   │   ├── Completed_day-XX.md  # Renamed when day is done
│   │   ├── all_answers.md       # Compiled answers across all days
│   │   └── questions.md         # Interview questions tracker
│   ├── dsa/                     # DSA scratch files
│   └── LEARNING_RESOURCES.md    # Resource list
└── project/
    └── PROGRESS.md              # Project milestones + next issues
```

### File Conventions

- Day files are **created only when needed** — not planned months ahead
- `day-XX.md` — resource, learning outcomes, project tasks, checklist
- `day-XX_answers.md` — questions from the reading + 1-2 "go deeper" questions outside the reading
- When a day is complete, rename `day-XX_answers.md` → `Completed_day-XX_answers.md`

---

## Session Status

- Interview prep progress: `docs/theory-prep/PROGRESS.md`
- Project progress: `docs/project/PROGRESS.md`

### Data Models

**PostgreSQL (Prisma)**
- `User` → `Goals` (name, targetAmount, targetDate)
- `User` → `Accounts` (type: cash | savings | investment, label, currentBalance)
- `User` → `Transactions` (amount, type: income | expense, category, date)
- `User` → `Holdings` (symbol, shares, averagePrice, linked to an Account)
- `User` → `NetWorthSnapshots` (monthly: totalCash, totalInvestments, totalNetWorth)
- `User` → `RefreshTokens`

**MongoDB (Mongoose)**
- `FinancialEvents` — one-off events (bonus, windfall, big expense) with impact on projections
- `AIConversations` — Ollama chat history with user's financial context attached
- `AuditLogs` — all write actions

---

## Technical Notes

(Setup details will be added as tools are implemented)

---

## Maintenance Notes

**When a day is completed:**
1. Rename `day-XX.md` → `Completed_day-XX.md` and `day-XX_answers.md` → `Completed_day-XX_answers.md` in `docs/theory-prep/prep/`
2. Update `docs/theory-prep/PROGRESS.md` — recalculate % and progress bar for affected topics, tick off any DSA problems solved
3. When the user asks: append all answers from `Completed_day-XX_answers.md` into `docs/theory-prep/prep/all_answers.md` under a `## Day XX` heading — **exclude DSA sections entirely**

**When a day is marked complete, automatically:**
- Add ✅ to every question in `docs/theory-prep/prep/questions.md` that was actually answered (not just listed as a topic)
- Recalculate the progress bars and counts at the top of `questions.md` (JS x/50, TypeScript x/70, React x/50, Overall x/170)

**On `docs/theory-prep/PROGRESS.md`:**
- Tracks interview prep topics and DSA progress
- Must stay in sync: update every time a day is marked complete

**On `docs/project/PROGRESS.md`:**
- Tracks project milestones and next implementation tasks
- Update when a project task is completed

**When starting the next topic** (e.g. after TypeScript → Deep JavaScript):
- Create day files only for that topic
- Ask the user to choose a resource before creating the day files
