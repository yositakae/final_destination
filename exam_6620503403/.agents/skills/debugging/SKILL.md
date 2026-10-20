---
name: debugging
description: Diagnose application, data, Prisma, Docker, and deployment failures from evidence.
---
# When to use
Use whenever a command, query, build, container, or result fails.
# Workflow
1. Reproduce minimally. 2. capture exact error/context. 3. locate failing layer. 4. form one testable hypothesis. 5. inspect configuration/generated artifacts/logs. 6. make smallest fix. 7. rerun targeted then broader checks. 8. document cause.
# Technical rules
Do not reset data, weaken types, or suppress errors to obtain green output; preserve unrelated work.
# Example
If production cannot import Prisma, confirm the selected client was generated during the matching Docker build stage.
# Validation checklist
Root cause explains evidence; regression test exists where useful; typecheck/test/build and health are rerun.
# Common mistakes
Changing many variables, blaming cache without proof, testing only dev mode, or reporting success from a partial command.
