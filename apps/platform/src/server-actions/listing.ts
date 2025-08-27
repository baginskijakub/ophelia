"use server";

import { db } from "@ophelia/db";
import { Listing, ListingWithApplications } from "@ophelia/types";
import { notFound } from "next/navigation";

export const getListings = async (org: string): Promise<Listing[]> => {
  const listing = await db.listings.getAll(org);

  if (listing.error) {
    return notFound();
  }

  return listing.data;
};

export const getListingWithApplications = async (
  jobId: number,
  org: string,
): Promise<ListingWithApplications> => {
  const listing = await db.listings.getWithApplications(jobId, org);

  if (listing.error) {
    return notFound();
  }

  return listing.data;
};
