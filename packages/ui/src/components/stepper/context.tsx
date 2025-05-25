"use client";

import { createContext, PropsWithChildren, useContext } from "react";

export interface StepperContextProps {
  current: number;
  stepsCount: number;
}

const StepperContext = createContext({} as StepperContextProps);

export const StepperContextProvider = (
  props: PropsWithChildren<StepperContextProps>
) => {
  const { children, ...rest } = props;

  return (
    <StepperContext.Provider value={{ ...rest }}>
      {children}
    </StepperContext.Provider>
  );
};

export const useStepper = () => {
  const ctx = useContext(StepperContext);

  if (!ctx) {
    throw new Error("useStep hook can only be used withi StepContext");
  }

  return ctx;
};
