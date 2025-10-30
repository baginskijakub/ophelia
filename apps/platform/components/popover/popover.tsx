import * as React from "react";
import { Popover as BasePopover } from "radix-ui";

import { cx } from "@platform/utils";
import { ComponentPropsWithoutRef } from "react";

/** Popover Root component that provides context */

type RootProps = ComponentPropsWithoutRef<typeof BasePopover.Root>;

const Root = (props: RootProps) => {
  return <BasePopover.Root {...props} />;
};

/** Popover Trigger component */

type TriggerProps = ComponentPropsWithoutRef<typeof BasePopover.Trigger>;

const Trigger = (props: TriggerProps) => {
  return <BasePopover.Trigger {...props} />;
};

/** Popover Portal component */

type PortalProps = ComponentPropsWithoutRef<typeof BasePopover.Portal>;

const Portal = (props: PortalProps) => {
  return <BasePopover.Portal {...props} />;
};

/** Popover Content component */

type ContentProps = ComponentPropsWithoutRef<typeof BasePopover.Content>;

const Content = (props: ContentProps) => {
  const { className, sideOffset = 5, ...rest } = props;

  return (
    <BasePopover.Content
      sideOffset={sideOffset}
      className={cx(
        "bg-primary floating-menu",
        "p-4 rounded-md shadow-lg",
        "w-[var(--radix-popover-trigger-width)]",
        "data-[state=open]:animate-in data-[state=closed]:animate-out",
        "data-[side=top]:slide-in-from-bottom-2",
        "data-[side=bottom]:slide-in-from-top-2",
        "data-[side=left]:slide-in-from-right-2",
        "data-[side=right]:slide-in-from-left-2",
        className,
      )}
      {...rest}
    />
  );
};

/** Export all components as a namespace */

export default {
  Root,
  Trigger,
  Portal,
  Content,
};
