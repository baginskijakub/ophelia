import { tryCatch } from "@ophelia/utils"
import { db } from "../../database"
import { applicationsTable, contentBlocksTable, listingsTable } from "../../schema"
import { and, eq } from "drizzle-orm"
import { ResultPromise } from "@ophelia/types"

type ContentBlocksDto = typeof contentBlocksTable.$inferSelect;
type ListingDto = typeof listingsTable.$inferSelect & {
  contentBlocks: ContentBlocksDto[];
}
type ApplicationAggregate = typeof applicationsTable.$inferSelect & {
  listing: ListingDto
};

export const getAggregate = async (listingId: number, email: string): ResultPromise<ApplicationAggregate> => {
  const { data, error } = await tryCatch(
    db.query.applicationsTable.findFirst({
      where: and(
        eq(applicationsTable.email, email),
        eq(applicationsTable.listingId, listingId),
      ),
      with: {
        listing: {
          with: {
            contentBlocks: {
              orderBy: contentBlocksTable.order,
            },
          },
        },
      },
    }),
  )

  if (error || !data) {
    return {
      data: null,
      error: 'server-error'
    }
  }

  return {
    data,
    error: null
  }
}
