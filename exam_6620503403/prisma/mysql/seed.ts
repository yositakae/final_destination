import { PrismaClient } from "../../src/generated/mysql";
import { seed } from "../seed-shared";
const client=new PrismaClient(); seed(client).then(()=>console.log("MySQL seed complete")).finally(()=>client.$disconnect());
