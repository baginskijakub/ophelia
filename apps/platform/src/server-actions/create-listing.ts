"use server";

import { db, ListingForm } from "@ophelia/db";
import { ResultPromise } from "@ophelia/types";
import { checkOrgAccess } from "../data/check-org-access";

export const createListing = async (
  form: ListingForm,
): ResultPromise<number> => {
  await checkOrgAccess(form.orgName);
  return await db.listings.create(form);
};
