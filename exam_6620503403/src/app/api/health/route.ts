import { NextResponse } from "next/server";
import { getAnalyticsRepository } from "@/repositories";

export async function GET() {
  if (process.env.APP_MODE !== "exam") return NextResponse.json({ ok: true, database: "demo", provider: process.env.DB_PROVIDER ?? "mysql" });
  try { return NextResponse.json({ ok: await (await getAnalyticsRepository()).health(), provider: process.env.DB_PROVIDER }); }
  catch (error) { return NextResponse.json({ ok: false, error: error instanceof Error ? error.message : "Unknown" }, { status: 503 }); }
}
