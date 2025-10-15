import "dotenv/config";
import { drizzle } from "drizzle-orm/node-postgres";

const db = drizzle(process.env.DATABASE_URL!, { logger: true });

export const testDBConnection = async () => {
  try {
    await db.execute("SELECT 1");
    // console.log(result);
    console.log("✅ Database connected successfully!");
    // return result;
  } catch (error) {
    console.error("❌ Database connection failed:", error);
    process.exit(1);
  }
};

export default db;
