---
name: dimensional-modeling
description: Build facts and dimensions with explicit grain and safe aggregation.
---
# When to use
Use for analytical dashboard schemas.
# Workflow
1. Write the fact grain sentence. 2. Identify additive/semi-additive/non-additive measures. 3. Create conformed dimensions. 4. choose surrogate keys. 5. decide history handling. 6. test representative joins and rollups.
# Technical rules
One fact table may not fit every process; snapshot and transaction facts differ; prevent fanout.
# Example
Sales grain is one order item; inventory-on-hand is a periodic snapshot and should not be summed across dates.
# Validation checklist
Grain is enforceable; totals reconcile; dimensions cover filters; unknown members are handled deliberately.
# Common mistakes
Mixing grains, summing ratios/balances, duplicating dimensions, or omitting the date role.
