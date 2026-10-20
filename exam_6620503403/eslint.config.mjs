import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  { files: ["scripts/**/*.ts", "prisma/**/*.ts"], rules: { "@typescript-eslint/no-explicit-any": "off" } },
  globalIgnores([".next/**", "src/generated/**", "node_modules/**"]),
]);
