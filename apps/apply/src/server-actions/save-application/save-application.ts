"use server";

import { headers } from "next/headers";
import { applicationsTable, db, isUniqueConstraintError } from "@ophelia/db";
import { Application } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { utapi } from "@ophelia/utils";
import { Client } from "@upstash/qstash";

async function validateFileFormat(cv: File): Promise<boolean> {
  if (!cv) return false;

  if (cv.type !== "application/pdf") return false;

  const arrayBuffer = await cv.slice(0, 5).arrayBuffer();
  const uint8Array = new Uint8Array(arrayBuffer);

  // Check for PDF header
  // PDF files start with "%PDF-"
  if (
    uint8Array[0] !== 0x25 || // %
    uint8Array[1] !== 0x50 || // P
    uint8Array[2] !== 0x44 || // D
    uint8Array[3] !== 0x46 || // F
    uint8Array[4] !== 0x2d // -
  ) {
    return false;
  }

  return true;
}

export const saveApplication = async (values: Application) => {
  const listingId = (await headers()).get("x-job-id");

  if (!listingId) {
    return { success: false, errorMessage: "Invalid listing" };
  }

  if (!values.resume || !(await validateFileFormat(values.resume))) {
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

  const qstash = new Client();

  const { error: qstashError } = await tryCatch(
    qstash.publishJSON({
      url: `${process.env.PLATFORM_URL}/api/process-cv`,
      body: {
        email: values.email,
        listingId: +listingId,
      },
    }),
  );

  if (qstashError) {
    console.error("Failed to queue CV processing:", qstashError);
  }

  return { success: true, errorMessage: "" };
};
