import clsx from "clsx";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  id: string;
  variant?: "subtle" | "outline";
  size?: 1 | 2 | 3;
}

export const Input = (props: InputProps) => {
  const {
    className,
    variant = "outline",
    type = "text",
    size = 2,
    ...rest
  } = props;

  const sizeClasses = {
    1: "h-8 text-sm",
    2: "h-9 text-base",
    3: "h-10 text-lg",
  };

  const variantClasses = {
    subtle: "bg-gray-300",
    outline: "border-primary ",
  };

  return (
    <input
      type={type}
      data-slot="input"
      className={clsx(
        "w-full px-3 rounded-md transition focus:outline-none focus:ring-2 ring-gray-500 disabled:opacity-50 disabled:cursor-not-allowed",
        sizeClasses[size],
        variantClasses[variant],
        className,
      )}
      {...rest}
    />
  );
};
