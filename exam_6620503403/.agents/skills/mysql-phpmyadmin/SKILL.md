---
name: mysql-phpmyadmin
description: Operate local or instructor MySQL safely with optional phpMyAdmin.
---
# When to use
Use only after MySQL is selected.
# Workflow
1. Identify ownership. 2. Set least-privilege credentials. 3. verify target. 4. generate/deploy MySQL migration. 5. seed/import if allowed. 6. verify counts/KPIs. 7. bind phpMyAdmin locally.
# Technical rules
Never reset an instructor database; use MySQL 8-compatible SQL; keep charset/collation consistent.
# Example
Local: `docker compose --profile local-mysql up -d mysql phpmyadmin`.
# Validation checklist
Ping succeeds; expected schema exists; constraints and sample queries work; phpMyAdmin is not public.
# Common mistakes
Using root in the app, assuming init scripts rerun, exposing port 8080, or importing PostgreSQL dumps.
