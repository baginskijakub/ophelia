import { db } from "../../database";
import { sql } from "drizzle-orm";
import { ResultPromise } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { organizationsTable } from "../../schema";
import { isUniqueConstraintError } from "../../utils";

interface CreateOrganizationParams {
  name: string;
  workosId?: string;
  logo?: string;
  hue?: number;
  rounding?: boolean;
}

export const create = async (
  params: CreateOrganizationParams,
): ResultPromise<boolean> => {

  let error = null;
  // If workosId is provided, use upsert to avoid duplicate organizations
  // If not then it means someone is creating a new org with the same name so we should error out
  if (params.workosId) {
    const { error: dbError } = await tryCatch(
      db
        .insert(organizationsTable)
        .values({
          name: params.name,
          workosId: params.workosId,
          logo: params.logo || "https://via.placeholder.com/64x64?text=",
          hue: params.hue || Math.floor(Math.random() * 360),
        })
        .onConflictDoUpdate({
          target: organizationsTable.name,
          set: {
            workosId: sql.raw(`EXCLUDED.${organizationsTable.workosId.name}`),
          },
        }),
    );
    error = dbError;
  } else {
    const { error: dbError } = await tryCatch(
      db.insert(organizationsTable).values({
        name: params.name,
        logo: params.logo || "https://via.placeholder.com/64x64?text=",
        hue: params.hue || Math.floor(Math.random() * 360),
      }),
    );
    error = dbError;
  }

  if (error) {
    if (isUniqueConstraintError(error.cause)) {
      return {
        data: null,
        error: "unique-constraint",
      };
    }

    return { data: null, error: "server-error" };
  }

  return { data: true, error: null };
};
