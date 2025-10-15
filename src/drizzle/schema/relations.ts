import { relations } from "drizzle-orm";
import { departmentsTable, firstTimersTable, studentsTable } from "./schema";

// THESE RELATIONS ARE NOT NECESSARY FOR DRIZZLE TO FUNCTION, BUT THEY ARE HELPFUL FOR TYPE SAFETY AND WHEN QUERYING SO YOU DONT HAVE TO USE LEFT JOINS.
export const firstTimersRelations = relations(firstTimersTable, ({ one }) => ({
  student: one(studentsTable),
  department: one(departmentsTable, {
    fields: [firstTimersTable.deptInterestedIn],
    references: [departmentsTable.id],
  }),
}));

export const studentsTableRelations = relations(studentsTable, ({ one }) => ({
  firstTimer: one(firstTimersTable, {
    fields: [studentsTable.firstTimerId],
    references: [firstTimersTable.id],
  }),
}));

export const departmentsTableRelations = relations(
  departmentsTable,
  ({ many }) => ({
    firstTimers: many(firstTimersTable),
  })
);
