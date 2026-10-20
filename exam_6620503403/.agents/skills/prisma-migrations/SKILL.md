---
name: prisma-migrations
description: Create and deploy safe, separate Prisma migration histories.
---
# When to use
Use after any selected-provider schema change.
# Workflow
1. Run target guard. 2. format/validate selected schema. 3. generate selected client. 4. create migration in development. 5. inspect SQL. 6. back up material data. 7. deploy. 8. verify schema/history.
# Technical rules
Never reset automatically; never apply one provider's history to the other; keep migrations committed and immutable after deployment.
# Example
`pnpm db:deploy:mysql` verifies a `mysql:` URL before Prisma runs.
# Validation checklist
Generated client matches provider; migration SQL is reviewed; status is clean; row counts survive.
# Common mistakes
Editing applied SQL, using `db push` as production history, or regenerating only one client before a dual check.
