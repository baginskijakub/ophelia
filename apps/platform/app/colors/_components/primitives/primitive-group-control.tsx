import { PrimitiveGroup, PrimitiveShade } from "@repo/types";
import { usePrimitivesForm } from "./primitives-form";
import { Badge } from "@platform/components";
import { PrimitveControl } from "./primitive-control";
import { cx } from "@platform/utils";

interface PrimitiveGroupControlProps {
  primitiveGroup: PrimitiveGroup;
  index: number;
}

export const PrimitiveGroupControl = (props: PrimitiveGroupControlProps) => {
  const { primitiveGroup, index } = props;
  const { key: groupKey } = primitiveGroup;

  const { selectedEntity, handleSelectEntity } = usePrimitivesForm();

  const isSelected =
    selectedEntity?.type === "group" && selectedEntity?.groupIndex === index;

  return (
    <div
      className={cx(
        "flex flex-col gap-4 items-center p-2 rounded-md transition-shadow",
        isSelected && "focus-ring",
      )}
    >
      <Badge asChild>
        <button
          id="primitive-group-control"
          className="hover:bg-gray-200 hitbox cursor-pointer"
          onClick={() =>
            handleSelectEntity({
              type: "group",
              groupKey,
              groupIndex: index,
            })
          }
        >
          <span className="text-left truncate flex-1">{groupKey}</span>
        </button>
      </Badge>

      <div className="flex flex-col gap-4">
        {Object.entries(primitiveGroup.values).map(([key, value]) => (
          <PrimitveControl
            groupIndex={index}
            key={key}
            groupKey={primitiveGroup.key}
            shade={parseInt(key) as keyof PrimitiveShade}
            value={value}
          />
        ))}
      </div>
    </div>
  );
};
