"use client";

import { Config } from "@repo/types";
import { createContext, PropsWithChildren, useContext, useState } from "react";
import { mockOpheliaConfig } from "../config";

interface ConfigFormProviderProps extends PropsWithChildren {}

interface ConfigFormContextValues {
  config: Config;
  updateConfig: (newConfig: Config) => void;
}

const ConfigFormContext = createContext<ConfigFormContextValues>(
  {} as ConfigFormContextValues,
);

export const ConfigFormProvider = (props: ConfigFormProviderProps) => {
  const { children } = props;

  const [config, setConfig] = useState<Config>(mockOpheliaConfig);

  const updateConfig = (newConfig: Config) => {
    setConfig(newConfig);
  };

  return (
    <ConfigFormContext.Provider value={{ config, updateConfig }}>
      {children}
    </ConfigFormContext.Provider>
  );
};

export const useConfigForm = () => {
  const ctx = useContext(ConfigFormContext);

  if (!ctx) {
    throw new Error("useConfigForm must be used within ConfigFormProvider");
  }

  return ctx;
};
