import { useButtonForm } from "./button-form";
import { ButtonSizeColumns } from "./button-size-column";
import { ButtonVariantControl } from "./button-variant-control";

export const Buttons = () => {
  const { buttons } = useButtonForm();

  return (
    <div
      className="flex min-w-full min-h-full justify-center items-center"
      id="buttons-no-close"
    >
      <ButtonSizeColumns />

      {buttons.variants.map((variant, idx) => (
        <ButtonVariantControl
          key={`button-variant-control-${idx}`}
          variantIndex={idx}
          variantKey={variant.key}
        />
      ))}
    </div>
  );
};
