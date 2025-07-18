'use client'

import { ContentBlock } from "@ophelia/types";
import { ListingForm} from "./types";
import { createContext, PropsWithChildren, useCallback, useContext, useState } from "react";
import { defaultContentBlock } from "../block-editor/utils";

interface ListingFormValues {
  form: ListingForm;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setBadges: React.Dispatch<React.SetStateAction<string[]>>;
  setDescription: React.Dispatch<React.SetStateAction<ContentBlock[]>>;
}

const ListingFormContext = createContext<ListingFormValues>({} as ListingFormValues);

export const ListingFormProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const [form, setForm] = useState<ListingForm>({
    title: "",
    badges: [],
    description: [defaultContentBlock],
  });

  const setTitle = useCallback(
    (action: React.SetStateAction<string>) => {
      setForm((prev) => ({
        ...prev,
        title: typeof action === "function" ? action(prev.title) : action,
      }));
    },
    []
  );

  const setBadges = useCallback(
    (action: React.SetStateAction<string[]>) => {
      setForm((prev) => ({
        ...prev,
        badges: typeof action === "function" ? action(prev.badges) : action,
      }));
    },
    []
  );

  const setDescription = useCallback(
    (action: React.SetStateAction<ContentBlock[]>) => {
      setForm((prev) => ({
        ...prev,
        description:
          typeof action === "function" ? action(prev.description) : action,
      }));
    },
    []
  );

  return (
    <ListingFormContext.Provider value={{ form, setTitle, setBadges, setDescription }}>
      {children}
    </ListingFormContext.Provider>
  );
}

export const useListingForm = () => {
  const context = useContext(ListingFormContext);
  if (!context) {
    throw new Error("useListingForm must be used within a JobPostingFormProvider");
  }
  return context;
};
