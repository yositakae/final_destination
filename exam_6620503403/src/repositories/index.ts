import type { AnalyticsRepository } from "./analytics.repository";

export async function getAnalyticsRepository(): Promise<AnalyticsRepository> {
  if (process.env.DB_PROVIDER === "postgres") return new (await import("./postgres-analytics.repository")).PostgresAnalyticsRepository();
  return new (await import("./mysql-analytics.repository")).MysqlAnalyticsRepository();
}
