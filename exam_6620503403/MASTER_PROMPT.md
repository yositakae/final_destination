# MASTER PROMPT FINAL V6
# UNIVERSAL DATA WAREHOUSE PRACTICAL EXAM STARTER KIT

## ROLE

You are a Senior Full-Stack TypeScript Engineer, Data Warehouse Architect, Database Designer, SQL Expert, Data Engineer, UI/UX Designer, DevOps Engineer, and AI Agent Skills Architect.

Build a COMPLETE, WORKING, REUSABLE Data Warehouse Practical Exam Starter Kit.

Your responsibility is to implement actual working code, not just documentation, plans, or UI mockups.

Prioritize correctness, flexibility, maintainability, deployment reliability, and fast adaptation to examination requirements.

All application code must use TypeScript.

SQL is allowed for database definitions, migrations, and analytical queries.

Do not use Python.

---

# 1. EXAM CONTEXT

The university practical examination has these conditions:

- Duration: approximately 150 minutes.
- The instructor provides a one-page examination paper.
- The paper may contain business requirements, dashboard sketches, tables, KPIs, charts, filters, and calculations.
- Students must interpret the requirements.
- Students must design the database themselves.
- Students must create and populate the database.
- Students must develop the web dashboard.
- Students must deploy the website.
- The university provides a Linux server accessed through SSH and SCP.
- Docker Compose is used for deployment.
- The actual business topic and database provider are unknown.

The instructor may:
1. Provide a MySQL database.
2. Allow students to run their own MySQL database.
3. Allow external cloud databases such as Neon PostgreSQL.

Do not assume that all three are permitted.

The project must prepare for all three technically while allowing the student to select only the permitted option.

The starter must be reusable for education, sales, inventory, IoT, healthcare, logistics, and other analytical scenarios.

Follow all examination rules regarding prepared code and AI usage.

---

# 2. REQUIRED TECHNOLOGY STACK

Frontend:
- Next.js App Router
- React
- TypeScript with strict mode
- Tailwind CSS
- shadcn/ui
- Lucide React

Charts:
- Recharts ONLY

Backend:
- Next.js Route Handlers
- TypeScript
- Zod
- Service layer
- Repository pattern

Databases:
- MySQL 8
- PostgreSQL via Neon

ORM:
- Prisma
- Prisma Client
- Prisma Migrate

Database Management:
- phpMyAdmin for MySQL
- Neon Console for PostgreSQL

ETL:
- Node.js
- TypeScript
- csv-parse
- Zod

Tools:
- pnpm
- ESLint
- Vitest
- Docker
- Docker Compose
- Git

Use stable, mutually compatible dependency versions and current official configuration conventions.

---

# 3. MAIN EXAM WORKFLOW

Build the project to support:

EXAM PAPER
→ REQUIREMENTS ANALYSIS
→ DASHBOARD SPECIFICATION
→ DATABASE DESIGN
→ DATABASE PROVIDER SELECTION
→ PRISMA SCHEMA
→ MIGRATION
→ SEED / ETL
→ SQL ANALYTICS
→ API
→ RECHARTS DASHBOARD
→ TESTING
→ DOCKER BUILD
→ UNIVERSITY SERVER DEPLOYMENT
→ FINAL VERIFICATION

The database must be designed from the dashboard requirements.

Do not force every exam topic into the demo Sales Schema.

---

# 4. DATABASE PROVIDER STRATEGY

This project must support two database engines.

## Provider A: MySQL

Used when:
- The instructor provides MySQL.
- The instructor permits a student-owned MySQL container.
- Local development uses MySQL and phpMyAdmin.

## Provider B: PostgreSQL / Neon

Used when:
- External cloud databases are permitted.
- The university server can connect to Neon.
- The student chooses PostgreSQL for the project.

Requirements:

1. The frontend and reusable UI must work with either provider.
2. The service layer must expose provider-independent data types.
3. Use separate Prisma schemas for MySQL and PostgreSQL.
4. Use separate generated Prisma Clients, correctly configured for their respective providers.
5. Use separate migration histories.
6. Use separate provider-specific raw SQL where needed.
7. Provide one shared repository interface.
8. Implement MySQL and PostgreSQL repository adapters.
9. Do not assume that changing DATABASE_URL alone switches database engines.
10. Select the provider before applying migrations.
11. Prevent applying MySQL migrations to PostgreSQL or vice versa.
12. Allow provider selection through documented environment variables and build scripts.
13. Verify that both providers produce equivalent analytical results for the same demo dataset.

Suggested structure:

- `prisma/mysql/schema.prisma`
- `prisma/mysql/migrations/`
- `prisma/postgres/schema.prisma`
- `prisma/postgres/migrations/`
- `src/lib/db/mysql/`
- `src/lib/db/postgres/`
- `src/repositories/`

Use actual supported Prisma CLI options and generated client configurations for the installed Prisma version.

If provider-specific clients require separate build artifacts, configure the project accordingly.

Do not fake dual-provider support with untested configuration files.

---

# 5. DATABASE DESIGN FROM EXAM REQUIREMENTS

When the actual exam paper is provided:

1. Read the entire paper or uploaded image.
2. Extract all dashboards, KPIs, charts, tables, and filters.
3. Identify business processes.
4. Identify entities.
5. Identify measures.
6. Identify dimensions.
7. Determine the grain of every fact table.
8. Identify relationships and cardinality.
9. Define primary keys and foreign keys.
10. Determine unique constraints.
11. Select appropriate data types.
12. Determine whether multiple fact tables are needed.
13. Design Star Schema or another justified schema.
14. Identify necessary indexes.
15. Identify missing source data.
16. Establish formulas for every KPI.
17. Identify valid aggregation rules.
18. Prevent double counting.
19. Map requirements to SQL queries.
20. Verify that the proposed schema can answer every dashboard question.

Do not invent unreadable requirements from handwritten exam images.

Record important assumptions and uncertainties.

Use normalized operational tables when the exam requires data entry or transactional CRUD functionality.

Do not add unnecessary tables.

---

# 6. REQUIREMENTS TRACEABILITY MATRIX

Create:

`REQUIREMENTS_MATRIX.md`

Every dashboard requirement must include:

- Requirement ID
- Description
- Source fields
- Required tables
- Measures
- Dimensions
- Formula
- Filters
- SQL query
- API endpoint
- Recharts component or DataTable
- Expected result
- Verification method
- Completion status

Every KPI, chart, and table must be traceable to a database calculation.

---

# 7. DEMO DATABASE

Create a functional Sales Analytics Data Warehouse for demonstration only.

Fact table:

`fact_sales`
- sales_key
- order_id
- order_item_id
- date_key
- product_key
- customer_key
- store_key
- quantity
- unit_price
- discount_amount
- total_amount

Grain:
One row per order item.

Dimensions:

`dim_date`
- date_key
- full_date
- day
- month
- quarter
- year

`dim_product`
- product_key
- product_id
- product_name
- category
- brand

`dim_customer`
- customer_key
- customer_id
- customer_name
- province
- region

`dim_store`
- store_key
- store_id
- store_name
- province

Implement this demo in both database providers.

Create equivalent deterministic seed datasets.

Ensure KPI and analytical SQL results agree between MySQL and PostgreSQL.

The example database must be replaceable for the actual exam.

---

# 8. PRISMA MIGRATIONS

Implement provider-specific Prisma Migrate workflows.

Required package scripts:

- `db:generate:mysql`
- `db:generate:postgres`
- `db:migrate:mysql`
- `db:migrate:postgres`
- `db:deploy:mysql`
- `db:deploy:postgres`
- `db:seed:mysql`
- `db:seed:postgres`
- `db:verify:mysql`
- `db:verify:postgres`

Use the correct configuration for the installed Prisma version.

Requirements:

1. Generate migrations from the proper schema.
2. Review SQL before applying.
3. Keep migrations separate by provider.
4. Verify database identity before migration.
5. Never run database resets automatically.
6. Never modify unrelated instructor databases.
7. Never run both provider migrations against the same target.
8. Generate the correct Prisma Client.
9. Verify schema consistency.
10. Preserve migration history.

Ensure Prisma Client generation and deployment work correctly inside Docker.

---

# 9. DATA IMPORT, SEED AND SQL DUMP

Support three separate mechanisms.

## A. Prisma Migration

Creates database tables and relationships.

## B. TypeScript Seed / ETL

Inserts initial data or imports real datasets.

## C. SQL Dump

Exports and restores schema and records.

Create:

- `prisma/mysql/seed.ts`
- `prisma/postgres/seed.ts`
- `database/mysql/`
- `database/postgres/`
- `scripts/export-db.ts`
- `scripts/import-db.ts`

Implement working export and import procedures.

Use appropriate tools:

MySQL:
- mysqldump
- mysql client

PostgreSQL:
- pg_dump
- pg_restore or psql, depending on dump format

Do not assume a MySQL dump is compatible with PostgreSQL.

Requirements:

1. Support backing up each provider independently.
2. Support restoring to the same compatible engine.
3. Support storing an exam SQL dump in the project.
4. Never commit real credentials.
5. Do not automatically overwrite existing databases.
6. Require explicit confirmation for destructive restores.
7. Verify row counts after restore.
8. Prevent duplicate initialization.
9. Explain the difference between migrations, seeds, ETL, and dumps.
10. Do not execute schema-creating dumps and migrations redundantly.

For local MySQL Docker initialization, optionally support:

`/docker-entrypoint-initdb.d/`

Explain that these scripts run only when the database data directory is initialized for the first time.

Do not automatically import dumps into shared instructor databases.

---

# 10. TYPESCRIPT ETL ENGINE

Implement:

Extract:
- CSV
- JSON
- Synthetic demo data

Transform:
- Column mapping
- Data type conversion
- Date parsing
- NULL handling
- Duplicate detection
- Validation
- Derived metrics
- Dimension key resolution

Load:
- Insert dimensions
- Insert facts
- Use transactions
- Preserve referential integrity
- Prevent duplicate imports
- Batch records
- Support retry where safe

Monitoring:
- Total records
- Successful records
- Rejected records
- Duplicate records
- Execution duration
- Error reports

All ETL code must use TypeScript.

No Python or Pandas.

---

# 11. SQL ANALYTICS

Prepare reusable SQL templates for:

- SELECT
- JOIN
- GROUP BY
- HAVING
- CASE WHEN
- CTE
- Subqueries
- Window Functions
- ROW_NUMBER
- RANK
- DENSE_RANK
- LAG
- Running totals
- Top-N
- Monthly aggregation
- Growth rate
- Percentages
- Weighted averages

Provide MySQL and PostgreSQL variants where syntax differs.

Use parameterized queries.

Validate analytical results against known test data.

Document metric formulas.

Never silently return incorrect aggregations.

---

# 12. RECHARTS DASHBOARD

Use Recharts as the only chart library.

Create reusable components for:

- BarChart
- HorizontalBarChart
- LineChart
- AreaChart
- PieChart
- ComposedChart
- ScatterChart

Support:

- Responsive layouts
- Tooltips
- Legends
- Axes
- Cartesian grids
- Custom labels
- Number formatting
- Date formatting
- Typed data
- Loading states
- Empty states
- Error states

Use shadcn/ui where appropriate.

Build reusable KPI Cards, Tables, Filters, and Chart Containers.

Never hardcode Exam Mode chart values.

---

# 13. DYNAMIC DASHBOARD FILTERS

Create reusable filters for:

- Date range
- Year
- Month
- Academic year
- Department
- Category
- Product
- Region
- Custom select

The actual exam determines which filters are used.

Filters must update relevant KPIs, charts, and tables consistently.

All filter values must be validated server-side.

---

# 14. APPLICATION PAGES

Create:

`/dashboard`
- KPI cards
- Recharts visualizations
- Filters
- Summary tables

`/database-design`
- Schema overview
- Fact/Dimension tables
- Relationships
- Key definitions

`/data-import`
- CSV import
- Preview
- Validation
- Import results

`/analytics`
- SQL reports
- Aggregations
- Rankings

`/data-quality`
- Missing value checks
- Duplicates
- Row counts
- Referential integrity

`/settings`
- Database provider
- Connection status
- Application mode
- Health check

Use reusable layouts and components.

Disable irrelevant demo pages during the real exam.

---

# 15. DEMO MODE AND EXAM MODE

Demo Mode:
- Uses synthetic example Sales Analytics data.
- Clearly labels demonstration records.
- Provides working database queries.
- Supports local development.

Exam Mode:
- Uses the actual exam requirements.
- Uses the database schema designed for the exam.
- Uses real or explicitly permitted generated data.
- Uses actual SQL queries.
- Does not silently fall back to mock data.
- Contains only relevant dashboard pages.

Never mix Demo and Exam datasets without explicit separation.

---

# 16. DOCKER COMPOSE DEPLOYMENT MODES

Create deployment configurations for three scenarios.

## Mode A: Local MySQL

Run:
- Next.js
- MySQL
- phpMyAdmin

MySQL data must use a persistent volume.

## Mode B: University MySQL

Run:
- Next.js only

Connect to the instructor-provided MySQL database.

Do not create another MySQL container.

## Mode C: Neon PostgreSQL

Run:
- Next.js only

Connect to Neon through environment variables.

Do not create a PostgreSQL container unless explicitly requested for local development.

Use Compose profiles or separate Compose configurations that are easy to select.

The application must not accidentally start multiple database engines.

Use only the assigned port and project directory.

---

# 17. UNIVERSITY SERVER DEPLOYMENT

Expected deployment procedure:

1. ZIP project.
2. Upload through SCP.
3. SSH into university server.
4. Unzip.
5. Enter project folder.
6. Run Docker Compose.
7. Verify website.

Example:

```bash
scp project.zip gX@158.108.207.232:~
ssh gX@158.108.207.232
unzip -o project.zip
cd project
docker-compose up --build -d
```

The account gX is a placeholder.

Confirm all current server instructions before deploying.

Required files:

- Dockerfile
- docker-compose.yml
- docker-compose.dev.yml or deployment overrides
- .dockerignore
- .env.example
- DEPLOY_SERVER.md
- DEPLOY_CHECKLIST.md

Requirements:

1. Multi-stage Docker build.
2. Correct Next.js production configuration.
3. Correct Prisma Client generation for the selected provider.
4. Provider-aware Docker build where necessary.
5. pnpm lockfile.
6. Configurable host port.
7. Unique Docker Compose project name.
8. Secure environment variables.
9. Application health check.
10. Database connectivity check.
11. Safe migration instructions.
12. Container logging.
13. Production URL verification.

Do not automatically reset databases.

Do not expose phpMyAdmin publicly without permission.

Do not stop or remove unrelated student containers.

---

# 18. AI AGENT SKILLS

Create COMPLETE skills under:

`.agents/skills/`

Required skills:

1. exam-requirements
2. image-requirements-analysis
3. exam-adaptation
4. requirement-to-schema
5. database-design
6. dimensional-modeling
7. database-provider-selection
8. mysql-phpmyadmin
9. neon-postgresql
10. prisma-migrations
11. typescript-etl
12. sql-analytics
13. recharts-dashboard
14. dashboard-validation
15. database-backup-restore
16. docker-deployment
17. data-quality
18. debugging

Each skill must contain:

- SKILL.md
- YAML frontmatter
- Name and description
- When to use
- Step-by-step workflow
- Technical rules
- Examples
- Validation checklist
- Common mistakes

No placeholders.

Create AGENTS.md that explains when the AI should read and follow each skill.

Create SKILLS.md as an index.

---

# 19. REQUIRED DOCUMENTATION

Create:

- PLAN.md
- AGENTS.md
- SKILLS.md
- EXAM_PLAN.md
- EXAM_GUIDE.md
- REQUIREMENTS_MATRIX.md
- DATABASE_DESIGN.md
- DATABASE_SELECTION.md
- DATABASE_TRANSFER.md
- DEPLOY_SERVER.md
- DEPLOY_CHECKLIST.md
- README.md

PLAN.md:
Implementation phases, priorities, checkboxes, and verified progress.

EXAM_PLAN.md:
Specific tasks derived from the actual exam question.

DATABASE_SELECTION.md:
Explain how to choose MySQL, university MySQL, or Neon.

DATABASE_TRANSFER.md:
Explain migrations, seed, ETL, SQL export, restore, and verification.

DATABASE_DESIGN.md:
ER Diagram, Star Schema, grain, keys, relationships, measures, dimensions, and SQL mappings.

Use Mermaid diagrams.

DEPLOY_SERVER.md:
Include exact commands for ZIP, SCP, SSH, Docker Compose, provider setup, migration, testing, and troubleshooting.

---

# 20. TESTING REQUIREMENTS

Implement and run:

- TypeScript type checking
- ESLint
- Vitest
- Production build
- Database connection tests
- Prisma schema validation
- Migration verification
- Seed tests
- ETL tests
- SQL analytical tests
- KPI calculation tests
- Filter tests
- API response tests
- Docker build tests where available

Test both database providers with the same expected analytical results.

Report any tests that cannot be executed.

Do not claim tests pass without actually running them.

---

# 21. EXAM EXECUTION PLAN — 150 MINUTES

0–15 minutes:
- Read exam paper.
- Extract KPIs, charts, tables, and filters.
- Determine permitted database provider.

15–35 minutes:
- Design database.
- Define fact grain.
- Create correct provider-specific Prisma Schema.
- Generate and review Migration.

35–55 minutes:
- Apply Migration.
- Seed or import data.
- Verify SQL results.

55–105 minutes:
- Implement required Recharts Dashboard.
- Connect APIs.
- Implement filters and tables.

105–125 minutes:
- Test calculations.
- Run TypeScript checks and production build.

125–140 minutes:
- ZIP.
- SCP.
- SSH.
- Docker Compose deployment.

140–150 minutes:
- Verify production URL.
- Verify database-backed data.
- Submit work.

Adjust timing according to the real exam.

---

# 22. DEVELOPMENT PRIORITIES

P0:
- Working Next.js application
- Database connection
- Provider-specific Prisma Schema and Migration
- Seed / ETL
- SQL analytics
- Recharts Dashboard
- Production Build
- Docker Deployment

P1:
- Reusable components
- Database provider selection
- Database backup and restore
- Dynamic filters
- Data quality
- AI Skills
- Automated tests

P2:
- Advanced charts
- Extra pages
- Animations
- Optional visual effects

Complete P0 before P2.

---

# 23. PROJECT RULES

1. Use TypeScript for all application code.
2. No Python.
3. Use Recharts as the only chart engine.
4. Support both MySQL and PostgreSQL properly.
5. Keep Prisma schemas and migrations separate by provider.
6. Do not claim switching databases requires only DATABASE_URL.
7. Do not hardcode exam-specific schemas.
8. Do not fabricate production data.
9. Do not reset instructor databases.
10. Do not commit credentials.
11. Do not expose database management tools publicly by default.
12. Do not modify unrelated server resources.
13. Reuse existing application components.
14. Keep code modular.
15. Avoid unnecessary complexity.
16. Keep PLAN.md updated.
17. Follow AGENTS.md and relevant Skills.
18. Test completed features.
19. Do not claim remote deployment succeeded without verification.
20. Prioritize correct output and successful deployment over visual polish.

---

# 24. IMPLEMENTATION PHASES

Inspect the existing workspace.

If a project exists, preserve working code.

Then implement in phases.

Phase 1:
- Create PLAN.md.
- Initialize Next.js + TypeScript.
- Configure UI and dependencies.
- Create AGENTS.md and core skills.

Phase 2:
- Implement local MySQL.
- Configure phpMyAdmin.
- Configure MySQL Prisma Schema.
- Create migrations and seed.
- Build one functional dashboard with real SQL.

Phase 3:
- Implement PostgreSQL/Neon support.
- Configure separate Prisma Schema, Client, and migrations.
- Implement repository adapters.
- Verify equivalent analytics.

Phase 4:
- Implement reusable ETL.
- Add SQL templates.
- Add dashboard components and filters.
- Add data quality checks.

Phase 5:
- Implement Docker deployment configurations.
- Implement SQL dump export and restore.
- Add deployment guides.
- Add verification scripts.

Phase 6:
- Finish all 18 AI Skills.
- Complete documentation.
- Execute automated tests.
- Run production builds.
- Fix critical failures.
- Update PLAN.md.

Do not begin optional features before the working core is verified.

---

# 25. FINAL DELIVERABLES

The finished project must include:

- Next.js + TypeScript application
- Tailwind CSS + shadcn/ui
- Recharts component library
- MySQL support
- phpMyAdmin local setup
- Neon PostgreSQL support
- Prisma Schemas and Migrations for both providers
- TypeScript ETL
- Seed scripts
- SQL Analytics
- SQL Dump Export and Restore
- Database Provider Selection
- Reusable Dashboard
- Dynamic Filters
- Docker Compose configurations
- SCP/SSH Deployment Documentation
- 18 AI Agent Skills
- Automated Tests
- Complete Documentation

The application must be ready to adapt to an unknown one-page Data Warehouse examination question.

---

# 26. START IMPLEMENTATION NOW

1. Inspect the workspace.
2. Create PLAN.md.
3. Implement the working core application.
4. Implement MySQL support first.
5. Implement PostgreSQL/Neon support next.
6. Create reusable dashboards.
7. Configure Docker deployment.
8. Add database backup and restore.
9. Create the AI Agent Skills.
10. Add tests and documentation.
11. Run real verification commands.
12. Fix errors.
13. Update PLAN.md.
14. Summarize what works and what remains incomplete.

Work directly in the project.

Do not stop after creating only the plan.

Do not stop after generating UI mockups.

Do not fabricate test results.

**DELIVER A REAL, WORKING, TESTED, DUAL-DATABASE DATA WAREHOUSE EXAM STARTER KIT.**