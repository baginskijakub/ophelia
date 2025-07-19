import { db } from "../../database";
import { ResultPromise } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { organizationsTable } from "../../schema";

interface CreateOrganizationParams {
  id: string;
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
        name: params.name,
        logo: params.logo || "https://via.placeholder.com/64x64?text=",
        hue: params.hue || Math.floor(Math.random() * 360),
        rounding: params.rounding ?? true,
      })
      .onConflictDoNothing(),
  );

  if (error) {
    return { data: null, error: "server-error" };
  }

  return { data: true, error: null };
};
