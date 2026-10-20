import { PrismaClient } from "@/generated/postgres";
const globalDb = globalThis as unknown as { postgres?: PrismaClient };
export const postgres = globalDb.postgres ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalDb.postgres = postgres;
