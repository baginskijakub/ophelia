import { createContext, useContext } from "react";
import { PopoverProps } from "./types";

const PopoverContext = createContext<PopoverProps>({} as PopoverProps);

export const PopoverProvider = PopoverContext.Provider;

export const usePopoverContext = () => {
  const context = useContext(PopoverContext);

  if (!context) {
    throw new Error("usePopoverContext must be used within a PopoverProvider");
  }

  return context;
};
