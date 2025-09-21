interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {}

export const Badge = (props: BadgeProps) => {
  const { children, ...rest } = props;

  return (
    <span
      {...rest}
      className="inline-flex text-xs font-mono text-tertiary p-1 rounded-sm bg-gray-100"
    >
      {children}
    </span>
  );
};
