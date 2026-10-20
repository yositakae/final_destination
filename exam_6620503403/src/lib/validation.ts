import { z } from "zod";

export const filtersSchema = z.object({
  year: z.coerce.number().int().min(2000).max(2200).optional(),
  month: z.coerce.number().int().min(1).max(12).optional(),
  category: z.string().trim().max(80).optional(),
  region: z.string().trim().max(80).optional(),
});

export const envSchema = z.object({
  DB_PROVIDER: z.enum(["mysql", "postgres"]).default("mysql"),
  APP_MODE: z.enum(["demo", "exam"]).default("demo"),
  DATABASE_URL: z.string().min(1),
});
