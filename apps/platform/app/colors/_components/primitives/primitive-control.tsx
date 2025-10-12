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

  const { selectedEntity, handleSelectEntity } = usePrimitivesForm();

  const isSelected =
    selectedEntity?.type === "color" &&
    selectedEntity?.groupKey === groupKey &&
    selectedEntity?.shade === shade;

  return (
    <button
      id="primitive-control"
      className={cx(
        "w-40 p-2 bg-primary",
        "flex items-center gap-1",
        "text-xs font-mono text-secondary",
        "cursor-pointer transition-shadow",
        "surface-md",
        "hitbox",
        isSelected && "focus-ring",
      )}
      onClick={() =>
        handleSelectEntity({
          type: "color",
          groupKey,
          shade,
          value,
        })
      }
    >
      <ColorIndicator color={value} />
      <span className="text-left truncate flex-1">
        {groupKey}-{shade}
      </span>
    </button>
  );
};
