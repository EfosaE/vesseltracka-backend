import db from "../drizzle/db";
import { firstTimersTable } from "../drizzle/schema/schema";
import { NewFirstTimer } from "./types";



export async function findAll() {
    const result = await db.query.firstTimersTable.findMany();
    return result;
}

export async function create(data: NewFirstTimer) {
  const result = await db.insert(firstTimersTable).values(data).returning();
  return result;
}
