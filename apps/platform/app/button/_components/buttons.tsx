import { CanvasTable } from "@platform/components";
import { useButtonForm } from "./button-form";
import { ButtonControl } from "./button-control";

export const Buttons = () => {
  const { buttons, onSizeOrderChange, onVariantOrderChange } = useButtonForm();

  const variants = buttons.variants.map((variant) => variant.key);
  const sizes = buttons.sizes.map((size) => size.key);

  return (
    <div
      className="flex min-w-full min-h-full justify-center items-center"
      id="buttons-no-close"
    >
      <CanvasTable.Root
        columnOrder={variants}
        rowOrder={sizes}
        onColumnOrderChange={onVariantOrderChange}
        onRowOrderChange={onSizeOrderChange}
        rowHeight={80}
      >
        <CanvasTable.HandleColumn>
          {sizes.map((size) => (
            <CanvasTable.RowHandle key={size} rowId={size}>
              {size}
            </CanvasTable.RowHandle>
          ))}
        </CanvasTable.HandleColumn>

        {variants.map((variant, variantIndex) => (
          <CanvasTable.Column key={variant} columnId={variant}>
            {sizes.map((size, sizeIndex) => (
              <CanvasTable.Cell
                key={`${variant}-${size}`}
                rowId={size}
                columnId={variant}
                isLast={variantIndex === variants.length - 1}
              >
                <ButtonControl
                  variantIndex={variantIndex}
                  variantKey={variant}
                  sizeIndex={sizeIndex}
                  sizeKey={size}
                />
              </CanvasTable.Cell>
            ))}
          </CanvasTable.Column>
        ))}
      </CanvasTable.Root>
    </div>
  );
};
