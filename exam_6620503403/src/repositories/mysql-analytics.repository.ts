import type { DashboardFilters } from "@/lib/domain";
import { mysql } from "@/lib/db/mysql/client";
import { SqlAnalyticsRepository } from "./sql-analytics.repository";
export class MysqlAnalyticsRepository extends SqlAnalyticsRepository { constructor(){ super(mysql); } protected dialect = "mysql" as const; }
export type { DashboardFilters };
