import { ListingWithApplications } from "@ophelia/types";
import { ApplicationGroup } from "./types";

export const groupApplications = (
  applications: ListingWithApplications["applications"],
): ApplicationGroup[] => {
  const grouped = new Map<string, ApplicationGroup>();

  applications.forEach((application) => {
    if (grouped.has(application.pipelineStatus)) {
      grouped.get(application.pipelineStatus)!.applications.push(application);
      grouped.get(application.pipelineStatus)!.count += 1;
    } else {
      grouped.set(application.pipelineStatus, {
        name: application.pipelineStatus,
        count: 1,
        applications: [application],
      });
    }
  });

  return Array.from(grouped.values()).sort((a, b) =>
    a.name.localeCompare(b.name),
  );
};
