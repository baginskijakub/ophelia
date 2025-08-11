import * as React from "react";
import clsx from "clsx";
import styles from "./fade.module.css";

export interface FadeProps {
  stop?: string;
  blur?: string;
  side: "top" | "bottom" | "left" | "right";
  className?: string;
  background: string;
  debug?: boolean;
  style?: React.CSSProperties;
  ref?: React.RefObject<HTMLDivElement>;
}

export const Fade = (props: FadeProps) => {
  const {
    stop,
    blur,
    side = "top",
    className,
    background,
    debug,
    style,
    ref,
  } = props;

  return (
    <div
      ref={ref}
      aria-hidden
      className={clsx(styles.root, className)}
      data-side={side}
      style={
        {
          "--stop": stop,
          "--blur": blur,
          "--background": background,
          ...(debug && {
            outline: "2px solid var(--danger-70)",
          }),
          ...style,
        } as React.CSSProperties
      }
    />
  );
};
