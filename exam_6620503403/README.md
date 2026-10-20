# Data Warehouse Practical Exam Starter

A strict-TypeScript Next.js dashboard starter with Recharts, Zod, repository/service layers, deterministic Sales DW data, separate MySQL/PostgreSQL Prisma clients and migrations, ETL, backup/restore scripts, tests, and Docker profiles.

## Quick start (demo, no database)

```bash
pnpm install
cp .env.example .env
pnpm db:generate
pnpm dev
```

Open `http://localhost:3000/dashboard`. Demo mode never silently reads mock data in exam mode.

## Provider workflow

Choose exactly one provider, set `DB_PROVIDER` and a matching `DATABASE_URL`, then run its generate, deploy, seed, and verify scripts. Never run both migration histories on one database.

```bash
pnpm db:generate:mysql && pnpm db:deploy:mysql && pnpm db:seed:mysql && pnpm db:verify:mysql
pnpm db:generate:postgres && pnpm db:deploy:postgres && pnpm db:seed:postgres && pnpm db:verify:postgres
```

For a real exam set `APP_MODE=exam`. See `EXAM_GUIDE.md`, `DATABASE_SELECTION.md`, and `DEPLOY_SERVER.md`.
