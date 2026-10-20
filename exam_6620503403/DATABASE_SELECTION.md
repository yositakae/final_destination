# Database Selection

| Situation | Select | Compose profile |
|---|---|---|
| Own local DB allowed | MySQL container + local-only phpMyAdmin | `local-mysql` |
| Instructor supplies MySQL | External MySQL; do not start another DB | `university-mysql` |
| External cloud allowed | Neon PostgreSQL with SSL URL | `neon` |

Selection is not a URL-only switch: use the matching `DB_PROVIDER`, Prisma schema/client, migration history, seed, verification command, and Docker build argument. Confirm permission and connectivity before deciding.
