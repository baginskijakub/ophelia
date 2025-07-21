import { db } from "../../database";
import { ResultPromise } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { organizationsTable, organizationMembershipsTable } from "../../schema";
import { eq } from "drizzle-orm";
import { OrganizationDto } from "./types";

export const getByUserId = async (
  userId: string,
): ResultPromise<OrganizationDto[]> => {
  const { data, error } = await tryCatch(
    db
      .select({
        id: organizationsTable.id,
        name: organizationsTable.name,
        logo: organizationsTable.logo,
        hue: organizationsTable.hue,
        rounding: organizationsTable.rounding,
      })
      .from(organizationsTable)
      .innerJoin(
        organizationMembershipsTable,
        eq(
          organizationMembershipsTable.organizationId,
          organizationsTable.id,
        ),
      )
      .where(eq(organizationMembershipsTable.userId, userId)),
  );

  if (error || !data) {
    return { data: null, error: "not-found" };
  }

  return {
    data: data,
    error: null,
  };
};
