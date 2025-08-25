"use server";

import { db } from "@ophelia/db";
import { revalidatePath } from "next/cache";

export const updateApplicantPipelineStatus = async (
  applicationId: number,
  statusOrder: number,
  orgName: string,
  jobId: string,
): Promise<boolean> => {

  const result = await db.applications.updateApplicationPipelineStatus(
    applicationId,
    statusOrder,
    parseInt(jobId),
  );

  if (result.error) {
    return false;
  }

  // Revalidate the applicants page to show updated status
  revalidatePath(`/${orgName}/${jobId}`);
  revalidatePath(`/${orgName}/${jobId}/applicants`);

  return true;
};

export const discardApplicant = async (
  applicationId: number,
  orgName: string,
  jobId: string,
): Promise<boolean> => {
  const result = await db.applications.discardApplication(applicationId);

  if (result.error) {
    return false;
  }

  // Revalidate the applicants page to remove discarded applicant
  revalidatePath(`/${orgName}/${jobId}`);
  revalidatePath(`/${orgName}/${jobId}/applicants`);

  return true;
};
