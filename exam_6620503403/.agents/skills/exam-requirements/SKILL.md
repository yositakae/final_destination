---
name: exam-requirements
description: Extract testable dashboard and data requirements from an exam paper.
---
# When to use
Use immediately after receiving the complete paper.
# Workflow
1. Read every section. 2. List KPIs, charts, tables, filters, sources, provider rules, ports, and deliverables. 3. Assign IDs. 4. Record ambiguity without guessing. 5. Fill `REQUIREMENTS_MATRIX.md`.
# Technical rules
Every output needs fields, grain, formula, aggregation, SQL, API, UI, expected result, and verification. Separate mandatory from optional.
# Example
“Sales by month” becomes `REQ-03`, `SUM(total_amount)` grouped by calendar month, filtered by date range.
# Validation checklist
All visible marks map to IDs; formulas and filter scope are explicit; provider/deployment constraints are captured.
# Common mistakes
Skipping footnotes, inventing values, confusing row count with distinct entities, or coding before defining grain.
