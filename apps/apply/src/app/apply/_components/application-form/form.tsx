"use client";

import { FormProvider } from "./context";
import { Content } from "./content";

export const Form = () => {
  return (
    <FormProvider>
      <Content />
    </FormProvider>
  );
};
