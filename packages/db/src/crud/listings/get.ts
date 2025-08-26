import { db } from "../../database";
import { Listing, ResultPromise } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { listingsTable } from "../../schema";
import { eq, and } from "drizzle-orm";

type ListingDto = typeof listingsTable.$inferSelect & {
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
        organization: {
          columns: {
            name: true,
            logo: true,
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

export const getAll = async (orgName: string): ResultPromise<Listing[]> => {
  const { data, error } = await tryCatch(
    db.query.listingsTable.findMany({
      where: eq(listingsTable.orgName, orgName),
      with: {
        organization: {
          columns: {
            name: true,
            logo: true,
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
    pageViews: 0,
    applicantsCount: 0,
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
