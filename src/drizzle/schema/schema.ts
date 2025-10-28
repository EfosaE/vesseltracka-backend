import {
  integer,
  uuid,
  pgTable,
  varchar,
  boolean,
  pgEnum,
} from "drizzle-orm/pg-core";
import { timestamps } from "./column.helpers";

export const genderEnum = pgEnum("gender", ["male", "female"]);
export const maritalStatusEnum = pgEnum("marital_status", [
  "single",
  "married",
  "divorced",
  "widowed",
]);

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
  isStudent: boolean("is_student").notNull().default(false),
  phoneNumber: varchar("phone_number", { length: 20 }).notNull().unique(),
  gender: genderEnum("gender").notNull(),
  maritalStatus: maritalStatusEnum("marital_status").notNull(),
  bornAgain: boolean("born_again").notNull(),
  holyGhostBaptized: boolean("holy_ghost_baptized").notNull(),
  invitedBy: varchar("invited_by", { length: 255 }),
  deptInterestedIn: uuid("dept_interested_in").references(
    () => departmentsTable.id
  ),
  wouldLikeToJoin: boolean("would_like_to_join").notNull(),
  ...timestamps,
});

export const departmentsTable = pgTable("departments", {
  id: uuid().primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  description: varchar("description", { length: 255 }),
  ...timestamps,
});

export const membersTable = pgTable("members", {
  id: uuid().primaryKey().defaultRandom(),
  userId: uuid("user_id")
    .references(() => usersTable.id)
    .unique(),
  departmentId: uuid("department_id")
    .references(() => departmentsTable.id)
    .notNull(),
  role: varchar({ length: 255 }).notNull(),
  // isAdmin: boolean("is_admin").notNull().default(false),
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
