"use server";

import { notFound } from "next/navigation";
import { headers } from "next/headers";
import { db } from "@ophelia/db";
import { Listing, Organization } from "@ophelia/types";

export const getListing = async (): Promise<{
  listing: Listing;
  organization: Organization;
}> => {
  const result = await getNullableListing();

  if (!result) {
    notFound();
  }

  return result;
};

export const getNullableListing = async (): Promise<{
  listing: Listing;
  organization: Organization;
} | null> => {
  const headersStore = await headers();

  const orgName = headersStore.get("host")?.split(".")[0];
  const id = headersStore.get("x-job-id");

  if (!id || !orgName) {
    return null;
  }

  const { data, error } = await db.listings.getWithOrganization(
    parseInt(id),
    orgName,
  );

  if (error || !data) {
    return null;
  }

  const organization: Organization = {
    name: data.organization.name,
    hue: data.organization.hue,
    logo: data.organization.logo,
    rounding: data.organization.rounding,
  };

  return {
    listing: data.listing,
    organization,
  };
};
