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
  const id = (await headers()).get("x-job-id");

  if (!id) {
    return null;
  }

  const { data, error } = await db.listings.get(parseInt(id))

  if (error) {
    console.error("Error fetching listing:", error);
    return null;
  }

  return data
};

