"use server";

import { notFound } from "next/navigation";
import { createClient } from "../../db";
import { Listing } from "../../types";
import { mapResponse } from "./mapping";
import { headers } from "next/headers";

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

  const client = await createClient();

  const { data, error } = await client
    .from("listings")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error("Error fetching listing:", error);
    return null;
  }

  return mapResponse(data);
}