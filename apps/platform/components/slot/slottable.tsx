import { PropsWithChildren } from "react";

export const Slottable = (props: PropsWithChildren): React.ReactNode => {
  const { children } = props;

  return <>{children}</>;
};
