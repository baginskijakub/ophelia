
export interface ProcessCVRequest {
  email: string;
  listingId: number;
}

export interface CVAnalysisInput {
  applicantName: string;
  resumeFileKey: string;
  jobTitle: string;
  jobDescription: string;
  companyInfo: string;
}
