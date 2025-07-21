import { organizationsTable } from "../../schema";

export type OrganizationDto = Omit<
  typeof organizationsTable.$inferSelect,
  "createdAt" | "updatedAt" | "workosId"
>;
