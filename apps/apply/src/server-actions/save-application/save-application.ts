"use server";

import { headers } from "next/headers";
import { applicationsTable, db, isUniqueConstraintError } from "@ophelia/db";
import { Application } from "../../types/application";
import { tryCatch } from "../../utils/try-catch";
import { utapi } from "../../utils/uploadthing";

export const saveApplication = async (values: Application) => {
  const listingId = (await headers()).get("x-job-id");

  if (!listingId) {
    return { success: false, errorMessage: "" };
  }

  // TODO: validate the resume maybe like check for valid type of the file etc
  if (!values.resume) {
    return { success: false, errorMessage: ": invalid resume format" };
  }

  const { data, error: uploadError } = await utapi.uploadFiles(values.resume);

  if (uploadError) {
    return { success: false, errorMessage: ": failed to upload resume" };
  }

  const { error: dbError } = await tryCatch(
    db.insert(applicationsTable).values({
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
      resumeFileKey: data.key,
      listingId: +listingId,
    }),
  );

  if (dbError) {
    if (isUniqueConstraintError(dbError.cause)) {
      // TODO: don't know if we want to tell users that there is already an application
      return {
        success: false,
        errorMessage: ": an application with this email already exists.",
      };
    }

    return { success: false, errorMessage: "" };
  }

  // TODO: send message to sqs to process the application

  return { success: true, errorMessage: "" };
};
