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
  const { asChild = false, ...rest } = props; // Radix Trigger often has asChild
  return <BasePopover.Trigger asChild={asChild} {...rest} />;
};

/** Popover Portal component */

type PortalProps = ComponentPropsWithoutRef<typeof BasePopover.Portal>;

const Portal = (props: PortalProps) => {
  return <BasePopover.Portal {...props} />;
};

/** Popover Content component */

type ContentProps = ComponentPropsWithoutRef<typeof BasePopover.Content>;

const Content = (props: ContentProps) => {
  const { className, sideOffset = 5, ...rest } = props; // Add sideOffset as a common prop

  return (
    <BasePopover.Content
      sideOffset={sideOffset} // Default offset from trigger
      className={cx(
        "bg-primary floating-menu", // Reusing your floating-menu style
        "p-4 rounded-md shadow-lg", // Common popover styling
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

/** Popover Close component (optional but often useful) */

type CloseProps = ComponentPropsWithoutRef<typeof BasePopover.Close>;

const Close = (props: CloseProps) => {
  const { className, ...rest } = props;
  return (
    <BasePopover.Close
      className={cx(
        "absolute top-2 right-2 p-1 rounded-sm opacity-70",
        "transition-opacity hover:opacity-100",
        "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary", // Focus style
        className,
      )}
      {...rest}
    />
  );
};

/** Popover Arrow component (optional) */

type ArrowProps = ComponentPropsWithoutRef<typeof BasePopover.Arrow>;

const Arrow = (props: ArrowProps) => {
  const { className, ...rest } = props;
  return (
    <BasePopover.Arrow
      className={cx("fill-primary", className)} // Match the popover background
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
  Close,
  Arrow,
};
