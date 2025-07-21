"use server";

import { Listing, ListingWithApplications } from "@ophelia/types";

export const getListings = async (org: string): Promise<Listing[]> => {
  return [
    {
      id: 1,
      title: "Software Engineer",
      company: {
        id: "meta_a1b2c3",
        name: "Whiteaway Group",
        image: "https://images2.wagcdn.com/f/frontend/whiteaway/favicon.ico",
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
        offer: 0,
      },
      status: "accepting-applications",
    },
  ];
};

export const getListing = async (
  jobId: number,
  org: string,
): Promise<Listing> => {
  return {
    id: jobId,
    title: "Software Engineer",
    company: {
      id: "meta_a1b2c3",
      name: "Whiteaway Group",
      image: "https://images2.wagcdn.com/f/frontend/whiteaway/favicon.ico",
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
      offer: 0,
    },
    status: "accepting-applications",
  };
};

export const getListingWithApplications = async (
  jobId: number,
  org: string,
): Promise<ListingWithApplications> => {
  const commonImage =
    "https://www.google.com/s2/favicons?domain=whiteaway.com&sz=40";

  return {
    id: jobId,
    title: "Software Engineer",
    company: {
      id: "meta_a1b2c3",
      name: "Whiteaway Group",
      image: "https://images2.wagcdn.com/f/frontend/whiteaway/favicon.ico",
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
      offer: 0,
    },
    status: "accepting-applications",
    applications: [
      {
        id: 2,
        email: "john.doe@example.com",
        image: commonImage,
        firstName: "John",
        lastName: "Doe",
        pipelineStatus: "applied",
      },
      {
        id: 1,
        email: "jane.smith@example.com",
        image: commonImage,
        firstName: "Jane",
        lastName: "Smith",
        pipelineStatus: "interview",
      },
      {
        id: 3,
        email: "peter.jones@example.com",
        image: commonImage,
        firstName: "Peter",
        lastName: "Jones",
        pipelineStatus: "applied",
      },
      {
        id: 4,
        email: "alice.brown@example.com",
        image: commonImage,
        firstName: "Alice",
        lastName: "Brown",
        pipelineStatus: "interview",
      },
      {
        id: 5,
        email: "charlie.davis@example.com",
        image: commonImage,
        firstName: "Charlie",
        lastName: "Davis",
        pipelineStatus: "offer",
      },
      {
        id: 6,
        email: "eva.green@example.com",
        image: commonImage,
        firstName: "Eva",
        lastName: "Green",
        pipelineStatus: "offer",
      },
      {
        id: 7,
        email: "frank.white@example.com",
        image: commonImage,
        firstName: "Frank",
        lastName: "White",
        pipelineStatus: "discarded",
      },
      {
        id: 8,
        email: "grace.black@example.com",
        image: commonImage,
        firstName: "Grace",
        lastName: "Black",
        pipelineStatus: "discarded",
      },
      {
        id: 9,
        email: "helen.miller@example.com",
        image: commonImage,
        firstName: "Helen",
        lastName: "Miller",
        pipelineStatus: "applied",
      },
      {
        id: 10,
        email: "ivan.williams@example.com",
        image: commonImage,
        firstName: "Ivan",
        lastName: "Williams",
        pipelineStatus: "interview",
      },
      {
        id: 11,
        email: "olivia.taylor@example.com",
        image: commonImage,
        firstName: "Olivia",
        lastName: "Taylor",
        pipelineStatus: "offer",
      },
      {
        id: 12,
        email: "david.clark@example.com",
        image: commonImage,
        firstName: "David",
        lastName: "Clark",
        pipelineStatus: "discarded",
      },
    ],
  };
};
