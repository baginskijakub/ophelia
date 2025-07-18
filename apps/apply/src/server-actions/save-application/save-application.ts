"use server";

import { headers } from "next/headers";
import { db } from "@ophelia/db";
import { Application } from "@ophelia/types";
import { tryCatch } from "@ophelia/utils";
import { UTApi } from "uploadthing/server";
import { Client } from "@upstash/qstash";
import { validateCVFormat } from "../../utils";

export const saveApplication = async (values: Application) => {
  const listingId = (await headers()).get("x-job-id");

  if (!listingId) {
    return { success: false, errorMessage: "Invalid listing" };
  }

  if (!values.resume || !(await validateCVFormat(values.resume))) {
    return { success: false, errorMessage: "Invalid resume format" };
  }

  const utapi = new UTApi();
  const { data, error: uploadError } = await utapi.uploadFiles(values.resume);

  if (uploadError) {
    return { success: false, errorMessage: "Failed to upload resume" };
  }

  const { error: dbError } = await db.applications.create({
    application: {
      email: values.email,
      firstName: values.firstName,
      lastName: values.lastName,
    },
    resumeFileKey: data.key,
    listingId: +listingId,
  })

  if (dbError) {
    if (dbError === "unique-constraint") {
      return {
        success: false,
        errorMessage: "You have already applied for this role",
      };
    }

    console.error("Failed to save application:", dbError);
    return { success: false, errorMessage: "Try again" };
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
