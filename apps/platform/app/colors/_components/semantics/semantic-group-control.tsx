import { SemanticGroup } from "@repo/types";
import { useSemanticsForm } from "./semantic-form";
import { Badge } from "@platform/components";
import { cx } from "@platform/utils";
import { SemanticColorControl } from "./semantic-color-control";

interface SemanticGroupControlProps {
  semanticGroup: SemanticGroup;
  index: number;
}

export const SemanticGroupControl = (props: SemanticGroupControlProps) => {
  const { semanticGroup, index } = props;
  const { key: groupKey } = semanticGroup;

  const { selectedEntity, select } = useSemanticsForm();

  const isSelected =
    selectedEntity?.type === "group" && selectedEntity?.groupIndex === index;

  return (
    <div
      className={cx(
        "relative flex flex-col gap-4 items-center p-2 rounded-md transition-shadow",
        isSelected && "focus-ring",
      )}
    >
      <div key={index} className="flex flex-col gap-4 items-center">
        <Badge asChild>
          <button
            className="hover:bg-gray-200 hitbox cursor-pointer"
            onClick={() =>
              select({
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
          {semanticGroup.values.map((semantic, idx) => (
            <SemanticColorControl
              key={idx}
              groupIndex={idx}
              groupKey={semanticGroup.key}
              colorIndex={idx}
              colorKey={semantic.key}
              primitiveRef={semantic.primitiveRef}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
