---
name: neon-postgresql
description: Configure and verify Neon PostgreSQL for exam use.
---
# When to use
Use only when external databases and server egress are permitted.
# Workflow
1. Create/select isolated Neon database. 2. obtain pooled or direct URL appropriate to Prisma operation. 3. require SSL. 4. generate/deploy PostgreSQL schema. 5. seed. 6. verify from deployment host.
# Technical rules
Keep credentials in environment variables; use PostgreSQL migration/SQL only; respect connection limits.
# Example
Use the `neon` profile, `DB_PROVIDER=postgres`, and `pnpm db:deploy:postgres`.
# Validation checklist
DNS/egress works; TLS connection succeeds; schema and KPIs match expected demo results.
# Common mistakes
Choosing Neon without server internet, leaking URLs, using MySQL syntax, or opening too many connections.
