"use client";

import { CanvasTable } from "@platform/components";
import { useButtonForm } from "./button-form";
import { Editor } from "./editor";
import { ButtonControl } from "./button-control";

export const ButtonsTable = () => {
  const {
    buttons,
    onSizeOrderChange,
    onVariantOrderChange,
    selectedEntity,
    selectEntity,
  } = useButtonForm();

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
        selectEntity={selectEntity}
        selectedEntity={selectedEntity}
        rowHeight={80}
      >
        <CanvasTable.HandleColumn>
          {sizes.map((size, idx) => (
            <CanvasTable.RowHandle key={size} rowId={size} rowIndex={idx}>
              {size}
            </CanvasTable.RowHandle>
          ))}
        </CanvasTable.HandleColumn>

        {variants.map((variant, variantIndex) => (
          <CanvasTable.Column
            key={variant}
            columnId={variant}
            columnIndex={variantIndex}
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

        <Editor />
      </CanvasTable.Root>
    </div>
  );
};
