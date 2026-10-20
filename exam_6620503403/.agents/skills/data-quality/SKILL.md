---
name: data-quality
description: Measure completeness, uniqueness, validity, consistency, and referential integrity.
---
# When to use
Use after seed/import and before trusting analytics.
# Workflow
1. Define checks per source/field. 2. count rows/nulls/duplicates. 3. test domains/ranges. 4. detect orphan facts. 5. reconcile measures against source. 6. report failures with examples. 7. fix source or ETL and rerun.
# Technical rules
Never mutate source during a check; thresholds must be explicit; distinguish missing, unknown, and not applicable.
# Example
Check duplicate `(order_id, order_item_id)` and negative `quantity` before KPI calculation.
# Validation checklist
Counts reconcile; required fields complete; business keys unique; no orphans; totals match control values.
# Common mistakes
Only checking nulls, deleting bad rows silently, masking errors with defaults, or treating warnings as passes.
