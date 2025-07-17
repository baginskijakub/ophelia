'use server'

import { Listing } from "@ophelia/types";

export const getListings = async (org: string): Promise<Listing[]> => {
  return [
    {
      id: 1,
      title: "Software Engineer",
      company: {
        name: "Whiteaway Group",
        image: "https://images2.wagcdn.com/f/frontend/whiteaway/favicon.ico"
      },
      badges: [],
      description: [],
      createdAt: new Date().toISOString(),
      applicantsCount: 42,
      pageViews: 1000,
      pipeline: {
        all: 42,
        discarded: 24,
        applied: 12,
        interview: 4,
        offer: 0
      },
      status: "accepting-applications"
    },
  ];
}

export const getListing = async (jobId: number, org: string): Promise<Listing> => {
  return {
    id: jobId,
    title: "Software Engineer",
    company: {
      name: "Whiteaway Group",
      image: "https://images2.wagcdn.com/f/frontend/whiteaway/favicon.ico"
    },
    badges: [],
    description: [],
    createdAt: new Date().toISOString(),
    applicantsCount: 42,
    pageViews: 1000,
    pipeline: {
      all: 42,
      discarded: 24,
      applied: 12,
      interview: 4,
      offer: 0
    },
    status: "accepting-applications"
  };
}
