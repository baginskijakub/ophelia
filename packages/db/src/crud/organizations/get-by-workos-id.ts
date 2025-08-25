import { db } from "../../database";
import { ResultPromise } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { organizationsTable } from "../../schema";
import { eq } from "drizzle-orm";
import { OrganizationDto } from "./types";

export const getByWorkosId = async (
  workosOrgId: string,
): ResultPromise<OrganizationDto> => {
  const { data, error } = await tryCatch(
    db
      .select({
        name: organizationsTable.name,
        logo: organizationsTable.logo,
        hue: organizationsTable.hue,
        rounding: organizationsTable.rounding,
      })
      .from(organizationsTable)
      .where(eq(organizationsTable.workosId, workosOrgId)),
  );

  if (error || !data || !data[0]) {
    return { data: null, error: "not-found" };
  }

  return {
    data: data[0],
    error: null,
  };
};
