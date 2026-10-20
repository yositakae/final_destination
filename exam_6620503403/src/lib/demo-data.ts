import type { DashboardData, DashboardFilters } from "./domain";

const base = [
  { month: 1, category: "Electronics", region: "Central", revenue: 92000, orders: 1, units: 10 },
  { month: 2, category: "Office", region: "North", revenue: 68000, orders: 1, units: 11 },
  { month: 3, category: "Home", region: "South", revenue: 111000, orders: 1, units: 12 },
  { month: 4, category: "Electronics", region: "East", revenue: 87000, orders: 1, units: 13 },
  { month: 5, category: "Office", region: "Central", revenue: 99000, orders: 1, units: 14 },
  { month: 6, category: "Home", region: "North", revenue: 125000, orders: 1, units: 15 },
];

export function getDemoDashboard(filters: DashboardFilters = {}): DashboardData {
  const rows = base.filter((r) => (!filters.month || r.month === filters.month) && (!filters.category || r.category === filters.category) && (!filters.region || r.region === filters.region));
  const total = rows.reduce((a, r) => ({ revenue: a.revenue + r.revenue, orders: a.orders + r.orders, units: a.units + r.units }), { revenue: 0, orders: 0, units: 0 });
  const group = (key: "category" | "region") => Object.entries(rows.reduce<Record<string, number>>((a, r) => ({ ...a, [r[key]]: (a[r[key]] ?? 0) + r.revenue }), {})).map(([label, value]) => ({ label, value }));
  return { kpis: { ...total, averageOrderValue: total.orders ? total.revenue / total.orders : 0 }, monthly: rows.map((r) => ({ label: `2026-${String(r.month).padStart(2, "0")}`, value: r.revenue })), categories: group("category"), regions: group("region"), generatedAt: new Date().toISOString(), mode: "demo" };
}
