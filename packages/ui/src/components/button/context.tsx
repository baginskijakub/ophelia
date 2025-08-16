import React, { createContext, useContext, useState } from "react";
import { ButtonSize, ButtonState, ButtonVariant } from "./types";
import { ButtonProps } from "./types";
import { PropsOf } from "../types";

interface ButtonContextValues<T extends React.ElementType = "button"> {
  buttonProps: Omit<PropsOf<T>, "as" | "asChild" | "ref" | "children"> & {
    onClick: (e: React.MouseEvent<HTMLElement>) => void;
  };
  variant: ButtonVariant;
  size: ButtonSize;
  state: ButtonState;
  fullWidth: boolean;
  as?: React.ElementType;
}

const ButtonContext = createContext({} as ButtonContextValues);

export const ButtonContextProvider = <T extends React.ElementType = "button">(
  props: ButtonProps<T>,
) => {
  const {
    children,
    size = "md",
    variant = "solid",
    fullWidth = false,
    as,
    onClick: defaultOnClick,
    loading,
    asChild,
    ref,
    ...rest
  } = props;

  const [state, setState] = useState<ButtonState>(
    loading ? "loading" : "default",
  );

  const onClick = async (e: React.MouseEvent<HTMLElement>) => {
    if (!defaultOnClick || (rest as any).disabled || state !== "default")
      return;

    const statePromise = defaultOnClick(
      e as React.MouseEvent<HTMLButtonElement>,
    );

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
        buttonProps: {
          onClick: onClick,

          ...(rest as PropsOf<T>),
        },
      }}
    >
      {children}
    </ButtonContext.Provider>
  );
};

export const useButton = <T extends React.ElementType = "button">() => {
  const ctx = useContext(ButtonContext) as ButtonContextValues<T>;

  if (!ctx) {
    throw new Error(
      "useButton hook can only be used within the Button component",
    );
  }

  return ctx;
};
