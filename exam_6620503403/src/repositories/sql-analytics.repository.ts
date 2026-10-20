import type { AnalyticsRepository } from "./analytics.repository";
import type { DashboardData, DashboardFilters } from "@/lib/domain";

type Db = { $queryRawUnsafe<T = unknown>(query: string, ...values: unknown[]): Promise<T> };
type MetricRow = { revenue: number | string | null; orders: bigint | number; units: bigint | number };

export abstract class SqlAnalyticsRepository implements AnalyticsRepository {
  protected abstract dialect: "mysql" | "postgres";
  constructor(private readonly db: Db) {}
  async health(){ const result = await this.db.$queryRawUnsafe<unknown[]>("SELECT 1"); return result.length > 0; }
  async getDashboard(filters: DashboardFilters): Promise<DashboardData> {
    const params: unknown[] = []; const clauses: string[] = [];
    const bind = (value: unknown) => { params.push(value); return this.dialect === "postgres" ? `$${params.length}` : "?"; };
    if (filters.year) clauses.push(`d.year = ${bind(filters.year)}`);
    if (filters.month) clauses.push(`d.month = ${bind(filters.month)}`);
    if (filters.category) clauses.push(`p.category = ${bind(filters.category)}`);
    if (filters.region) clauses.push(`c.region = ${bind(filters.region)}`);
    const where = clauses.length ? `WHERE ${clauses.join(" AND ")}` : "";
    const from = `FROM fact_sales f JOIN dim_date d ON d.date_key=f.date_key JOIN dim_product p ON p.product_key=f.product_key JOIN dim_customer c ON c.customer_key=f.customer_key`;
    const metrics = (await this.db.$queryRawUnsafe<MetricRow[]>(`SELECT COALESCE(SUM(f.total_amount),0) revenue, COUNT(DISTINCT f.order_id) orders, COALESCE(SUM(f.quantity),0) units ${from} ${where}`, ...params))[0];
    const grouped = async (expr: string) => (await this.db.$queryRawUnsafe<Array<{label:string;value:number|string}>>(`SELECT ${expr} label, SUM(f.total_amount) value ${from} ${where} GROUP BY ${expr} ORDER BY ${expr}`, ...params)).map((r) => ({ label: String(r.label), value: Number(r.value) }));
    const revenue = Number(metrics?.revenue ?? 0), orders = Number(metrics?.orders ?? 0);
    return { kpis: { revenue, orders, units: Number(metrics?.units ?? 0), averageOrderValue: orders ? revenue/orders : 0 }, monthly: await grouped(this.dialect === "mysql" ? "DATE_FORMAT(d.full_date,'%Y-%m')" : "TO_CHAR(d.full_date,'YYYY-MM')"), categories: await grouped("p.category"), regions: await grouped("c.region"), generatedAt: new Date().toISOString(), mode: "exam" };
  }
}
