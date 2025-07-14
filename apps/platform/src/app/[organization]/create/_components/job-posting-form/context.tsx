'use client'

import { ContentBlock } from "@ophelia/types";
import { JobPostingForm } from "./types";
import { createContext, PropsWithChildren, useCallback, useContext, useState } from "react";
import { defaultContentBlock } from "../block-editor/utils";

interface JobPostingFormValues {
  form: JobPostingForm
  setTitle: React.Dispatch<React.SetStateAction<string>>;
  setBadges: React.Dispatch<React.SetStateAction<string[]>>;
  setDescription: React.Dispatch<React.SetStateAction<ContentBlock[]>>;
}

const JobPostingFormContext = createContext<JobPostingFormValues>({} as JobPostingFormValues);

export const JobPostingFormProvider = (props: PropsWithChildren) => {
  const { children } = props;

  const [form, setForm] = useState<JobPostingForm>({
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
    <JobPostingFormContext.Provider value={{ form, setTitle, setBadges, setDescription }}>
      {children}
    </JobPostingFormContext.Provider>
  );
}

export const useJobPostingForm = () => {
  const context = useContext(JobPostingFormContext);
  if (!context) {
    throw new Error("useJobPostingForm must be used within a JobPostingFormProvider");
  }
  return context;
};
