import { cva, VariantProps } from "@platform/utils";

const buttonVariants = cva({
  base: "inline-flex items-center",
  variants: {
    variant: {
      solid: "bg-gray-800 hover:bg-gray-700 text-white",
      surface: "",
      outline: "",
      ghost: "",
    },
    size: {
      sm: "text-sm h-7 px-2 rounded-sm",
      md: "text-base h-8 px-3 rounded-md",
      lg: "text-lg h-9 px-4 rounded-lg",
    },
  },
});

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const Button = (props: ButtonProps) => {
  const {
    variant = "solid",
    size = "md",
    className,
    children,
    ...rest
  } = props;

  const classes = buttonVariants({ variant, size, className });

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
};
