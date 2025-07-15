import { ContentBlock } from "./content-block";
import { Pipeline } from "./pipeline";

export type JobPostingStatus = 'accepting-applications' | 'on-hold' | 'closed';

export interface JobPosting {
  id: string;
  title: string;
  company: {
    name: string;
    image: string;
  }
  createdAt: string; // ISO date string
  applicantsCount: number;
  pageViews: number;
  pipeline: Pipeline;
  status: JobPostingStatus;
  badges: string[];
  description: ContentBlock[];
}
