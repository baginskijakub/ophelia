import { PropsWithChildren } from "react";
import { PopoverProvider } from "./context";

const SIDE_OPTIONS = ["top", "right", "bottom", "left"] as const;
const ALIGN_OPTIONS = ["start", "center", "end"] as const;

type Side = (typeof SIDE_OPTIONS)[number];
type Align = (typeof ALIGN_OPTIONS)[number];

export interface PopoverProps {
  side?: Side;
  align?: Align;
  sideOffset?: number;
  alignOffset?: number;
}

export const Root = (props: PropsWithChildren<PopoverProps>) => {
  const { children, ...rest } = props;

  return <PopoverProvider value={{ ...rest }}>{children}</PopoverProvider>;
};
