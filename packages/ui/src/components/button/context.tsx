import React, { createContext, useContext, useState } from "react";
import { ButtonSize, ButtonState, ButtonVariant } from "./types";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  as?: React.ElementType;
  loading?: boolean;
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement>
  ) => Promise<boolean | void> | void;
}

interface ButtonContextValues {
  buttonProps: React.ButtonHTMLAttributes<HTMLButtonElement>;
  variant: ButtonVariant;
  size: ButtonSize;
  state: ButtonState;
  fullWidth: boolean;
  as?: React.ElementType;
}

const ButtonContext = createContext({} as ButtonContextValues);

export const ButtonContextProvider = (props: ButtonProps) => {
  const {
    children,
    size = "md",
    variant = "solid",
    fullWidth = false,
    as,
    onClick: defaultOnClick,
    loading,
    ...rest
  } = props;

  const [state, setState] = useState<ButtonState>(
    loading ? "loading" : "default"
  );

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!defaultOnClick || rest.disabled || state !== "default") return;

    const statePromise = defaultOnClick(e);

    const isPromise = statePromise instanceof Promise;

    if (!isPromise) return;

    const scheduleStateReset = () => {
      setTimeout(() => setState("default"), 2000);
    };

    setState("loading");

    const res = await statePromise;

    if (res === true) {
      setState("success");
      scheduleStateReset();
      return;
    }

    if (res === false) {
      setState("error");
      scheduleStateReset();
      return;
    }

    setState("default");
  };

  return (
    <ButtonContext.Provider
      value={{
        state,
        size,
        variant,
        fullWidth,
        as,
        buttonProps: { onClick, ...rest },
      }}
    >
      {children}
    </ButtonContext.Provider>
  );
};

export const useButton = () => {
  const ctx = useContext(ButtonContext);

  if (!ctx) {
    throw new Error(
      "useButton hook can only be used within the Button component"
    );
  }

  return ctx;
};
