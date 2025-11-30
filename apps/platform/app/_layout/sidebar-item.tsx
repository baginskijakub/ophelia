"use client";

import { cx } from "@platform/utils";
import { useSelectedLayoutSegment } from "next/navigation";

interface SidebarItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

export const SidebarItem = (props: SidebarItemProps) => {
  const { children, ...rest } = props;

  const currentSegment = useSelectedLayoutSegment();

  const current = rest.href === `/${currentSegment}`;

  const rootClass = cx(
    "text-sm/7 text-secondary h-7 line px-2 rounded-sm block",
    {
      "bg-gray-300": current,
      "hover:bg-gray-200": !current,
    },
  );

  return (
    <a {...rest} className={rootClass}>
      {children}
    </a>
  );
};
