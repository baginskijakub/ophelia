import { db } from "@ophelia/db";
import { Application } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { notFound } from "next/navigation";
import { cache } from "react";

export const getApplication = cache(
  async (
    applicationId: number,
    listingId: number,
    orgName: string,
  ): Promise<Application> => {
    //todo: verify orgName matches listing's orgName

    const res = await db.applications.getById(listingId, applicationId);

    if (res.error) {
      return notFound();
    }

    return res.data;
  },
);
