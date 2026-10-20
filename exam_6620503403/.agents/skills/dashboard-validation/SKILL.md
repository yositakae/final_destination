---
name: dashboard-validation
description: Verify dashboard data, interactions, states, and production behavior.
---
# When to use
Use after dashboard changes and before deployment.
# Workflow
1. Pick known records. 2. calculate expected totals independently. 3. compare SQL/API/UI. 4. test every filter combination. 5. test loading/empty/error. 6. inspect desktop/mobile. 7. verify production build.
# Technical rules
Validation follows the chain source→database→SQL→API→chart; screenshots alone do not prove correctness.
# Example
A month filter must change KPI cards, trend, categories, regions, and table consistently.
# Validation checklist
Units/rounding/timezones match; no stale panels; network and console are clean; matrix evidence is updated.
# Common mistakes
Checking only happy paths, accepting visually plausible charts, or comparing against the same buggy query.
