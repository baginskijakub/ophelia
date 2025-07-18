"use client";

import { Listing, Organization } from "@ophelia/types";
import { createContext, PropsWithChildren, useContext } from "react";

interface ListingContextType {
  organization: Organization;
  listing: Listing;
}

const ListingContext = createContext<ListingContextType>(
  {} as ListingContextType
);

export const ListingContextProvider = (
  props: PropsWithChildren<ListingContextType>
) => {
  const { children, ...rest } = props;
  return (
    <ListingContext.Provider value={{ ...rest }}>
      {children}
    </ListingContext.Provider>
  );
};

export const useListing = () => {
  const ctx = useContext(ListingContext);

  if (!ctx) {
    throw new Error(
      "useListing hook should only be used withing ListingContext"
    );
  }

  return ctx;
};
