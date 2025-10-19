import { cx } from "@platform/utils";
import { BUTTON_CONTROL_HEIGHT } from "./button-control";
import { Badge } from "@platform/components";
import { useButtonForm } from "./button-form";

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
        "flex items-center justify-center p-2 pr-6 rounded-l-md",
        isSelected && "focus-ring-tlb",
      )}
    >
      <Badge asChild>
        <button
          className={cx("hover:bg-gray-200 hitbox cursor-pointer")}
          onClick={() =>
            selectEntity({
              type: "size",
              sizeKey,
              sizeIndex,
            })
          }
        >
          <span className="text-left truncate flex-1">{sizeKey}</span>
        </button>
      </Badge>
    </div>
  );
};
