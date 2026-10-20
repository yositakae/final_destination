import type { Metadata } from "next";
import Link from "next/link";
import { BarChart3, Database, FileSearch, FileUp, Settings, ShieldCheck } from "lucide-react";
import "./globals.css";

export const metadata: Metadata = { title: "DW Exam Starter", description: "Dual-database analytics starter" };

const links = [
  ["Dashboard", "/dashboard", BarChart3], ["Database design", "/database-design", Database],
  ["Data import", "/data-import", FileUp], ["Analytics", "/analytics", FileSearch], ["Data quality", "/data-quality", ShieldCheck], ["Settings", "/settings", Settings],
] as const;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><div className="min-h-screen md:grid md:grid-cols-[240px_1fr]">
    <aside className="border-b border-[#c9bba7] bg-[#d9cdbb] p-5 md:min-h-screen md:border-b-0 md:border-r">
      <p className="text-xs font-bold uppercase tracking-[.25em] text-[#9a5c2a]">Exam console</p><h1 className="mt-2 text-xl font-extrabold text-[#40352b]">Data Warehouse</h1>
      <nav className="mt-7 grid gap-2">{links.map(([label, href, Icon]) => <Link key={href} href={href} className="flex items-center gap-3 rounded-xl px-3 py-2 text-sm text-[#625448] transition-colors hover:bg-[#fff3e2] hover:text-[#8f5225]"><Icon size={17}/>{label}</Link>)}</nav>
    </aside><main className="min-w-0 p-4 md:p-8">{children}</main>
  </div></body></html>;
}
