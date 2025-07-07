import { listingsTable, applicationsTable } from "./schema";

export type ListingDTO = typeof listingsTable.$inferSelect;
export type ApplicationDTO = typeof applicationsTable.$inferSelect;
export type CVProcessingResult = Pick<
  typeof applicationsTable.$inferInsert,
  | "workExperience"
  | "projects"
  | "requirementsMet"
  | "requirementsNotMet"
  | "aiSummary"
  | "ocrSummary"
>;
