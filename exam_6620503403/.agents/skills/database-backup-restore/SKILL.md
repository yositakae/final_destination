---
name: database-backup-restore
description: Export and restore engine-specific backups without accidental overwrite.
---
# When to use
Use before risky migration, transfer, or submission when dumps are required.
# Workflow
1. Verify exact engine/host/database. 2. choose native tool/format. 3. export. 4. check file size and metadata. 5. restore only with explicit confirmation to an isolated compatible target. 6. verify counts/KPIs.
# Technical rules
MySQL dumps stay in MySQL; PostgreSQL dumps stay in PostgreSQL; never store credentials in commands/files; avoid redundant dump+migration creation.
# Example
Use custom-format `pg_dump` with `pg_restore`, not MySQL CLI.
# Validation checklist
Backup opens with native inspection; restore target is approved; post-restore integrity and totals pass.
# Common mistakes
Restoring over shared data, committing secrets, assuming dump portability, or skipping post-restore checks.
