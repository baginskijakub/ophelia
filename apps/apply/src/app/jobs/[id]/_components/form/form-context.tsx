"use client";

import * as React from "react";
import { validate } from "./form-validation";
import { FormContextValue, FormErrors, FormValues } from "./types";

const FormContext = React.createContext<FormContextValue | null>(null);

export const FormProvider = (props: React.PropsWithChildren) => {
  const { children } = props;
  const [values, setValues] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    resume: null,
  });
  const [errors, setErrors] = React.useState<FormErrors>({});

  const setFieldValue = <T extends keyof FormValues>(
    field: T,
    value: FormValues[T]
  ) => {
    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e?: React.FormEvent<HTMLFormElement>) => {
    e?.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      return true;
    }
  };

  const contextValue = {
    values,
    errors,
    setFieldValue,
    handleSubmit,
  };

  return (
    <FormContext.Provider value={contextValue}>{children}</FormContext.Provider>
  );
};

export const useForm = () => {
  const context = React.useContext(FormContext);
  if (!context) {
    throw new Error("useForm must be used within a FormProvider");
  }
  return context;
};
