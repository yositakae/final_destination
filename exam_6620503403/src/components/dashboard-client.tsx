"use client";
import { useEffect, useState } from "react";
import { DollarSign, Package, Receipt, TrendingUp } from "lucide-react";
import type { DashboardData } from "@/lib/domain";
import { RevenueBar, RevenueLine, RevenuePie } from "./charts";

const money = new Intl.NumberFormat("en-US", { style: "currency", currency: "THB", maximumFractionDigits: 0 });
export function DashboardClient() {
  const [data,setData]=useState<DashboardData>(); const [error,setError]=useState(""); const [month,setMonth]=useState("");
  useEffect(()=>{ fetch(`/api/analytics${month?`?month=${month}`:""}`).then(r=>r.ok?r.json():Promise.reject(new Error("Request failed"))).then(value=>{setError("");setData(value)}).catch(e=>setError(e.message)); },[month]);
  if(error) return <div className="panel p-6 text-red-300">{error}</div>;
  if(!data) return <div className="panel p-6">Loading analytics…</div>;
  const cards = [["Revenue",money.format(data.kpis.revenue),DollarSign],["Orders",data.kpis.orders.toLocaleString(),Receipt],["Units",data.kpis.units.toLocaleString(),Package],["Avg. order",money.format(data.kpis.averageOrderValue),TrendingUp]] as const;
  return <><header className="flex flex-wrap items-end justify-between gap-4"><div><p className="text-sm font-bold uppercase tracking-widest text-[#a65f28]">{data.mode} mode</p><h2 className="mt-1 text-3xl font-black">Sales overview</h2><p className="muted mt-2">Database-backed KPIs with consistent filters.</p></div><label className="text-sm">Month<select className="input mt-1" value={month} onChange={e=>setMonth(e.target.value)}><option value="">All months</option>{Array.from({length:12},(_,i)=><option key={i+1} value={i+1}>{i+1}</option>)}</select></label></header>
  <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{cards.map(([label,value,Icon])=><article className="panel p-5" key={label}><Icon className="text-[#c9793b]"/><p className="muted mt-4 text-sm">{label}</p><p className="mt-1 text-2xl font-black">{value}</p></article>)}</section>
  <section className="mt-6 grid gap-6 xl:grid-cols-2"><article className="panel p-5"><h3 className="font-bold">Monthly revenue</h3><RevenueLine data={data.monthly}/></article><article className="panel p-5"><h3 className="font-bold">Revenue by category</h3><RevenueBar data={data.categories}/></article><article className="panel p-5 xl:col-span-2"><h3 className="font-bold">Regional mix</h3><RevenuePie data={data.regions}/></article></section></>;
}
