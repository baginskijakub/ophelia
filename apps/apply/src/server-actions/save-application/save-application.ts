"use server";

import { headers } from "next/headers";
import { applicationsTable, db, isUniqueConstraintError } from "@ophelia/db";
import { Application } from "../../types/application";
import { tryCatch } from "../../utils/try-catch";

export const saveApplication = async (values: Application) => {
  const listingId = (await headers()).get("x-job-id");

  if (!listingId) {
    return { success: false, errorMessage: "" };
  }

  // TODO: validate the resume maybe like check for valid type of the file etc
  if (!values.resume) {
    return { success: false, errorMessage: ": invalid resume format" };
  }

  // TODO: upload the file and get the file key
  const fileKey = "mock-key";

  const { error } = await tryCatch(
    db.insert(applicationsTable).values({
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      resumeFileKey: fileKey,
      listingId: +listingId,
    }),
  );

  if (error) {
    if (isUniqueConstraintError(error.cause)) {
      // TODO: don't know if we want to tell users that there is already an application
      return {
        success: false,
        errorMessage: ": an application with this email already exists.",
      };
    }

    return { success: false, errorMessage: "" };
  }

  return { success: true, errorMessage: "" };
};
