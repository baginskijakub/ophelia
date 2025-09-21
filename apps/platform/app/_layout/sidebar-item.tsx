import clsx from "clsx";

interface SidebarItemProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  current?: boolean;
}

export const SidebarItem = (props: SidebarItemProps) => {
  const { children, current, ...rest } = props;

  const rootClass = clsx(
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
