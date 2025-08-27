"use server";

import { db, ListingForm } from "@ophelia/db";
import { ResultPromise } from "@ophelia/types";

export const createListing = async (
  form: ListingForm,
): ResultPromise<number> => {
  return await db.listings.create(form);
};
