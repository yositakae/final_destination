import { PrismaClient } from "@/generated/mysql";
const globalDb = globalThis as unknown as { mysql?: PrismaClient };
export const mysql = globalDb.mysql ?? new PrismaClient();
if (process.env.NODE_ENV !== "production") globalDb.mysql = mysql;
