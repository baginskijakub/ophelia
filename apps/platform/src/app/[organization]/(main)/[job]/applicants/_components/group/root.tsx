import { PropsWithChildren } from "react";
import { GroupProvider } from "./context";

export const Root = (props: PropsWithChildren) => {
  const { children } = props;

  return (
    <GroupProvider>
      <div>
        {children}
      </div>
    </GroupProvider>
  );
}
