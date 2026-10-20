# Database Transfer

- Migration creates versioned structure; review provider-specific SQL before deploy.
- Seed inserts deterministic starter records and is idempotent.
- ETL validates and transforms CSV records inside transactions while reporting rejects/duplicates.
- Dump is an engine-specific backup. MySQL SQL is not PostgreSQL-compatible.

Export with `pnpm db:export`. Restore only to the same engine with `CONFIRM_RESTORE=YES_RESTORE pnpm db:import <file>`, after checking the exact URL. Restore may replace data; follow with the matching `db:verify:*`. Do not combine a schema-creating dump with migrations. Files under `/docker-entrypoint-initdb.d` would run only on first initialization of an empty MySQL data volume; none are auto-mounted here.
