import { Listing } from "@ophelia/types";
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
export type ListingForm = Pick<
  Listing,
  | "title"
  | "aboutCompany"
  | "aboutRole"
  | "requirements"
  | "responsibilities"
  | "outro"
  | "employmentType"
  | "minSalary"
  | "maxSalary"
  | "salaryPeriod"
  | "currency"
> & {
  orgName: string;
};
