---
name: requirement-to-schema
description: Convert dashboard questions into a provably sufficient schema.
---
# When to use
Use before editing Prisma models.
# Workflow
1. For each requirement identify process, event grain, measures, dimensions, and filters. 2. Draft queries. 3. Check cardinalities and double-counting. 4. Add only fields/tables needed. 5. trace back to every matrix row.
# Technical rules
State aggregation behavior; use distinct counts where entity grain differs; do not store derivable metrics without cause.
# Example
“Average order value” requires order-level denominator, not average fact-row amount.
# Validation checklist
Each query is expressible; joins preserve grain; missing source data is documented.
# Common mistakes
Designing from nouns alone, many-to-many fanout, nullable keys without policy, or silent assumptions.
