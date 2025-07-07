'use server'

import { JobPosting } from "@ophelia/types";

export const getJobPostings = async (org: string): Promise<JobPosting[]> => {
  return [
    {
      id: "1",
      title: "Software Engineer",
      company: {
        name: "Whiteaway Group",
        image: "https://images2.wagcdn.com/f/frontend/whiteaway/favicon.ico"
      },
      createdAt: new Date().toISOString(),
      applicantsCount: 42,
      pageViews: 1000,
      pipeline: {
        all: 100,
        discarded: 20,
        interview: 30,
        offer: 10
      },
      status: "accepting-applications"
    },
  ];
}

export const getJobPosting = async (jobId: string, org: string): Promise<JobPosting> => {
  return {
    id: jobId,
    title: "Software Engineer",
    company: {
      name: "Whiteaway Group",
      image: "https://images2.wagcdn.com/f/frontend/whiteaway/favicon.ico"
    },
    createdAt: new Date().toISOString(),
    applicantsCount: 42,
    pageViews: 1000,
    pipeline: {
      all: 100,
      discarded: 20,
      interview: 30,
      offer: 10
    },
    status: "accepting-applications"
  };
}
