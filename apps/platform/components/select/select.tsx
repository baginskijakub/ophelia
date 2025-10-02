import * as React from "react";
import { Select as BaseSelect } from "@base-ui-components/react/select";
import { cx } from "cva";

/** Select Root component that provides context */

type RootProps<T> = BaseSelect.Root.Props<T>;

function Root<T extends unknown>(props: RootProps<T>) {
  return <BaseSelect.Root {...props} />;
}

/** Select Trigger component */

type TriggerProps = BaseSelect.Trigger.Props;

const Trigger = (props: TriggerProps) => {
  return <BaseSelect.Trigger {...props} />;
};

/** Select Portal component */

type PortalProps = BaseSelect.Portal.Props;

const Portal = (props: PortalProps) => {
  return <BaseSelect.Portal {...props} />;
};

/** Select Positioner component */

type PositionerProps = BaseSelect.Positioner.Props;

const Positioner = (props: PositionerProps) => {
  return <BaseSelect.Positioner {...props} />;
};

/** Select Popup component */

type PopupProps = BaseSelect.Popup.Props;

const Popup = (props: PopupProps) => {
  const { className, ...rest } = props;

  return (
    <BaseSelect.Popup
      className={cx(
        "p-2 bg-primary floating-modal",
        "origin-[var(--transform-origin)] transition-[transform,scale,opacity]",
        "data-[ending-style]:scale-90 data-[ending-style]:opacity-0",
        "data-[starting-style]:scale-90 data-[starting-style]:opacity-0",
        className,
      )}
      {...rest}
    />
  );
};

/** Select Arrow component */

type ArrowProps = BaseSelect.Arrow.Props;

const Arrow = (props: ArrowProps) => {
  return <BaseSelect.Arrow {...props} />;
};

/** Select Item component */

type ItemProps = BaseSelect.Item.Props;

const Item = (props: ItemProps) => {
  const { className, ...rest } = props;

  return (
    <BaseSelect.Item
      className={cx(
        "px-2 py-1 rounded-md cursor-pointer min-w-[var(--anchor-width)]",
        "hover:bg-gray-100",
        className,
      )}
      {...rest}
    />
  );
};

/** Select value component */

type ValueProps = BaseSelect.Value.Props;

const Value = (props: ValueProps) => {
  return <BaseSelect.Value {...props} />;
};

/** Select Separator component */

type SeparatorProps = BaseSelect.Separator.Props;

const Separator = (props: SeparatorProps) => {
  return <BaseSelect.Separator {...props} />;
};

/** Export all components as a namespace */

export default {
  Root,
  Trigger,
  Portal,
  Positioner,
  Popup,
  Arrow,
  Item,
  Separator,
  Value,
};
