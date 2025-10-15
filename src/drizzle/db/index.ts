// src/db/index.ts
import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "../schema/schema";
import * as relations from "../schema/relations";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL!,
});

const db = drizzle(pool, {
  schema: { ...schema, ...relations }, // 👈 pass schema
  logger: true,
});

export const testDBConnection = async () => {
  try {
    await db.execute("SELECT 1");
    console.log("✅ Database connected successfully!");
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
};

export default db;
