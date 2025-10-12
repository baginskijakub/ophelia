"use client";

import { ThemeConfig } from "@repo/types";
import {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from "react";
import { useConfigForm } from "./config-form";

interface ThemeFormProviderProps extends PropsWithChildren {}

interface ThemeFormContextValues {
  theme: ThemeConfig;
  setTheme: (themeName: string) => void;
  updateTheme: (newTheme: ThemeConfig) => void;
}

const ThemeFormContext = createContext<ThemeFormContextValues>(
  {} as ThemeFormContextValues,
);

export const ThemeFormProvider = (props: ThemeFormProviderProps) => {
  const { children } = props;
  const { config, updateConfig } = useConfigForm();

  const [currentTheme, setCurrentTheme] = useState<string>(
    config.themes[0]?.name as string,
  );

  const theme: ThemeConfig = useMemo(() => {
    return config.themes.find(
      (theme) => theme.name === currentTheme,
    ) as ThemeConfig;
  }, [config.themes, currentTheme]);

  const updateTheme = (newTheme: ThemeConfig) => {
    const updatedThemes = config.themes.map((theme) =>
      theme.name === newTheme.name ? newTheme : theme,
    );

    updateConfig({
      ...config,
      themes: updatedThemes,
    });
  };

  return (
    <ThemeFormContext.Provider
      value={{ theme, updateTheme, setTheme: setCurrentTheme }}
    >
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
