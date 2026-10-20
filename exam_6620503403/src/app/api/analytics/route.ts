import { NextRequest, NextResponse } from "next/server";
import { filtersSchema } from "@/lib/validation";
import { getAnalyticsRepository } from "@/repositories";
import { AnalyticsService } from "@/services/analytics.service";

export async function GET(request: NextRequest) {
  const parsed = filtersSchema.safeParse(Object.fromEntries(request.nextUrl.searchParams));
  if (!parsed.success) return NextResponse.json({ error: "Invalid filters", details: parsed.error.flatten() }, { status: 400 });
  try {
    const repository = process.env.APP_MODE === "exam" ? await getAnalyticsRepository() : undefined;
    return NextResponse.json(await new AnalyticsService(repository).dashboard(parsed.data));
  } catch (error) { return NextResponse.json({ error: error instanceof Error ? error.message : "Analytics failed" }, { status: 500 }); }
}
