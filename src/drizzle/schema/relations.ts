import { relations } from "drizzle-orm";
import { firstTimersTable, studentsTable } from "./schema";


// THESE RELATIONS ARE NOT NECESSARY FOR DRIZZLE TO FUNCTION, BUT THEY ARE HELPFUL FOR TYPE SAFETY AND WHEN QUERYING SO YOU DONT HAVE TO USE LEFT JOINS.
export const firstTimersRelations = relations(firstTimersTable, ({ one }) => ({
  student: one(studentsTable),
}));

export const studentsTableRelations = relations(studentsTable, ({ one }) => ({
  firstTimer: one(firstTimersTable, {
    fields: [studentsTable.firstTimerId],
    references: [firstTimersTable.id],
  }),
}));