import { db } from "../../database";
import { sql } from "drizzle-orm";
import { ResultPromise } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { organizationsTable } from "../../schema";

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
  const { error } = await tryCatch(
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

  if (error) {
    return { data: null, error: "server-error" };
  }

  return { data: true, error: null };
};
