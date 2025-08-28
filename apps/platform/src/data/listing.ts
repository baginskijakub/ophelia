import { db } from "@ophelia/db";
import { Listing, ListingWithApplications } from "@ophelia/types";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getListings = cache(async (org: string): Promise<Listing[]> => {
  const listing = await db.listings.getAll(org);

  if (listing.error) {
    return notFound();
  }

  return listing.data;
});

export const getListingWithApplications = cache(
  async (jobId: number, org: string): Promise<ListingWithApplications> => {
    const listing = await db.listings.getWithApplications(jobId, org);

    if (listing.error) {
      return notFound();
    }

    return listing.data;
  },
);
