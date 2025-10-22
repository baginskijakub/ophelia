import { useButtonForm } from "./button-form";
import { ButtonSizeBadge } from "./button-size-badge";

export const ButtonSizeColumns = () => {
  const { buttons } = useButtonForm();

  return (
    <div className="flex flex-col gap-4 mt-[52px]">
      {buttons.sizes.map((size, index) => (
        <ButtonSizeBadge
          key={`size-${index}`}
          sizeKey={size.key}
          sizeIndex={index}
        />
      ))}
    </div>
  );
};
