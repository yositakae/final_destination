import type { DashboardFilters } from "@/lib/domain";
import { getDemoDashboard } from "@/lib/demo-data";
import type { AnalyticsRepository } from "@/repositories/analytics.repository";

export class AnalyticsService {
  constructor(private readonly repository?: AnalyticsRepository) {}
  async dashboard(filters: DashboardFilters) {
    if (process.env.APP_MODE !== "exam") return getDemoDashboard(filters);
    if (!this.repository) throw new Error("Database repository is required in exam mode");
    return this.repository.getDashboard(filters);
  }
}
