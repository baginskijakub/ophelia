import { cva, cx, VariantProps } from "cva";

const buttonVariants = cva(
  "inline-flex items-center gap-1 font-mono text-secondary rounded-sm",
  {
    variants: {
      color: {
        "100": "bg-gray-100",
        "200": "bg-gray-200",
        "300": "bg-gray-300",
      },
      size: {
        sm: "text-xs px-1 py-0.5",
        md: "text-sm px-2 py-1",
        lg: "text-md px-3 py-1.5",
      },
    },
  },
);

interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof buttonVariants> {}

export const Badge = (props: BadgeProps) => {
  const { children, className, color = "100", size = "sm", ...rest } = props;

  return (
    <span
      {...rest}
      className={cx(
        buttonVariants({
          color,
          size,
        }),
        className,
      )}
    >
      {children}
    </span>
  );
};
