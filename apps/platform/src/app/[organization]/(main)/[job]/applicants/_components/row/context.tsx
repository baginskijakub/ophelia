import { Application, ListingWithApplications } from "@ophelia/types";
import React, { PropsWithChildren } from "react";

interface ApplicantContextProps extends PropsWithChildren {
  application: ListingWithApplications["applications"][number];
}

interface ApplicantContext {
  application: ListingWithApplications["applications"][number] &
    Partial<Application>;
}

export const ApplicantContext = React.createContext<ApplicantContext>(
  {} as ApplicantContext,
);

export const ApplicantProvider: React.FC<ApplicantContextProps> = (props) => {
  const { children, application } = props;

  return (
    <ApplicantContext.Provider value={{ application }}>
      {children}
    </ApplicantContext.Provider>
  );
};

export const useApplicant = () => {
  const context = React.useContext(ApplicantContext);
  if (!context) {
    throw new Error(
      "useApplicantContext must be used within an ApplicantProvider",
    );
  }
  return context;
};
