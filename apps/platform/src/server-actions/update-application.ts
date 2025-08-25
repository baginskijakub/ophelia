"use server";

import { db as dbCrud } from "@ophelia/db";
import { db } from "@ophelia/db/src/database";
import { revalidatePath } from "next/cache";
import { eq, and } from "drizzle-orm";
import { pipelineStatusesTable, listingsTable } from "@ophelia/db";

export const updateApplicantPipelineStatus = async (
  applicationId: number,
  statusOrder: number,
  orgName: string,
  jobId: string,
) => {
  try {
    // First, get the listing to find the pipeline status ID by order
    const listing = await db.query.listingsTable.findFirst({
      where: and(
        eq(listingsTable.id, parseInt(jobId)),
        eq(listingsTable.orgName, orgName),
      ),
      with: {
        pipelineStatuses: {
          where: eq(pipelineStatusesTable.order, statusOrder),
        },
      },
    });

    if (!listing || !listing.pipelineStatuses.length) {
      return { success: false, error: "Pipeline status not found" };
    }

    const pipelineStatusId = listing.pipelineStatuses[0]?.id;

    if (!pipelineStatusId) {
      return { success: false, error: "Pipeline status not found" };
    }

    await dbCrud.applications.updateApplicationPipelineStatus(
      applicationId,
      pipelineStatusId,
    );

    // Revalidate the applicants page to show updated status
    revalidatePath(`/${orgName}/${jobId}`);
    revalidatePath(`/${orgName}/${jobId}/applicants`);

    return { success: true };
  } catch (error) {
    console.error("Failed to update pipeline status:", error);
    return { success: false, error: "Failed to update pipeline status" };
  }
};

export const discardApplicant = async (
  applicationId: number,
  orgName: string,
  jobId: string,
) => {
  try {
    await dbCrud.applications.discardApplication(applicationId);

    // Revalidate the applicants page to remove discarded applicant
    revalidatePath(`/${orgName}/${jobId}`);
    revalidatePath(`/${orgName}/${jobId}/applicants`);

    return { success: true };
  } catch (error) {
    console.error("Failed to discard applicant:", error);
    return { success: false, error: "Failed to discard applicant" };
  }
};
