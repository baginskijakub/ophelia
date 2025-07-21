export interface ApplicationForm {
  firstName: string;
  lastName: string;
  email: string;
  resume: File | null;
}

export interface Application {
  listingId: number;
  firstName: string;
  lastName: string;
  email: string;
  pipelineStatus: string;
  resume: string;
  createdAt: Date;
  processedAt?: Date;
  requirementsMet?: string[];
  requirementsNotMet?: string[];
  aiSummary?: string;
  ocrSummary?: string;
  projects?: {
    name: string;
    description: string;
    date?: string;
    link?: string;
  }[];
  workExperience?: {
    position: string;
    description: string;
    date: string;
    company: string;
  }[];
}
