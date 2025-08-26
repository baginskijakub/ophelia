import { ResultPromise } from "@ophelia/types";
import { db } from "../../database";
import { listingsTable } from "../../schema";
import { tryCatch } from "@ophelia/utils";
import { ListingForm } from "../../types";

export const create = async (params: ListingForm): ResultPromise<number> => {
  const result = await tryCatch(
    db
      .insert(listingsTable)
      .values({
        ...params,
      })
      .returning({ id: listingsTable.id }),
  );

  if (result.error || !result.data[0]) {
    console.error("Error creating listing:", result.error);
    return { data: null, error: "server-error" };
  }

  return { data: result.data[0]?.id, error: null };
};
