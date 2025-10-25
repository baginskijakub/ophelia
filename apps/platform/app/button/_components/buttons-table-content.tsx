import { CanvasTable } from "@platform/components";
import { useButtonForm } from "./button-form";
import { ButtonControl } from "./button-control";

export const ButtonsTableContent = () => {
  const { buttons } = useButtonForm();

  const variants = buttons.variants.map((variant) => variant.key);
  const sizes = buttons.sizes.map((size) => size.key);

  return (
    <>
      <CanvasTable.HandleColumn>
        {sizes.map((size, idx) => (
          <CanvasTable.RowHandle key={size} rowId={size} index={idx}>
            {size}
          </CanvasTable.RowHandle>
        ))}
      </CanvasTable.HandleColumn>

      {variants.map((variant, variantIndex) => (
        <CanvasTable.Column
          key={variant}
          columnId={variant}
          index={variantIndex}
        >
          {sizes.map((size, sizeIndex) => (
            <CanvasTable.Cell
              key={`${variant}-${size}`}
              rowId={size}
              rowIndex={sizeIndex}
              columnId={variant}
              columnIndex={variantIndex}
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
    </>
  );
};
