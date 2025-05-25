"use client";

import { createContext, PropsWithChildren, useContext } from "react";

export interface StepContextProps {
  index: number;
}

const StepContext = createContext({} as StepContextProps);

export const StepContextProvider = (
  props: PropsWithChildren<StepContextProps>
) => {
  const { children, ...rest } = props;

  return (
    <StepContext.Provider value={{ ...rest }}>{children}</StepContext.Provider>
  );
};

export const useStep = () => {
  const ctx = useContext(StepContext);

  if (!ctx) {
    throw new Error("useStep hook can only be used withi StepContext");
  }

  return ctx;
};
