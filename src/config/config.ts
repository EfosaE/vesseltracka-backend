import dotenv from "dotenv";
import { z } from "zod";

dotenv.config();

const envSchema = z.object({
  PORT: z.coerce.number().default(4000),
  NODE_ENV: z.enum(["development", "test", "production"]),
  DATABASE_URL: z.url(),
  LOG_LEVEL: z.enum(["debug", "info", "error", "warn"]),
});

const parsed = envSchema.safeParse(process.env);

if (!parsed.success) {
  console.error("❌ Invalid environment variables:", parsed.error.format());
  process.exit(1);
}

const config = {
  port: parsed.data.PORT,
  nodeEnv: parsed.data.NODE_ENV,
  dbUrl: parsed.data.DATABASE_URL,
};

export default config;
