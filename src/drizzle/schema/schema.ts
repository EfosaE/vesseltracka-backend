import { integer, uuid, pgTable, varchar, boolean } from "drizzle-orm/pg-core";
import { timestamps } from "./column.helpers";

export const usersTable = pgTable("users", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar({ length: 255 }).notNull(),
  phoneNumber: varchar("phone_number", { length: 20 }).notNull().unique(),
  ...timestamps,
});

export const firstTimersTable = pgTable("first_timers", {
  id: uuid().primaryKey().defaultRandom(),
  fullName: varchar("full_name", { length: 255 }).notNull(),
  address: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).unique(),
  occupation: varchar({ length: 255 }),
  isStudent: boolean().notNull().default(false),
  phoneNumber: varchar("phone_number", { length: 20 }).notNull().unique(),
  ...timestamps,
});

export const studentsTable = pgTable("students", {
  id: uuid().primaryKey().defaultRandom(),
  firstTimerId: uuid("first_timer_id")
    .references(() => firstTimersTable.id)
    .unique(),
  dept: varchar({ length: 255 }).notNull(),
  level: integer().notNull(),
  school: varchar({ length: 255 }).notNull(),
  ...timestamps,
});


