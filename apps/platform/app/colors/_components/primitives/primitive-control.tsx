import { ColorIndicator } from "@platform/components";
import { cx } from "@platform/utils";
import { usePrimitivesForm } from "./primitives-form";
import { PrimitiveShade } from "@repo/types";

interface PrimitiveControlProps {
  groupKey: string;
  shade: keyof PrimitiveShade;
  value: string;
}

export const PrimitveControl = (props: PrimitiveControlProps) => {
  const { groupKey, shade, value } = props;

  const { selectedColor, handleSelectColor } = usePrimitivesForm();

  const isSelected =
    selectedColor?.groupKey === groupKey && selectedColor?.shade === shade;

  return (
    <button
      className={cx(
        "w-40 p-2 bg-primary",
        "flex items-center gap-1",
        "text-xs font-mono text-secondary",
        "cursor-pointer transition-shadow",
        "surface-md",
        isSelected && "focus-ring",
      )}
      onClick={() => handleSelectColor(groupKey, shade)}
    >
      <ColorIndicator color={value} />
      <span className="text-left truncate flex-1">
        {groupKey}-{shade}
      </span>
    </button>
  );
};
