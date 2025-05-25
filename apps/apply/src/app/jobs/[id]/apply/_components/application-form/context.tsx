"use client";

import { useStepper } from "@ophelia/ui";
import { createContext, PropsWithChildren, useContext } from "react";

interface FormValues {
  step: number;
  next: () => void;
  prev: () => void;
}

const FormContext = createContext({} as FormValues);

export const FormProvider: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;
  const { step, increment, decrement } = useStepper();

  return (
    <FormContext.Provider
      value={{
        step,
        next: increment,
        prev: decrement,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export const useForm = () => {
  const ctx = useContext(FormContext);

  if (!ctx) {
    throw new Error(
      "useForm can only be used within FromProvider"
    );
  }

  return ctx;
};
