import { usePopover } from "./use-popover";
import { DOMAttrs, PolymorphicProps } from "../types";
import { Slot } from "../slot";

interface TriggerProps
  extends DOMAttrs<HTMLButtonElement>,
    PolymorphicProps<HTMLButtonElement> {}

export const Trigger = (props: TriggerProps) => {
  const { asChild, ...rest } = props;

  const Tag = asChild ? Slot : "button";

  const { getTriggerProps } = usePopover();

  return <Tag {...getTriggerProps(rest)} />;
};
