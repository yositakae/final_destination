import { execFileSync } from "node:child_process"; import { existsSync } from "node:fs";
const provider=process.env.DB_PROVIDER??"mysql", url=process.env.DATABASE_URL, file=process.argv[2];
if(!url||!file||!existsSync(file)) throw new Error("Usage: set DATABASE_URL and run pnpm db:import <dump-file>");
if(process.env.CONFIRM_RESTORE!=="YES_RESTORE") throw new Error("Restore is destructive. Set CONFIRM_RESTORE=YES_RESTORE after verifying the target.");
if(provider==="postgres") execFileSync("pg_restore",["--clean","--if-exists","--dbname",url,file],{stdio:"inherit"});
else { const p=new URL(url); execFileSync("mysql",["--host",p.hostname,"--port",p.port||"3306","--user",decodeURIComponent(p.username),`--password=${decodeURIComponent(p.password)}`,p.pathname.slice(1),`--execute=source ${file}`],{stdio:"inherit"}); }
