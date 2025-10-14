import { cva, VariantProps } from "@platform/utils";

const iconButtonVariants = cva({
  base: "flex items-center justify-center cursor-pointer transition",
  variants: {
    variant: {
      solid: "bg-gray-900 hover:bg-gray-800 text-white",
      soft: "bg-gray-100 hover:bg-gray-200 text-secondary",
      outline: "bg-transparent border-primary hover:bg-gray-100 text-secondary",
      surface: "bg-gray-100 hover:bg-gray-200 text-secondary border-primary",
      ghost: "bg-transparent hover:bg-gray-100 text-secondary",
    },
    size: {
      xs: "h-6 w-6",
      sm: "h-7 w-7",
      md: "h-8 w-8",
      lg: "h-9 w-9",
    },
    rounded: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      full: "rounded-full",
    },
  },
});

interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof iconButtonVariants> {}

export const IconButton = (props: IconButtonProps) => {
  const {
    variant = "solid",
    size = "md",
    rounded = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = iconButtonVariants({ variant, size, rounded, className });

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
