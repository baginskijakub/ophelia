import { db } from "../../database";
import {
  Listing,
  ListingWithApplications,
  ResultPromise,
} from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import {
  contentBlocksTable,
  listingsTable,
  applicationsTable,
  pipelineStatusesTable,
} from "../../schema";
import { eq, and } from "drizzle-orm";

type ContentBlocksDto = typeof contentBlocksTable.$inferSelect;
type ApplicationDto = typeof applicationsTable.$inferSelect & {
  pipelineStatus: typeof pipelineStatusesTable.$inferSelect | null;
};
type PipelineStatusDto = typeof pipelineStatusesTable.$inferSelect;
type ListingDto = typeof listingsTable.$inferSelect & {
  contentBlocks: ContentBlocksDto[];
  applications: ApplicationDto[];
  pipelineStatuses: PipelineStatusDto[];
} & {
  organization: {
    name: string;
    logo: string;
  };
};

export const get = async (
  id: number,
  orgName: string,
): ResultPromise<Listing> => {
  const { data, error } = await tryCatch(
    db.query.listingsTable.findFirst({
      where: and(eq(listingsTable.id, id), eq(listingsTable.orgName, orgName)),
      with: {
        contentBlocks: {
          orderBy: contentBlocksTable.order,
        },
        organization: {
          columns: {
            name: true,
            logo: true,
          },
        },
        applications: {
          with: {
            pipelineStatus: true,
          },
        },
        pipelineStatuses: {
          orderBy: pipelineStatusesTable.order,
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

export const getAll = async (orgName: string): ResultPromise<Listing[]> => {
  const { data, error } = await tryCatch(
    db.query.listingsTable.findMany({
      where: eq(listingsTable.orgName, orgName),
      with: {
        contentBlocks: {
          orderBy: contentBlocksTable.order,
        },
        organization: {
          columns: {
            name: true,
            logo: true,
          },
        },
        applications: {
          with: {
            pipelineStatus: true,
          },
        },
        pipelineStatuses: {
          orderBy: pipelineStatusesTable.order,
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

export const getWithApplications = async (
  id: number,
  orgName: string,
): ResultPromise<ListingWithApplications> => {
  const { data, error } = await tryCatch(
    db.query.listingsTable.findFirst({
      where: and(eq(listingsTable.id, id), eq(listingsTable.orgName, orgName)),
      with: {
        contentBlocks: {
          orderBy: contentBlocksTable.order,
        },
        organization: {
          columns: {
            name: true,
            logo: true,
          },
        },
        applications: {
          where: eq(applicationsTable.isDiscarded, false),
          with: {
            pipelineStatus: true,
          },
        },
        pipelineStatuses: {
          orderBy: pipelineStatusesTable.order,
        },
      },
    }),
  );

  if (error || !data) {
    return { data: null, error: "not-found" };
  }

  return {
    data: mapResponseWithApplications(data),
    error: null,
  };
};

const mapResponse = (listing: ListingDto): Listing => {
  const applications = listing.applications;
  const pipelineStatuses = listing.pipelineStatuses;

  // Calculate pipeline metrics
  const totalApplications = applications.length;
  const statusCounts = new Map<number, number>();

  let discardedCount = 0;

  for (const app of applications) {
    if (app.isDiscarded) {
      discardedCount++;
    } else {
      if (app.pipelineStatusId) {
        statusCounts.set(
          app.pipelineStatusId,
          (statusCounts.get(app.pipelineStatusId) || 0) + 1,
        );
      }
    }
  }

  const pipelineSteps = pipelineStatuses.map((status) => ({
    order: status.order,
    name: status.name,
    count: statusCounts.get(status.id) || 0,
  }));

  return {
    id: listing.id,
    title: listing.title,
    company: {
      id: listing.organization.name,
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
    pageViews: listing.pageViews,
    applicantsCount: totalApplications,
    badges: listing.badges.split(","),
    status: listing.status,
    pipeline: {
      all: totalApplications,
      discarded: discardedCount,
      steps: pipelineSteps,
    },
  };
};

const mapResponseWithApplications = (
  listing: ListingDto,
): ListingWithApplications => {
  const baseListing = mapResponse(listing);

  const applications = listing.applications.map((app) => ({
    id: app.id,
    firstName: app.firstName,
    lastName: app.lastName,
    email: app.email,
    image: app.image,
    pipelineStatus: {
      name: app.pipelineStatus?.name || "Applied",
      order: app.pipelineStatus?.order || 0,
    },
  }));

  return {
    ...baseListing,
    applications,
  };
};
