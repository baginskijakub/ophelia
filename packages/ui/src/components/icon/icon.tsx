import { ICON_MAP, IconName } from "./icons";
type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

const SIZE_MAP: Record<IconSize, string> = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "20px",
  xl: "24px",
};

export interface IconProps extends React.HTMLAttributes<SVGSVGElement> {
  name: IconName;
  size?: IconSize;
  as?: React.ElementType;
}

export const Icon: React.FC<IconProps> = (props) => {
  const { name, size = "sm", as, ...rest } = props;

  const Element = ICON_MAP[name];

  return (
    <Element
      name={name}
      color="currentColor"
      strokeWidth={2}
      size={SIZE_MAP[size]}
      {...rest}
    />
  );
};
