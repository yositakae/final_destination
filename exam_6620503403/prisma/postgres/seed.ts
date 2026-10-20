import { PrismaClient } from "../../src/generated/postgres";
import { seed } from "../seed-shared";
const client=new PrismaClient(); seed(client).then(()=>console.log("PostgreSQL seed complete")).finally(()=>client.$disconnect());
