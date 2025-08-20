import { db } from "../../database";
import { Listing, ResultPromise } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { contentBlocksTable, listingsTable } from "../../schema";
import { eq, and } from "drizzle-orm";

type ContentBlocksDto = typeof contentBlocksTable.$inferSelect;
type ListingDto = typeof listingsTable.$inferSelect & {
  contentBlocks: ContentBlocksDto[];
} & {
  organization: {
    id: string;
    name: string;
    logo: string;
  };
};

export const get = async (
  id: number,
  orgId: string,
): ResultPromise<Listing> => {
  const { data, error } = await tryCatch(
    db.query.listingsTable.findFirst({
      where: and(eq(listingsTable.id, id), eq(listingsTable.orgId, orgId)),
      with: {
        contentBlocks: {
          orderBy: contentBlocksTable.order,
        },
        organization: {
          columns: {
            name: true,
            logo: true,
            id: true,
          },
        },
      },
    }),
  );

  if (error || !data) {
    return { data: null, error: "not-found" };
  }

  return {
    data: mapResponse(data),
    error: null,
  };
};

export const getAll = async (orgId: string): ResultPromise<Listing[]> => {
  const { data, error } = await tryCatch(
    db.query.listingsTable.findMany({
      where: eq(listingsTable.orgId, orgId),
      with: {
        contentBlocks: {
          orderBy: contentBlocksTable.order,
        },
        organization: {
          columns: {
            name: true,
            logo: true,
            id: true,
          },
        },
      },
    }),
  );

  if (error || !data) {
    return { data: [], error: null };
  }

  return {
    data: data.map(mapResponse),
    error: null,
  };
};

const mapResponse = (listing: ListingDto): Listing => {
  return {
    id: listing.id,
    title: listing.title,
    company: {
      id: listing.organization.id,
      name: listing.organization.name,
      image: listing.organization.logo,
    },
    description: listing.contentBlocks.map((block) => ({
      id: block.id,
      type: block.type,
      content: block.content,
      order: block.order,
    })),
    createdAt: listing.createdAt.toISOString(),
    pageViews: 0,
    applicantsCount: 0,
    badges: listing.badges.split(","),
    status: "accepting-applications",
    pipeline: {
      all: 17,
      discarded: 8,
      steps: [
        {
          order: 2,
          name: "Applied",
          count: 3,
        },
        {
          order: 3,
          name: "Interview",
          count: 0,
        },
        {
          order: 4,
          name: "Offer",
          count: 0,
        },
      ],
    },
  };
};
