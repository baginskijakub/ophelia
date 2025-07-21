import { ListingWithApplications } from "@ophelia/types";

export interface ApplicationGroup {
  name: string;
  count: number;
  applications: ListingWithApplications["applications"];
}
