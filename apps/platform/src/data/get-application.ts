import { db } from "@ophelia/db";
import { tryCatch } from "@ophelia/utils";
import { notFound } from "next/navigation";

export const getApplication = async (
  applicationId: number,
  listingId: number,
  orgName: string,
) => {
  //todo: verify orgName matches listing's orgName

  const res = await tryCatch(db.applications.getById(listingId, applicationId));

  if (res.error) {
    return notFound();
  }

  return res.data;
};
