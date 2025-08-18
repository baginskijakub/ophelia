import { ResultPromise } from "@ophelia/types";
import { db } from "../../database";
import { listingsTable, contentBlocksTable } from "../../schema"; // Import contentBlocksTable and ContentBlock
import { tryCatch } from "@ophelia/utils";
import { ListingForm } from "../../types";

export const create = async (params: ListingForm): ResultPromise<boolean> => {
  const result = await tryCatch(
    db.transaction(async (tx) => {
      const [newListing] = await tx
        .insert(listingsTable)
        .values({
          title: params.title,
          badges: params.badges.join(","),
          orgId: params.orgId,
        })
        .returning({ id: listingsTable.id });

      if (!newListing?.id) {
        throw new Error("Failed to create listing");
      }

      const listingId = newListing.id;

      const contentBlocksToInsert = params.description.map((block, index) => ({
        listingId: listingId,
        type: block.type,
        content: block.content,
        order: index,
      }));

      if (contentBlocksToInsert.length > 0) {
        await tx.insert(contentBlocksTable).values(contentBlocksToInsert);
      }

      return true;
    }),
  );

  if (result.error) {
    return { data: null, error: "server-error" };
  }

  return { data: true, error: null };
};
