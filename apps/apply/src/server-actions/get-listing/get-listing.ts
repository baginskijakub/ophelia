"use server";

import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { db } from "@ophelia/db";
import { Listing } from "@ophelia/types";

export const getListing = async (): Promise<Listing> => {
  const listing = await getNullableListing();

  if (!listing) {
    notFound();
  }

  return listing;
};

export const getNullableListing = async (): Promise<Listing | null> => {
  const headersStore = await headers();

  const orgName = headersStore.get("host")?.split(".")[0];
  const id = headersStore.get("x-job-id");

  if (!id || !orgName) {
    return null;
  }

  const { data, error } = await db.listings.get(parseInt(id), orgName);

  if (error) {
    console.error("Error fetching listing:", error);
    return null;
  }

  return data;
};
