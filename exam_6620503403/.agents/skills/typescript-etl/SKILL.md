---
name: typescript-etl
description: Import CSV/JSON data with validated, repeatable TypeScript ETL.
---
# When to use
Use for source files or deterministic generated data.
# Workflow
1. Profile headers/types. 2. define Zod schema and mapping. 3. normalize nulls/dates. 4. detect business-key duplicates. 5. resolve dimensions. 6. load facts transactionally in batches. 7. emit counts/errors/duration. 8. reconcile totals.
# Technical rules
No Python; preserve referential integrity; retries only for safe idempotent work; never silently discard rejects.
# Example
Map `sale_date` to UTC date and integer `date_key`, then upsert the date dimension before fact insert.
# Validation checklist
Total equals success+reject+duplicate; rerun behavior is known; sample values and KPI totals reconcile.
# Common mistakes
Locale date ambiguity, float money, loading facts first, unbounded transactions, or hiding rejected rows.
