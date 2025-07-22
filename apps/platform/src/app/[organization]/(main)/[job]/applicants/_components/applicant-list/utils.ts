import { ListingWithApplications } from "@ophelia/types";
import { ApplicationGroup } from "./types";

export const groupApplications = (
  applications: ListingWithApplications["applications"],
): ApplicationGroup[] => {
  const grouped = new Map<number, ApplicationGroup>();

  applications.forEach((application) => {
    if (grouped.has(application.pipelineStatus.order)) {
      grouped
        .get(application.pipelineStatus.order)!
        .applications.push(application);
      grouped.get(application.pipelineStatus.order)!.count += 1;
    } else {
      grouped.set(application.pipelineStatus.order, {
        name: application.pipelineStatus.name,
        order: application.pipelineStatus.order,
        count: 1,
        applications: [application],
      });
    }
  });

  return Array.from(grouped.values()).sort((a, b) => a.order - b.order);
};
