import { db } from "../../database";
import {
  Listing,
  ListingWithApplications,
  ResultPromise,
} from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { eq, and } from "drizzle-orm";

import {
  listingsTable,
  applicationsTable,
  pipelineStatusesTable,
  organizationsTable,
} from "../../schema";

type OrganizationDto = typeof organizationsTable.$inferSelect;

type ApplicationDto = typeof applicationsTable.$inferSelect & {
  pipelineStatus: typeof pipelineStatusesTable.$inferSelect | null;
};
type PipelineStatusDto = typeof pipelineStatusesTable.$inferSelect;
type ListingDto = typeof listingsTable.$inferSelect & {
  applications: ApplicationDto[];
  pipelineStatuses: PipelineStatusDto[];
} & {
  organization: {
    name: string;
    logo: string;
    hue: number;
    rounding: boolean;
  };
};

export const getWithOrganization = async (
  id: number,
  orgName: string,
): ResultPromise<{ listing: Listing; organization: OrganizationDto }> => {
  const { data, error } = await tryCatch(
    db.query.listingsTable.findFirst({
      where: and(eq(listingsTable.id, id), eq(listingsTable.orgName, orgName)),
      with: {
        organization: true,
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
    data: {
      listing: mapResponse(data),
      organization: data.organization,
    },
    error: null,
  };
};

export const getAll = async (orgName: string): ResultPromise<Listing[]> => {
  const { data, error } = await tryCatch(
    db.query.listingsTable.findMany({
      where: eq(listingsTable.orgName, orgName),
      with: {
        organization: {
          columns: {
            name: true,
            logo: true,
            hue: true,
            rounding: true,
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
        organization: {
          columns: {
            name: true,
            logo: true,
            hue: true,
            rounding: true,
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
    ...listing,
    id: listing.id,
    title: listing.title,
    company: {
      id: listing.organization.name,
      name: listing.organization.name,
      image: listing.organization.logo,
    },
    aboutCompany: listing.aboutCompany || undefined,
    aboutRole: listing.aboutRole,
    responsibilities: listing.responsibilities,
    requirements: listing.requirements,
    outro: listing.outro || undefined,
    minSalary: listing.minSalary || undefined,
    maxSalary: listing.maxSalary || undefined,
    salaryPeriod: listing.salaryPeriod || undefined,
    currency: listing.currency || undefined,
    createdAt: listing.createdAt.toISOString(),
    pageViews: listing.pageViews,
    applicantsCount: totalApplications,
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

  const applications = [];

  for (const app of listing.applications) {
    if (app.isDiscarded) {
      continue;
    }

    applications.push({
      id: app.id,
      firstName: app.firstName,
      lastName: app.lastName,
      email: app.email,
      image: app.image,
      pipelineStatus: {
        name: app.pipelineStatus?.name || "Applied",
        order: app.pipelineStatus?.order || 0,
      },
    });
  }

  return {
    ...baseListing,
    applications,
  };
};
