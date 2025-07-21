import { ContentBlock } from "./content-block";
import { Pipeline } from "./pipeline";

export type ListingStatus = "accepting-applications" | "on-hold" | "closed";

export interface Listing {
  id: number;
  title: string;
  company: {
    id: string;
    name: string;
    image: string;
  };
  createdAt: string; // ISO date string
  applicantsCount: number;
  pageViews: number;
  pipeline: Pipeline;
  status: ListingStatus;
  badges: string[];
  description: ContentBlock[];
}

export interface ListingWithApplications extends Listing {
  applications: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    image: string | null;
    pipelineStatus: string;
  }[];
}
