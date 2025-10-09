import { cva, cx, VariantProps } from "@platform/utils";

const inputVariants = cva({
  base: [
    "w-full px-3 rounded-md transition",
    "focus:outline-none focus:ring-2 ring-gray-500",
    "disabled:opacity-50 disabled:cursor-not-allowed",
  ],
  variants: {
    size: {
      1: "h-7 text-sm",
      2: "h-8 text-md",
      3: "h-9 text-lg",
    },
    variant: {
      subtle: "bg-gray-300",
      outline: "border-primary",
    },
    color: {
      0: "bg-white",
      100: "bg-gray-100",
      200: "bg-gray-200",
      300: "bg-gray-300",
    },
  },
});

interface InputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "size" | "color">,
    VariantProps<typeof inputVariants> {}

export const Input = (props: InputProps) => {
  const {
    className,
    variant = "outline",
    type = "text",
    size = 2,
    color = 0,
    ...rest
  } = props;

  return (
    <input
      type={type}
      data-slot="input"
      className={cx(inputVariants({ variant, size, color }), className)}
      {...rest}
    />
  );
};
