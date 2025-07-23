"use client";

import { ListingWithApplications } from "@ophelia/types";
import { ApplicationGroup } from "./types";
import { createContext, useContext, useMemo } from "react";
import { groupApplications } from "./utils";

interface ApplicantListContextValues {
  groupedApplications: ApplicationGroup[];
  listing: ListingWithApplications;
}

interface ApplicantListContextProps extends React.PropsWithChildren {
  listing: ListingWithApplications;
}

const ApplicantListContext = createContext<ApplicantListContextValues>(
  {} as ApplicantListContextValues,
);

export const ApplicantListProvider = (props: ApplicantListContextProps) => {
  const { children, listing } = props;
  const { applications } = listing;

  const groupedApplications = useMemo(
    () => groupApplications(applications),
    [applications],
  );

  return (
    <ApplicantListContext.Provider value={{ groupedApplications, listing }}>
      {children}
    </ApplicantListContext.Provider>
  );
};

export const useApplicantList = () => {
  const context = useContext(ApplicantListContext);
  if (!context) {
    throw new Error(
      "useApplicantList must be used within an ApplicantListProvider",
    );
  }
  return context;
};
