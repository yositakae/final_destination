import { execFileSync } from "node:child_process"; import { mkdirSync } from "node:fs"; import { resolve } from "node:path";
const provider=process.env.DB_PROVIDER??"mysql", url=process.env.DATABASE_URL; if(!url) throw new Error("DATABASE_URL is required");
const parsed=new URL(url); mkdirSync("database/backups",{recursive:true}); const stamp=new Date().toISOString().replaceAll(":","-");
if(provider==="mysql"){ const out=resolve(`database/backups/mysql-${stamp}.sql`); execFileSync("mysqldump",["--host",parsed.hostname,"--port",parsed.port||"3306","--user",decodeURIComponent(parsed.username),`--password=${decodeURIComponent(parsed.password)}`,parsed.pathname.slice(1),`--result-file=${out}`],{stdio:"inherit"}); console.log(out); }
else { const out=resolve(`database/backups/postgres-${stamp}.dump`); execFileSync("pg_dump",["--format=custom","--file",out,url],{stdio:"inherit"}); console.log(out); }
