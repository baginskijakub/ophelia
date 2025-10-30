import { cx } from "@platform/utils";
import { getContrastRatio } from "./utils";

interface ColorIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
  color: string;
  backgroundColor?: string;
  contrastThreshold?: number;
}

export const ColorIndicator = (props: ColorIndicatorProps) => {
  const {
    color,
    backgroundColor = "#E6E7EB",
    contrastThreshold = 1.5,
    className,
    ...rest
  } = props;

  const contrastRatio = getContrastRatio(color, backgroundColor);
  const needsBorder =
    contrastRatio !== null && contrastRatio < contrastThreshold;

  return (
    <span
      {...rest}
      style={{ backgroundColor: color }}
      className={cx(
        `inline-block w-3 h-3 rounded-full`,
        needsBorder && "border-[0.5px] border-gray-400",
        className,
      )}
    />
  );
};
