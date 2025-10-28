import { createInsertSchema } from "drizzle-zod";
import { firstTimersTable } from "../drizzle/schema/schema";

export const firstTimerInsertSchema = createInsertSchema(firstTimersTable);

// const user = { name: 'John' };
// const parsed: { name: string, age: number } = firstTimerInsertSchema.parse(user); // Error: `age` is not defined

// const user = { name: 'Jane', age: 30 };
// const parsed: { name: string, age: number } = firstTimerInsertSchema.parse(user); // Will parse successfully
// await db.insert(users).values(parsed);
