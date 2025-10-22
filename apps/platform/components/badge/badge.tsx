import { cva, cx, VariantProps } from "@platform/utils";
import { PolymorphicProps } from "../types";
import { Slot } from "../slot";

const buttonVariants = cva({
  base: "inline-flex items-center gap-1 font-mono text-secondary",
  variants: {
    variant: {
      subtle: "",
      outline: "border-primary",
    },
    color: {
      "0": "bg-white",
      "100": "bg-gray-100",
      "200": "bg-gray-200",
      "300": "bg-gray-300",
    },
    size: {
      sm: "text-xs px-1 py-0.5 rounded-sm",
      md: "text-sm px-2 py-1 rounded-md",
      lg: "text-md px-3 py-1.5 rounded-lg",
    },
  },
});

interface BadgeProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "color">,
    VariantProps<typeof buttonVariants>,
    PolymorphicProps {}

export const Badge = (props: BadgeProps) => {
  const {
    children,
    className,
    color = "300",
    size = "sm",
    variant = "subtle",
    asChild,
    ...rest
  } = props;

  const Tag = asChild ? Slot : "span";

  return (
    <Tag
      {...rest}
      className={cx(
        buttonVariants({
          color,
          size,
          variant,
        }),
        className,
      )}
    >
      {children}
    </Tag>
  );
};
