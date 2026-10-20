export type Provider = "mysql" | "postgres";
export type DashboardFilters = { year?: number; month?: number; category?: string; region?: string };
export type Kpis = { revenue: number; orders: number; units: number; averageOrderValue: number };
export type SeriesPoint = { label: string; value: number };
export type DashboardData = { kpis: Kpis; monthly: SeriesPoint[]; categories: SeriesPoint[]; regions: SeriesPoint[]; generatedAt: string; mode: "demo" | "exam" };
