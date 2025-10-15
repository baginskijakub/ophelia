import { cx } from "@platform/utils";
import { ButtonPreview } from "./button-preview";

interface ButtonControl {
  variantIndex: number;
  variantKey: string;
  sizeIndex: number;
  sizeKey: string;
}

export const ButtonControl = (props: ButtonControl) => {
  const { variantIndex, variantKey, sizeIndex, sizeKey } = props;

  const isSelected = true;

  return (
    <div className={cx("p-2", "hitbox", isSelected && "focus-ring")}>
      <ButtonPreview />
    </div>
  );
};
