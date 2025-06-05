"use client";

import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useCallback,
} from "react";

type UploadState = "idle" | "loading" | "success";

interface FormValues {
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
  uploadState: UploadState;
}

const FormContext = createContext<FormValues | undefined>(undefined);

export const FormProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const [selectedFile, setSelectedFileState] = useState<File | null>(null);
  const [uploadState, setUploadState] = useState<UploadState>("idle");

  const handleSetSelectedFile = useCallback((file: File | null) => {
    setSelectedFileState(file);
    setUploadState("loading");

    setTimeout(() => {
      setUploadState("success");
    }, 5000);
  }, []);

  return (
    <FormContext.Provider
      value={{
        selectedFile,
        setSelectedFile: handleSetSelectedFile,
        uploadState,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = (): FormValues => {
  const ctx = useContext(FormContext);

  if (ctx === undefined) {
    throw new Error("useForm can only be used within FormProvider");
  }

  return ctx;
};
