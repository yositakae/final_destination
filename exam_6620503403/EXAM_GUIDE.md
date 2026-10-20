# Exam Guide

1. Read the entire paper and record uncertainties—never infer unreadable text.
2. Define fact grain before columns. Map every output to measures, dimensions, formula, filter, SQL, API, and UI.
3. Select one permitted database. Copy `.env.example` to `.env`; never commit it.
4. Edit only that provider's Prisma schema, generate a migration, and review SQL before applying.
5. Seed/import once, verify row counts and KPI totals, then set `APP_MODE=exam`.
6. Reuse dashboard components; keep all filters server-validated and consistent.
7. Run `pnpm typecheck`, `pnpm lint`, `pnpm test`, and `pnpm build`.
8. Follow the deployment checklist and verify `/api/health` plus visible database-backed values.
