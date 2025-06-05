import clsx from "clsx";
import { ICON_MAP, IconName } from "./icons";
import styles from "./icon.module.css";

type IconSize = "xs" | "sm" | "md" | "lg" | "xl";

type IconColor = "icon-90" | "icon-60" | "icon-30" | "brand" | "brand-contrast";

const SIZE_MAP: Record<IconSize, string> = {
  xs: "12px",
  sm: "14px",
  md: "16px",
  lg: "20px",
  xl: "24px",
};

export interface IconProps
  extends Omit<React.HTMLAttributes<SVGSVGElement>, "color"> {
  name: IconName;
  size?: IconSize;
  color?: IconColor;
  as?: React.ElementType;
}

export const Icon: React.FC<IconProps> = (props) => {
  const { name, size = "sm", color, as, className, ...rest } = props;

  const Element = ICON_MAP[name];
  const rootClass = clsx({ [styles[`color-${color}`]]: color }, className);

  return (
    <Element
      name={name}
      color="currentColor"
      strokeWidth={2}
      size={SIZE_MAP[size]}
      className={rootClass}
      {...rest}
    />
  );
};
