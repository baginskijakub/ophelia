import { JobPosting } from "@ophelia/types";

export type JobPostingForm = Pick<JobPosting, "title" | "badges" | "description">
