"use client";

import { ThemeConfig } from "@repo/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { mockOpheliaConfig } from "../config";

interface ThemeFormProviderProps extends PropsWithChildren {}

interface ThemeFormContextValues {
  theme: ThemeConfig;
  updateTheme: (newTheme: ThemeConfig) => void;
}

const ThemeFormContext = createContext<ThemeFormContextValues>(
  {} as ThemeFormContextValues,
);

export const ThemeFormProvider = (props: ThemeFormProviderProps) => {
  const { children } = props;

  const [theme, setTheme] = useState<ThemeConfig>(
    mockOpheliaConfig.themes[0] as unknown as ThemeConfig,
  );

  const updateTheme = (newTheme: ThemeConfig) => {
    setTheme(newTheme);
  };

  return (
    <ThemeFormContext.Provider value={{ theme, updateTheme }}>
      {children}
    </ThemeFormContext.Provider>
  );
};

export const useThemeForm = () => {
  const ctx = useContext(ThemeFormContext);

  if (!ctx) {
    throw new Error("useThemeForm must be used within ThemeFormProvider");
  }

  return ctx;
};
