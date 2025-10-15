import { firstTimersTable } from "../drizzle/schema/schema";

export type NewFirstTimer = typeof firstTimersTable.$inferInsert;