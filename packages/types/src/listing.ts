export type EmploymentType =
  | "Full-time"
  | "Part-time"
  | "Contract"
  | "Internship"
  | "Temporary";

export type SalaryPeriod = "hourly" | "daily" | "weekly" | "monthly" | "yearly";

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
  createdAt: string;
  applicantsCount: number;
  pageViews: number;
  pipeline: Pipeline;
  status: ListingStatus;
  aboutCompany?: string;
  aboutRole: string;
  responsibilities: string;
  requirements: string;
  outro?: string;
  minSalary?: number;
  maxSalary?: number;
  salaryPeriod?: SalaryPeriod;
  currency?: string;
  employmentType: EmploymentType;
}

export interface ListingWithApplications extends Listing {
  applications: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    image: string | null;
    pipelineStatus: {
      name: string;
      order: number;
    };
  }[];
}
