---
name: database-provider-selection
description: Select one permitted database path and configure matching artifacts.
---
# When to use
Use before generation, migration, or deployment.
# Workflow
1. Confirm exam permission. 2. Test reachability. 3. Compare local MySQL, supplied MySQL, and Neon constraints. 4. Select one. 5. Set provider/URL/profile. 6. run target guard.
# Technical rules
A URL change alone is insufficient; match schema, generated client, migration history, SQL, seed, and Docker build.
# Example
Supplied MySQL selects `university-mysql` and never starts the `mysql` service.
# Validation checklist
Permission, egress, credentials, engine, host, database, and SSL are confirmed.
# Common mistakes
Running both engines, deploying the wrong client, or testing with privileged credentials.
