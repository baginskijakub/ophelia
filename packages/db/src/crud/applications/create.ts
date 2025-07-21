import { ApplicationForm, ResultPromise } from "@ophelia/types";
import { applicationsTable } from "../../schema";
import { db } from "../../database";
import { tryCatch } from "@ophelia/utils";
import { isUniqueConstraintError } from "../../utils";

interface CreateApplicationParams {
  application: Omit<ApplicationForm, "resume">;
  resumeFileKey: string;
  listingId: number;
}

export const create = async (
  params: CreateApplicationParams,
): ResultPromise<boolean> => {
  const { application, resumeFileKey, listingId } = params;

  const { error } = await tryCatch(
    db.insert(applicationsTable).values({
      email: application.email,
      firstName: application.firstName,
      lastName: application.lastName,
      resumeFileKey,
      listingId,
    }),
  );

  if (error) {
    if (isUniqueConstraintError(error.cause)) {
      return {
        data: null,
        error: "unique-constraint",
      };
    }

    return { data: null, error: "server-error" };
  }

  return { data: true, error: null };
};
