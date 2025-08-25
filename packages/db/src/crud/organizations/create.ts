import { db } from "../../database";
import { sql } from "drizzle-orm";
import { ResultPromise } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { organizationsTable } from "../../schema";

interface CreateOrganizationParams {
  id: string;
  workosId?: string;
  name: string;
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
        id: params.id,
        workosId: params.workosId,
        name: params.name,
        logo: params.logo || "https://via.placeholder.com/64x64?text=",
        hue: params.hue || Math.floor(Math.random() * 360),
      })
      .onConflictDoUpdate({
        target: organizationsTable.id,
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
