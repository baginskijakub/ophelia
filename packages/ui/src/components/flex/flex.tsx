import React, { CSSProperties, HTMLAttributes } from "react";
import styles from "./flex.module.css";
import clsx from "clsx";
import { Gap } from "./types";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: CSSProperties["flexDirection"];
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  gap?: Gap;
  fullWidth?: boolean;
  fill?: boolean;
}

export const Flex: React.FC<FlexProps> = (props) => {
  const {
    children,
    className,
    direction,
    align,
    justify,
    gap,
    fullWidth,
    fill,
    ...rest
  } = props;

  const classNames = clsx(
    styles.root,
    { [`flex-direction-${direction}`]: direction },
    { [`justify-content-${justify}`]: justify },
    { [`align-items-${align}`]: align },
    { [`gap-${gap?.toString().replace(".", "")}`]: gap },
    { [styles.fullWidth]: fullWidth },
    { [styles.fillWidth]: fill },
    className
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};
