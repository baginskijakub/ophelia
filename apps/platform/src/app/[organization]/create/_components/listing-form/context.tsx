"use client";

import { ContentBlock, Validation } from "@ophelia/types";
import { ListingForm } from "@ophelia/db";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import { defaultContentBlock } from "../block-editor/utils";
import { createListing } from "@app/server-actions";
import { validateListing } from "./utils";

interface ListingFormProps extends PropsWithChildren {
  orgId: string;
}

interface ListingFormValues {
  form: ListingForm;
  validation: Validation;
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setBadges: React.Dispatch<React.SetStateAction<string[]>>;
  setDescription: React.Dispatch<React.SetStateAction<ContentBlock[]>>;
  onCreate: () => void;
}

const ListingFormContext = createContext<ListingFormValues>(
  {} as ListingFormValues,
);

export const ListingFormProvider = (props: ListingFormProps) => {
  const { children, orgId } = props;

  const [form, setForm] = useState<ListingForm>({
    title: "",
    badges: [],
    description: [defaultContentBlock],
    orgId,
  });
  const [validation, setValidation] = useState<Validation>({
    valid: true,
    error: null,
  });

  const setTitle = useCallback((action: React.SetStateAction<string>) => {
    setForm((prev) => ({
      ...prev,
      title: typeof action === "function" ? action(prev.title) : action,
    }));
  }, []);

  const setBadges = useCallback((action: React.SetStateAction<string[]>) => {
    setForm((prev) => ({
      ...prev,
      badges: typeof action === "function" ? action(prev.badges) : action,
    }));
  }, []);

  const setDescription = useCallback(
    (action: React.SetStateAction<ContentBlock[]>) => {
      setForm((prev) => ({
        ...prev,
        description:
          typeof action === "function" ? action(prev.description) : action,
      }));
    },
    [],
  );

  const onCreate = useCallback(async () => {
    const validation = validateListing(form);
    setValidation(validation);

    if (!validation.valid) {
      return;
    }

    const res = await createListing(form);

    if (res.error) {
      setValidation({
        valid: false,
        error: "Failed to create listing. Please try again.",
      });
    }
  }, [form]);

  return (
    <ListingFormContext.Provider
      value={{
        form,
        validation,
        setTitle,
        setBadges,
        setDescription,
        onCreate,
      }}
    >
      {children}
    </ListingFormContext.Provider>
  );
};

export const useListingForm = () => {
  const context = useContext(ListingFormContext);
  if (!context) {
    throw new Error(
      "useListingForm must be used within a JobPostingFormProvider",
    );
  }
  return context;
};
