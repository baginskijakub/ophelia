import * as React from "react";
import { Select as BaseSelect } from "radix-ui";

import { cx } from "@platform/utils";
import { ComponentPropsWithoutRef } from "react";
import { CheckIcon } from "lucide-react";

/** Select Root component that provides context */

type RootProps = ComponentPropsWithoutRef<typeof BaseSelect.Root>;

const Root = (props: RootProps) => {
  return <BaseSelect.Root {...props} />;
};

/** Select Trigger component */

type TriggerProps = ComponentPropsWithoutRef<typeof BaseSelect.Trigger>;

const Trigger = (props: TriggerProps) => {
  return <BaseSelect.Trigger {...props} />;
};

/** Select value component */

type ValueProps = ComponentPropsWithoutRef<typeof BaseSelect.Value>;

const Value = (props: ValueProps) => {
  return <BaseSelect.Value {...props} />;
};

/** Select Icon component */

type IconProps = ComponentPropsWithoutRef<typeof BaseSelect.Icon>;

const Icon = (props: IconProps) => {
  return <BaseSelect.Icon {...props} />;
};

/** Select Portal component */

type PortalProps = ComponentPropsWithoutRef<typeof BaseSelect.Portal>;

const Portal = (props: PortalProps) => {
  return <BaseSelect.Portal {...props} />;
};

/** Select Content component */

type ContentProps = ComponentPropsWithoutRef<typeof BaseSelect.Content>;

const Content = (props: ContentProps) => {
  const { className, ...rest } = props;

  return (
    <BaseSelect.Content
      className={cx("bg-primary floating-menu", className)}
      {...rest}
    />
  );
};

/** Select Viewport component */

type ViewportProps = ComponentPropsWithoutRef<typeof BaseSelect.Viewport>;

const Viewport = (props: ViewportProps) => {
  const { className, ...rest } = props;

  return <BaseSelect.Viewport className={cx("p-1", className)} {...rest} />;
};

/** Select Group component */

type Group = ComponentPropsWithoutRef<typeof BaseSelect.Group>;

const Group = (props: Group) => {
  return <BaseSelect.Group {...props} />;
};

/** Select Label component */

type LabelProps = ComponentPropsWithoutRef<typeof BaseSelect.Label>;

const Label = (props: LabelProps) => {
  const { className, ...rest } = props;

  return (
    <BaseSelect.Label
      className={cx("px-2 py-1 text-sm font-medium text-secondary", className)}
      {...rest}
    />
  );
};

/** Select Item component */

type ItemProps = ComponentPropsWithoutRef<typeof BaseSelect.Item>;

const Item = (props: ItemProps) => {
  const { className, ...rest } = props;

  return (
    <BaseSelect.Item
      className={cx(
        "flex items-center gap-2 justify-between text-sm",
        "px-2 py-1 rounded-md cursor-pointer",
        "hover:bg-gray-100",
        className,
      )}
      {...rest}
    />
  );
};

/** Select Item Indicator component */

type ItemIndicatorProps = ComponentPropsWithoutRef<
  typeof BaseSelect.ItemIndicator
>;

const ItemIndicator = (props: ItemIndicatorProps) => {
  const { className, ...rest } = props;
  return (
    <BaseSelect.ItemIndicator {...rest}>
      <CheckIcon className={cx("w-4 h-4 text-gray-700", className)} />
    </BaseSelect.ItemIndicator>
  );
};

/** Export all components as a namespace */

export default {
  Root,
  Trigger,
  Icon,
  Portal,
  Content,
  Viewport,
  Group,
  Label,
  Item,
  ItemIndicator,
  Value,
};
