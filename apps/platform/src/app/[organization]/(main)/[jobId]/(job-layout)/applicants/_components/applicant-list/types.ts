import { ListingWithApplications } from "@ophelia/types";

export interface ApplicationGroup {
  order: number;
  name: string;
  count: number;
  applications: ListingWithApplications["applications"];
}
