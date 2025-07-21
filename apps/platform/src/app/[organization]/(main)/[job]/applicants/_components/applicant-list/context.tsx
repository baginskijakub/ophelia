"use client";

import { ListingWithApplications } from "@ophelia/types";
import { ApplicationGroup } from "./types";
import { createContext, useContext, useMemo } from "react";
import { groupApplications } from "./utils";

interface ApplicantListContextValues {
  groupedApplications: ApplicationGroup[];
}

interface ApplicantListContextProps extends React.PropsWithChildren {
  applications: ListingWithApplications["applications"];
}

const ApplicantListContext = createContext<ApplicantListContextValues>(
  {} as ApplicantListContextValues,
);

export const ApplicantListProvider = (props: ApplicantListContextProps) => {
  const { children, applications } = props;

  const groupedApplications = useMemo(
    () => groupApplications(applications),
    [applications],
  );

  return (
    <ApplicantListContext.Provider value={{ groupedApplications }}>
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
