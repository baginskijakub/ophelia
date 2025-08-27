"use client";

import { Validation } from "@ophelia/types";
import { ListingForm } from "@ophelia/db";
import {
  createContext,
  PropsWithChildren,
  useCallback,
  useContext,
  useState,
} from "react";
import { createListing } from "@app/server-actions";
import { validateListing } from "./utils";
import { useRouter } from "next/navigation";

interface ListingFormProps extends PropsWithChildren {
  orgName: string;
}

interface ListingFormValues {
  form: ListingForm;
  orgName: string;
  validation: Validation;

  setField: <K extends keyof ListingForm>(
    key: K,
    value: React.SetStateAction<ListingForm[K]>,
  ) => void;

  onCreate: () => Promise<boolean>;
}

const ListingFormContext = createContext<ListingFormValues>(
  {} as ListingFormValues,
);

export const ListingFormProvider = (props: ListingFormProps) => {
  const { children, orgName } = props;
  const router = useRouter();

  const [form, setForm] = useState<ListingForm>({
    title: "",
    orgName,
    aboutRole: "",
    aboutCompany: "",
    responsibilities: "",
    requirements: "",
    outro: undefined,
    employmentType: "Full-time",
    minSalary: undefined,
    maxSalary: undefined,
    salaryPeriod: undefined,
    currency: undefined,
  });

  const [validation, setValidation] = useState<Validation>({
    valid: true,
    error: null,
  });

  const setField = useCallback(
    <K extends keyof ListingForm>(
      key: K,
      value: React.SetStateAction<ListingForm[K]>,
    ) => {
      setForm((prev) => ({
        ...prev,
        [key]:
          typeof value === "function"
            ? (value as (prev: ListingForm[K]) => ListingForm[K])(prev[key])
            : value,
      }));
    },
    [],
  );

  const onCreate = useCallback(async () => {
    const validation = validateListing(form);
    setValidation(validation);

    if (!validation.valid) {
      return false;
    }

    const res = await createListing(form);

    if (res.error) {
      setValidation({
        valid: false,
        error: "Failed to create listing. Please try again.",
      });
      return false;
    }

    router.push(`/${orgName}/${res.data}`);
    return true;
  }, [form, orgName, router]);

  return (
    <ListingFormContext.Provider
      value={{
        form,
        validation,
        orgName,
        setField,
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
    throw new Error("useListingForm must be used within a ListingFormProvider");
  }
  return context;
};
