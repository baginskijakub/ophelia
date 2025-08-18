"use client";

import { ButtonContextProvider } from "./context";
import { ButtonRoot } from "./button-root";
import { ButtonProps } from "./types";

export const Button = <T extends React.ElementType = "button">(
  props: ButtonProps<T>,
) => {
  const { children, ...rest } = props;

  return (
    <ButtonContextProvider {...rest}>
      <ButtonRoot>{children}</ButtonRoot>
    </ButtonContextProvider>
  );
};
