import { postgres } from "@/lib/db/postgres/client";
import { SqlAnalyticsRepository } from "./sql-analytics.repository";
export class PostgresAnalyticsRepository extends SqlAnalyticsRepository { constructor(){ super(postgres); } protected dialect = "postgres" as const; }
