import * as React from "react";
import { Menu as BaseMenu } from "@base-ui-components/react/menu";

export default function Menu() {
  return (
    <BaseMenu.Root>
      <BaseMenu.Trigger className="flex h-10 items-center justify-center gap-1.5 rounded-md border border-gray-200 bg-gray-50 px-3.5 text-base font-medium text-gray-900 select-none hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:-outline-offset-1 focus-visible:outline-blue-800 active:bg-gray-100 data-[popup-open]:bg-gray-100">
        Song
      </BaseMenu.Trigger>
      <BaseMenu.Portal>
        <BaseMenu.Positioner className="outline-none" sideOffset={8}>
          <BaseMenu.Popup className="origin-[var(--transform-origin)] rounded-md bg-[canvas] py-1 text-gray-900 shadow-lg shadow-gray-200 outline outline-1 outline-gray-200 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 dark:shadow-none dark:-outline-offset-1 dark:outline-gray-300">
            <BaseMenu.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
              esa
            </BaseMenu.Arrow>
            <BaseMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900">
              Add to Library
            </BaseMenu.Item>
            <BaseMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900">
              Add to Playlist
            </BaseMenu.Item>
            <BaseMenu.Separator className="mx-4 my-1.5 h-px bg-gray-200" />
            <BaseMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900">
              Play Next
            </BaseMenu.Item>
            <BaseMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900">
              Play Last
            </BaseMenu.Item>
            <BaseMenu.Separator className="mx-4 my-1.5 h-px bg-gray-200" />
            <BaseMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900">
              Favorite
            </BaseMenu.Item>
            <BaseMenu.Item className="flex cursor-default py-2 pr-8 pl-4 text-sm leading-4 outline-none select-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-1 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-gray-900">
              Share
            </BaseMenu.Item>
          </BaseMenu.Popup>
        </BaseMenu.Positioner>
      </BaseMenu.Portal>
    </BaseMenu.Root>
  );
}

/** Props, context and hook */

type MenuVariants = "default-border" | "default" | "surface-border" | "surface";
type MenuSizes = "sm" | "md" | "lg";

type MenuProps = {
  variant?: MenuVariants;
  size?: MenuSizes;
};

const MenuContext = React.createContext<MenuProps>({} as MenuProps);

export const useMenuContext = () => {
  const ctx = React.useContext(MenuContext);

  if (ctx === undefined) {
    throw new Error("useMenuContext must be used within a MenuProvider");
  }

  return ctx;
};

/** Menu Root component that provides context */

type RootProps = MenuProps & BaseMenu.Root.Props;

export const Root = (props: RootProps) => {
  const { variant = "default", size = "md", ...rest } = props;
  return (
    <MenuContext.Provider value={{ variant, size }}>
      <BaseMenu.Root {...rest} />
    </MenuContext.Provider>
  );
};

/** Menu Trigger component */

type TriggerProps = BaseMenu.Trigger.Props;

export const Trigger = (props: TriggerProps) => {
  return <BaseMenu.Trigger {...props} />;
};

/** Menu Portal component */

type PortalProps = BaseMenu.Portal.Props;

export const Portal = (props: PortalProps) => {
  return <BaseMenu.Portal {...props} />;
};

/** Menu Positioner component */

type PositionerProps = BaseMenu.Positioner.Props;

export const Positioner = (props: PositionerProps) => {
  return <BaseMenu.Positioner {...props} />;
};

/** Menu Popup component */

type PopupProps = BaseMenu.Popup.Props;

export const Popup = (props: PopupProps) => {
  return <BaseMenu.Popup {...props} />;
};

/** Menu Arrow component */

type ArrowProps = BaseMenu.Arrow.Props;

export const Arrow = (props: ArrowProps) => {
  return <BaseMenu.Arrow {...props} />;
};

/** Menu Item component */

type ItemProps = BaseMenu.Item.Props;

export const Item = (props: ItemProps) => {
  return <BaseMenu.Item {...props} />;
};

/** Menu Separator component */

type SeparatorProps = BaseMenu.Separator.Props;

export const Separator = (props: SeparatorProps) => {
  return <BaseMenu.Separator {...props} />;
};
