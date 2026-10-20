# University Server Deployment

Confirm current instructor instructions first. From the project parent:

```bash
zip -r dw-exam.zip dw-exam -x 'dw-exam/node_modules/*' 'dw-exam/.next/*' 'dw-exam/.env'
scp dw-exam.zip gX@158.108.207.232:~
ssh gX@158.108.207.232
unzip -o dw-exam.zip
cd dw-exam
cp .env.example .env
chmod 600 .env
```

Edit `.env` with the assigned port and exactly one provider. For local MySQL: set the URL host to `mysql`, then run `docker compose --profile local-mysql up --build -d`. For instructor MySQL use `university-mysql`; for Neon use `neon`. Before starting the app, deploy only the matching migration from a trusted one-off environment. Inspect with `docker compose ps`, `docker compose logs app --tail=100`, `curl -f http://127.0.0.1:$HOST_PORT/api/health`, then verify the public assigned URL. Never run `down -v`, reset a database, or touch unrelated containers.
