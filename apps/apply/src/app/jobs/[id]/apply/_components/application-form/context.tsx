"use client";

import { useStepper } from "@ophelia/ui";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useState,
  useCallback,
} from "react";

interface FormValues {
  step: number;
  next: () => void;
  prev: () => void;
  selectedFile: File | null;
  setSelectedFile: (file: File | null) => void;
}

const FormContext = createContext<FormValues | undefined>(undefined);

export const FormProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const { step, increment, decrement } = useStepper();
  const [selectedFile, setSelectedFileState] = useState<File | null>(null);

  const handleSetSelectedFile = useCallback((file: File | null) => {
    setSelectedFileState(file);
  }, []);

  return (
    <FormContext.Provider
      value={{
        step,
        next: increment,
        prev: decrement,
        selectedFile,
        setSelectedFile: handleSetSelectedFile,
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
