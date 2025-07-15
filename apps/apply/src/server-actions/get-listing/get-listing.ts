"use server";

import { notFound } from "next/navigation";
import { Listing } from "../../types";
import { mapResponse } from "./mapping";
import { headers } from "next/headers";
import { db, listingsTable } from "@ophelia/db";
import { eq } from "drizzle-orm";
import { tryCatch } from "@ophelia/utils";

export const getListing = async (): Promise<Listing> => {
  const listing = await getNullableListing();

  if (!listing) {
    notFound();
  }

  return listing;
};

export const getNullableListing = async (): Promise<Listing | null> => {
  const id = (await headers()).get("x-job-id");

  if (!id) {
    return null;
  }

  const { data, error } = await tryCatch(
    db.query.listingsTable.findFirst({
      where: eq(listingsTable.id, +id),
      with: {
        organization: true,
      },
    }),
  );

  if (data == undefined) {
    console.warn("No listing found for ID:", id);
    return null;
  }

  if (error) {
    console.error("Error fetching listing:", error);
    return null;
  }

  return mapResponse(data);
};
