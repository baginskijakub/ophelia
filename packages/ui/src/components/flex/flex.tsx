import { CSSProperties, HTMLAttributes } from "react";
import styles from "./flex.module.css";
import clsx from "clsx";
import { Gap } from "./types";

interface FlexProps extends HTMLAttributes<HTMLDivElement> {
  direction?: CSSProperties["flexDirection"];
  align?: CSSProperties["alignItems"];
  justify?: CSSProperties["justifyContent"];
  gap?: Gap;
  fullWidth?: boolean;
  fillWidth?: boolean;
}

export const Flex = (props: FlexProps) => {
  const {
    children,
    className,
    direction,
    align,
    justify,
    gap,
    fullWidth,
    fillWidth,
    ...rest
  } = props;

  const classNames = clsx(
    styles.root,
    { [`flex-direction-${direction}`]: direction },
    { [`justify-contnet-${justify}`]: justify },
    { [`align-items-${align}`]: align },
    { [`gap-${gap}`]: gap },
    { [styles.fullWidth]: fullWidth },
    { [styles.fillWidth]: fillWidth },
    className
  );

  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};
