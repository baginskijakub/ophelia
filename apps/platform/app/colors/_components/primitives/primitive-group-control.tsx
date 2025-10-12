import { cx } from "@platform/utils";
import { usePrimitivesForm } from "./primitives-form";
import { Badge } from "@platform/components";

interface PrimitiveGroupControlProps {
  groupKey: string;
}

export const PrimitiveGroupControl = (props: PrimitiveGroupControlProps) => {
  const { groupKey } = props;

  const { selectedEntity, handleSelectEntity } = usePrimitivesForm();

  const isSelected =
    selectedEntity?.type === "group" && selectedEntity?.groupKey === groupKey;

  return (
    <Badge>
      <button
        id="primitive-group-control"
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
            type: "group",
            groupKey,
          })
        }
      >
        <span className="text-left truncate flex-1">{groupKey}</span>
      </button>
    </Badge>
  );
};
