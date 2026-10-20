import { describe,expect,it } from "vitest";
import { getDemoDashboard } from "@/lib/demo-data";
import { filtersSchema } from "@/lib/validation";

describe("analytics",()=>{
  it("calculates deterministic KPIs",()=>{const d=getDemoDashboard(); expect(d.kpis.revenue).toBe(582000); expect(d.kpis.orders).toBe(6); expect(d.kpis.units).toBe(75); expect(d.kpis.averageOrderValue).toBe(97000);});
  it("applies one filter consistently",()=>{const d=getDemoDashboard({month:1}); expect(d.monthly).toHaveLength(1); expect(d.kpis.revenue).toBe(92000); expect(d.categories).toEqual([{label:"Electronics",value:92000}]);});
  it("rejects invalid filters",()=>{expect(filtersSchema.safeParse({month:"13"}).success).toBe(false);});
});
