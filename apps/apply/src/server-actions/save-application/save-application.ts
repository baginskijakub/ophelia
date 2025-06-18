"use server";

import { headers } from "next/headers";
import { applicationsTable, db, isUniqueConstraintError } from "@ophelia/db";
import { Application } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { utapi } from "../../utils/uploadthing";

export const saveApplication = async (values: Application) => {
  const listingId = (await headers()).get("x-job-id");

  if (!listingId) {
    return { success: false, errorMessage: "Invalid listing" };
  }

  // TODO: validate the resume maybe like check for valid type of the file etc
  if (!values.resume) {
    return { success: false, errorMessage: "Invalid resume format" };
  }

  const { data, error: uploadError } = await utapi.uploadFiles(values.resume);

  if (uploadError) {
    return { success: false, errorMessage: "Failed to upload resume" };
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
      return {
        success: false,
        errorMessage: "You have already applied for this role",
      };
    }

    return { success: false, errorMessage: "try again" };
  }

  // TODO: send message to sqs to process the application

  return { success: true, errorMessage: "" };
};
