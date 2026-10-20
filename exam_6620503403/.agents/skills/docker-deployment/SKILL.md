---
name: docker-deployment
description: Build and deploy an isolated provider-aware application on the university server.
---
# When to use
Use after local production checks pass.
# Workflow
1. Confirm server rules/account/port. 2. package without secrets/cache. 3. SCP/SSH. 4. create secure env. 5. select one Compose profile. 6. build/start. 7. inspect ps/logs/health. 8. verify public URL and data.
# Technical rules
Use unique project name/port; never stop unrelated containers; phpMyAdmin remains localhost-only; migration is deliberate and provider-matched.
# Example
`docker compose --profile neon up --build -d` starts only the app against Neon.
# Validation checklist
Container healthy; correct client built; `/api/health` and dashboard work; restart preserves data.
# Common mistakes
Uploading `.env`, using a taken port, starting multiple profiles, destructive cleanup, or claiming deployment without URL verification.
