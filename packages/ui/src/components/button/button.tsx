"use client";

import { ButtonContextProvider, ButtonProps } from "./context";
import { ButtonRoot } from "./button-root";

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
