import { applicationsTable } from "./schema";
import { InferResultType } from "./utils";

export type ListingDTO = InferResultType<
  "listingsTable",
  { organization: true }
>;
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
