import { cva, cx, VariantProps } from "cva";

const inputVariants = cva(
  [
    "w-full px-3 rounded-md transition",
    "focus:outline-none focus:ring-2 ring-gray-500",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ],
  {
    variants: {
      size: {
        1: "h-8 text-sm",
        2: "h-9 text-base",
        3: "h-10 text-lg",
      },
      variant: {
        subtle: "bg-gray-300",
        outline: "border-primary ",
      },
    },
  },
);

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

export const Input = (props: InputProps) => {
  const {
    className,
    variant = "outline",
    type = "text",
    size = 2,
    ...rest
  } = props;

  return (
    <input
      type={type}
      data-slot="input"
      className={cx(inputVariants({ variant, size }), className)}
      {...rest}
    />
  );
};
