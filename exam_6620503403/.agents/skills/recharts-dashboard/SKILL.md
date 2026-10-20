---
name: recharts-dashboard
description: Build responsive typed dashboards using Recharts only.
---
# When to use
Use for every exam visualization.
# Workflow
1. Match chart to question. 2. define typed API shape. 3. compose shared container/tooltip/formatters. 4. connect server-validated filters. 5. implement loading/empty/error states. 6. verify responsive layout and accessibility.
# Technical rules
Do not hardcode exam values; keep axes/units/legends explicit; use Recharts as the sole chart engine.
# Example
Time trends use a line/area chart; ranked categories use horizontal bars rather than pie slices.
# Validation checklist
Values match SQL; all filters update all relevant panels; labels remain readable on narrow screens.
# Common mistakes
Misleading axes, excessive pie slices, client-only filtering, missing zero state, or inconsistent number formats.
