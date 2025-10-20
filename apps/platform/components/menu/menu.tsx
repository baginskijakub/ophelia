import * as React from "react";
import { DropdownMenu as BaseDropdownMenu } from "radix-ui";

import { cx } from "@platform/utils";
import { ComponentPropsWithoutRef } from "react";
import { CheckIcon, ChevronRight } from "lucide-react";

type RootProps = ComponentPropsWithoutRef<typeof BaseDropdownMenu.Root>;

const Root = (props: RootProps) => {
  return <BaseDropdownMenu.Root {...props} />;
};

type TriggerProps = ComponentPropsWithoutRef<typeof BaseDropdownMenu.Trigger>;

const Trigger = (props: TriggerProps) => {
  const { asChild = false, ...rest } = props;
  return <BaseDropdownMenu.Trigger asChild={asChild} {...rest} />;
};

type PortalProps = ComponentPropsWithoutRef<typeof BaseDropdownMenu.Portal>;

const Portal = (props: PortalProps) => {
  return <BaseDropdownMenu.Portal {...props} />;
};

type ContentProps = ComponentPropsWithoutRef<typeof BaseDropdownMenu.Content>;

const Content = (props: ContentProps) => {
  const { className, sideOffset = 5, ...rest } = props;

  return (
    <BaseDropdownMenu.Content
      sideOffset={sideOffset}
      className={cx(
        "bg-primary floating-menu",
        "min-w-[12rem] rounded-md shadow-lg",
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

type LabelProps = ComponentPropsWithoutRef<typeof BaseDropdownMenu.Label>;

const Label = (props: LabelProps) => {
  const { className, ...rest } = props;
  return (
    <BaseDropdownMenu.Label
      className={cx(
        "px-2 py-1.5 text-xs font-semibold text-secondary",
        className,
      )}
      {...rest}
    />
  );
};

type GroupProps = ComponentPropsWithoutRef<typeof BaseDropdownMenu.Group>;

const Group = (props: GroupProps) => {
  const { className, ...rest } = props;
  return <BaseDropdownMenu.Group className={cx("p-1", className)} {...rest} />;
};

type ItemProps = ComponentPropsWithoutRef<typeof BaseDropdownMenu.Item>;

const Item = (props: ItemProps) => {
  const { className, ...rest } = props;
  return (
    <BaseDropdownMenu.Item
      className={cx(
        "relative flex gap-1.5 cursor-pointer items-center rounded-sm",
        "px-2 py-1.5 text-sm text-primary",
        "hover:bg-gray-100",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...rest}
    />
  );
};

type SeparatorProps = ComponentPropsWithoutRef<
  typeof BaseDropdownMenu.Separator
>;

const Separator = (props: SeparatorProps) => {
  const { className, ...rest } = props;
  return (
    <BaseDropdownMenu.Separator
      className={cx("-mx-1 my-1 h-px bg-primary-style", className)}
      {...rest}
    />
  );
};

type CheckboxItemProps = ComponentPropsWithoutRef<
  typeof BaseDropdownMenu.CheckboxItem
>;

const CheckboxItem = (props: CheckboxItemProps) => {
  const { className, children, ...rest } = props;
  return (
    <BaseDropdownMenu.CheckboxItem
      className={cx(
        "relative flex cursor-pointer select-none items-center rounded-sm",
        "py-1.5 pl-8 pr-2 text-sm outline-none transition-colors",
        "focus:bg-gray-200 focus:text-primary",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...rest}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <BaseDropdownMenu.ItemIndicator>
          <CheckIcon />
        </BaseDropdownMenu.ItemIndicator>
      </span>
      {children}
    </BaseDropdownMenu.CheckboxItem>
  );
};

type RadioItemProps = ComponentPropsWithoutRef<
  typeof BaseDropdownMenu.RadioItem
>;

const RadioItem = (props: RadioItemProps) => {
  const { className, children, ...rest } = props;
  return (
    <BaseDropdownMenu.RadioItem
      className={cx(
        "relative flex cursor-pointer select-none items-center rounded-sm",
        "py-1.5 pl-8 pr-2 text-sm outline-none transition-colors",
        "focus:bg-gray-200 focus:text-primary",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        className,
      )}
      {...rest}
    >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <BaseDropdownMenu.ItemIndicator>
          <div className="h-2 w-2 rounded-full bg-current" />
        </BaseDropdownMenu.ItemIndicator>
      </span>
      {children}
    </BaseDropdownMenu.RadioItem>
  );
};

type RadioGroupProps = ComponentPropsWithoutRef<
  typeof BaseDropdownMenu.RadioGroup
>;

const RadioGroup = (props: RadioGroupProps) => {
  return <BaseDropdownMenu.RadioGroup {...props} />;
};

type SubTriggerProps = ComponentPropsWithoutRef<
  typeof BaseDropdownMenu.SubTrigger
>;

const SubTrigger = (props: SubTriggerProps) => {
  const { className, children, ...rest } = props;
  return (
    <BaseDropdownMenu.SubTrigger
      className={cx(
        "flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none",
        "focus:bg-gray-200 focus:text-primary data-[state=open]:bg-gray-200 data-[state=open]:text-primary",
        className,
      )}
      {...rest}
    >
      {children}

      <ChevronRight />
    </BaseDropdownMenu.SubTrigger>
  );
};

type SubContentProps = ComponentPropsWithoutRef<
  typeof BaseDropdownMenu.SubContent
>;

const SubContent = (props: SubContentProps) => {
  const { className, sideOffset = 2, alignOffset = -4, ...rest } = props;
  return (
    <BaseDropdownMenu.SubContent
      sideOffset={sideOffset}
      alignOffset={alignOffset}
      className={cx(
        "bg-primary floating-menu",
        "min-w-[12rem] rounded-md shadow-lg",
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

export default {
  Root,
  Trigger,
  Portal,
  Content,
  Label,
  Group,
  Item,
  Separator,
  CheckboxItem,
  RadioItem,
  RadioGroup,
  SubTrigger,
  SubContent,
};
