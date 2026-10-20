import { execFileSync } from "node:child_process";

async function main() {
  const provider=process.argv[2]; if(!["mysql","postgres"].includes(provider)) throw new Error("Usage: verify-db.ts mysql|postgres");
  execFileSync(process.execPath,["--import","tsx","scripts/verify-db-target.ts",provider],{stdio:"inherit"});
  const modulePath=provider==="mysql"?"../src/generated/mysql":"../src/generated/postgres";
  const {PrismaClient}=await import(modulePath); const db=new PrismaClient();
  try { const [dates,products,customers,stores,sales]=await Promise.all([db.dimDate.count(),db.dimProduct.count(),db.dimCustomer.count(),db.dimStore.count(),db.factSale.count()]); console.log({provider,dates,products,customers,stores,sales,ok:dates>0&&sales>0}); if(!dates||!sales) process.exitCode=1; } finally { await db.$disconnect(); }
}

main().catch((error)=>{ console.error(error); process.exitCode=1; });
