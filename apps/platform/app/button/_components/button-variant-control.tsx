import { Badge, IconButton } from "@platform/components";
import { cx } from "@platform/utils";
import { PlusIcon } from "lucide-react";
import { useButtonForm } from "./button-form";
import { ButtonControl } from "./button-control";

interface ButtonVariantControl {
  variantIndex: number;
  variantKey: string;
}

export const ButtonVariantControl = (props: ButtonVariantControl) => {
  const { variantKey, variantIndex } = props;

  const { selectEntity, buttons } = useButtonForm();

  const isSelected = false;

  return (
    <div
      className={cx(
        "relative flex flex-col gap-4 items-center p-2 rounded-md transition-shadow",
        isSelected && "focus-ring",
      )}
    >
      <div className="flex flex-col gap-4 items-center">
        <Badge asChild>
          <button
            className="hover:bg-gray-200 hitbox cursor-pointer"
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

        <IconButton variant="surface" rounded="full" size="xs">
          <PlusIcon size={12} />
        </IconButton>
      </div>
    </div>
  );
};
