import { cx } from "cva";

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: "100" | "200" | "300";
}

export const Badge = (props: BadgeProps) => {
  const { children, className, color = "100", ...rest } = props;

  const COLOR_MAP = {
    "100": "bg-gray-100",
    "200": "bg-gray-200",
    "300": "bg-gray-300",
  } as const;

  return (
    <span
      {...rest}
      className={cx(
        "inline-flex text-xs font-mono text-tertiary p-1 rounded-sm bg-gray-100",
        COLOR_MAP[color],
        className,
      )}
    >
      {children}
    </span>
  );
};
