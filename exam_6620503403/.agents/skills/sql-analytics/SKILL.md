---
name: sql-analytics
description: Implement correct parameterized analytical queries for both engines.
---
# When to use
Use for KPI, chart, table, ranking, trend, or quality queries.
# Workflow
1. Restate grain/formula. 2. build joins. 3. apply validated filters. 4. aggregate. 5. add CTE/window logic. 6. write provider variant. 7. compare with hand-calculated data. 8. test edge cases.
# Technical rules
Parameterize values; protect division with `NULLIF`; cast decimal/bigint for API serialization; never hide fanout with `DISTINCT`.
# Example
Growth is `(current-previous)/NULLIF(previous,0)` with `LAG` ordered by complete period key.
# Validation checklist
Empty, zero, null, tie, and filter cases pass; MySQL/PostgreSQL results agree.
# Common mistakes
Filtering after aggregation incorrectly, unstable Top-N ordering, integer division, or grouping by display label only.
