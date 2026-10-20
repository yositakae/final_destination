import { z } from "zod";
const provider=z.enum(["mysql","postgres"]).parse(process.argv[2]);
const url=z.string().url().parse(process.env.DATABASE_URL);
const protocol=new URL(url).protocol;
if(provider==="mysql"&&protocol!=="mysql:") throw new Error("Refusing: MySQL command requires mysql:// DATABASE_URL");
if(provider==="postgres"&&!['postgres:','postgresql:'].includes(protocol)) throw new Error("Refusing: PostgreSQL command requires postgres:// or postgresql:// DATABASE_URL");
console.log(`Verified ${provider} target: ${new URL(url).hostname}/${new URL(url).pathname.slice(1)}`);
