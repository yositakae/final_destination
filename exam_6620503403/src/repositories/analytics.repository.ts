import type { DashboardData, DashboardFilters } from "@/lib/domain";
export interface AnalyticsRepository { getDashboard(filters: DashboardFilters): Promise<DashboardData>; health(): Promise<boolean>; }
