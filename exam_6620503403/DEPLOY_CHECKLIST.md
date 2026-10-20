# Deployment Checklist

- [ ] Confirm assigned account, host, port, directory, provider, and AI/prepared-code rules
- [ ] Set unique `COMPOSE_PROJECT_NAME` and unused `HOST_PORT`
- [ ] Create secure `.env`; never upload real secrets in Git
- [ ] Generate correct client and validate only the selected schema
- [ ] Review and deploy only the selected migration history
- [ ] Seed/import only when permitted; verify row counts and KPIs
- [ ] Run typecheck, lint, tests, production build, and Docker build
- [ ] Upload only this project; do not stop/remove other containers
- [ ] Start one profile and inspect container logs/health
- [ ] Verify production URL, `/api/health`, filters, charts, and database-backed totals
- [ ] Keep phpMyAdmin bound to localhost unless explicit permission says otherwise
