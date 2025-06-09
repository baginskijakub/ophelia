"use client";

import { ButtonContextProvider, ButtonProps } from "./context";
import { ButtonRoot } from "./button-root";

export const Button = (props: ButtonProps) => {
  const { children, ...rest } = props;

  return (
    <ButtonContextProvider {...rest}>
      <ButtonRoot>{children}</ButtonRoot>
    </ButtonContextProvider>
  );
};
