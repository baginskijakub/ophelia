import clsx from "clsx";
import { ImgHTMLAttributes } from "react";
import styles from "./avatar.module.css";

interface Props extends ImgHTMLAttributes<HTMLImageElement> {}

export const Image = (props: Props) => {
  const { className, ...rest } = props;

  const imgClass = clsx(styles.image, className);

  return <img className={imgClass} {...rest} />;
};
