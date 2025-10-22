import { cx } from "@platform/utils";
import { BUTTON_CONTROL_HEIGHT } from "./button-control";
import { Badge } from "@platform/components";
import { useButtonForm } from "./button-form";
import { GripVerticalIcon } from "lucide-react";

interface Props {
  sizeIndex: number;
  sizeKey: string;
}

export const ButtonSizeBadge = (props: Props) => {
  const { sizeIndex, sizeKey } = props;

  const { selectedEntity, selectEntity } = useButtonForm();

  const isSelected =
    selectedEntity?.type === "size" && selectedEntity?.sizeIndex === sizeIndex;

  return (
    <div
      className={cx(
        BUTTON_CONTROL_HEIGHT,
        "flex items-center justify-center p-2 pl-4 pr-6 rounded-l-md",
        isSelected && "focus-ring-tlb",
      )}
    >
      <Badge asChild>
        <button
          className={cx(
            "transition-all hover:bg-gray-400 hitbox cursor-pointer pr-2",
          )}
          onClick={() =>
            selectEntity({
              type: "size",
              sizeKey,
              sizeIndex,
            })
          }
        >
          <GripVerticalIcon size={12} className="text-gray-500" />
          <span className="text-left truncate flex-1">{sizeKey}</span>
        </button>
      </Badge>
    </div>
  );
};
