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
        all: 17,
        discarded: 8,
        steps: [
          {
            order: 2,
            name: "Applied",
            count: 3,
          },
          {
            order: 3,
            name: "Interview",
            count: 0,
          },
          {
            order: 4,
            name: "Offer",
            count: 0,
          },
        ],
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
      all: 17,
      discarded: 8,
      steps: [
        {
          order: 2,
          name: "Applied",
          count: 3,
        },
        {
          order: 3,
          name: "Interview",
          count: 0,
        },
        {
          order: 4,
          name: "Offer",
          count: 0,
        },
      ],
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
      all: 17,
      discarded: 8,
      steps: [
        {
          order: 0,
          name: "Applied",
          count: 7,
        },
        {
          order: 1,
          name: "Interview",
          count: 2,
        },
        {
          order: 2,
          name: "Offer",
          count: 0,
        },
        {
          order: 3,
          name: "Discarded",
          count: 8,
        },
      ],
    },
    status: "accepting-applications",
    applications: [
      {
        id: 2,
        email: "john.doe@example.com",
        image: commonImage,
        firstName: "John",
        lastName: "Doe",
        pipelineStatus: { order: 0, name: "Applied" },
      },
      {
        id: 1,
        email: "jane.smith@example.com",
        image: commonImage,
        firstName: "Jane",
        lastName: "Smith",
        pipelineStatus: { order: 1, name: "Interview" },
      },
      {
        id: 3,
        email: "peter.jones@example.com",
        image: commonImage,
        firstName: "Peter",
        lastName: "Jones",
        pipelineStatus: { order: 0, name: "Applied" },
      },
      {
        id: 4,
        email: "alice.brown@example.com",
        image: commonImage,
        firstName: "Alice",
        lastName: "Brown",
        pipelineStatus: { order: 1, name: "Interview" },
      },
      {
        id: 5,
        email: "charlie.davis@example.com",
        image: commonImage,
        firstName: "Charlie",
        lastName: "Davis",
        pipelineStatus: { order: 2, name: "Offer" },
      },
      {
        id: 6,
        email: "eva.green@example.com",
        image: commonImage,
        firstName: "Eva",
        lastName: "Green",
        pipelineStatus: { order: 2, name: "Offer" },
      },
      {
        id: 7,
        email: "frank.white@example.com",
        image: commonImage,
        firstName: "Frank",
        lastName: "White",
        pipelineStatus: { order: 3, name: "Discarded" },
      },
      {
        id: 8,
        email: "grace.black@example.com",
        image: commonImage,
        firstName: "Grace",
        lastName: "Black",
        pipelineStatus: { order: 3, name: "Discarded" },
      },
      {
        id: 9,
        email: "helen.miller@example.com",
        image: commonImage,
        firstName: "Helen",
        lastName: "Miller",
        pipelineStatus: { order: 1, name: "Applied" },
      },
      {
        id: 10,
        email: "ivan.williams@example.com",
        image: commonImage,
        firstName: "Ivan",
        lastName: "Williams",
        pipelineStatus: { order: 1, name: "Interview" },
      },
      {
        id: 11,
        email: "olivia.taylor@example.com",
        image: commonImage,
        firstName: "Olivia",
        lastName: "Taylor",
        pipelineStatus: { order: 2, name: "Offer" },
      },
      {
        id: 12,
        email: "david.clark@example.com",
        image: commonImage,
        firstName: "David",
        lastName: "Clark",
        pipelineStatus: { order: 3, name: "Discarded" }, // Assuming a 'Discarded' status with order 1
      },
    ],
  };
};
