import { usePopover } from "./use-popover";
import { DOMAttrs, PolymorphicProps } from "../types";
import { Slot } from "../slot";
import { Portal } from "../portal";

interface ContentProps
  extends DOMAttrs<HTMLDivElement>,
    PolymorphicProps<HTMLDivElement> {}

export const Content = (props: ContentProps) => {
  const { asChild, ...rest } = props;

  const Tag = asChild ? Slot : "div";

  const { getContentProps } = usePopover();

  return (
    <Portal>
      <Tag {...getContentProps(rest)} />
    </Portal>
  );
};
