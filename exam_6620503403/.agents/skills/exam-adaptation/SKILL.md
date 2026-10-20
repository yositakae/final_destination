---
name: exam-adaptation
description: Adapt the starter to a real exam within the available time.
---
# When to use
Use after requirements and provider are confirmed.
# Workflow
1. Freeze P0 scope. 2. Map requirements to existing modules. 3. Replace demo schema only where needed. 4. Implement migration, data, SQL, API, UI. 5. Remove irrelevant demo pages. 6. test/build/deploy. 7. update plan.
# Technical rules
No mock fallback in exam mode; preserve reusable components; complete P0 before polish.
# Example
An education exam replaces sales facts with enrollment facts while reusing filters/cards/charts.
# Validation checklist
Every matrix row is complete; actual data drives UI; production build succeeds.
# Common mistakes
Keeping demo labels, overbuilding, mixing demo/exam data, or delaying deployment until the final minute.
