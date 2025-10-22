import { Badge, IconButton } from "@platform/components";
import { cx } from "@platform/utils";
import { useButtonForm } from "./button-form";
import { ButtonControl } from "./button-control";

interface ButtonVariantControl {
  variantIndex: number;
  variantKey: string;
}

export const ButtonVariantControl = (props: ButtonVariantControl) => {
  const { variantKey, variantIndex } = props;

  const { selectEntity, selectedEntity, buttons } = useButtonForm();

  const isSelected =
    selectedEntity?.type === "variant" &&
    selectedEntity?.variantIndex === variantIndex;

  return (
    <div
      className={cx(
        "relative flex flex-col gap-4 pt-4 items-center rounded-md",
        isSelected && "focus-ring",
      )}
    >
      <Badge asChild>
        <button
          className={cx(
            "transition-all hover:bg-gray-400 hitbox cursor-pointer",
          )}
          onClick={() =>
            selectEntity({
              type: "variant",
              variantKey,
              variantIndex,
            })
          }
        >
          <span className="text-left truncate flex-1">{variantKey}</span>
        </button>
      </Badge>

      <div className="flex flex-col gap-4">
        {buttons.sizes.map((size, idx) => (
          <ButtonControl
            key={idx}
            sizeIndex={idx}
            sizeKey={size.key}
            variantIndex={variantIndex}
            variantKey={variantKey}
          />
        ))}
      </div>
    </div>
  );
};
