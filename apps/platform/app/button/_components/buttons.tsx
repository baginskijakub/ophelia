import { CanvasTable } from "@platform/components";
import { useButtonForm } from "./button-form";
import { ButtonSizeColumns } from "./button-size-column";
import { ButtonVariantControl } from "./button-variant-control";
import { ButtonControl } from "./button-control";

export const Buttons = () => {
  const { buttons, onSizeOrderChange, onVariantOrderChange } = useButtonForm();

  const columnOrder = buttons.variants.map((variant) => variant.key);
  const rowOrder = buttons.sizes.map((size) => size.key);

  return (
    <div
      className="flex min-w-full min-h-full justify-center items-center"
      id="buttons-no-close"
    >
      <CanvasTable.Root
        columnOrder={columnOrder}
        rowOrder={rowOrder}
        onColumnOrderChange={onVariantOrderChange}
        onRowOrderChange={onSizeOrderChange}
        rowHeight={80}
      >
        <CanvasTable.HandleColumn>
          {rowOrder.map((rowId) => (
            <CanvasTable.RowHandle key={rowId} rowId={rowId}>
              {rowId}
            </CanvasTable.RowHandle>
          ))}
        </CanvasTable.HandleColumn>

        {columnOrder.map((columnId, columnIndex) => (
          <CanvasTable.Column key={columnId} columnId={columnId}>
            {rowOrder.map((rowId) => (
              <CanvasTable.Cell
                key={`${columnId}-${rowId}`}
                rowId={rowId}
                columnId={columnId}
                isLast={columnIndex === columnOrder.length - 1}
              >
                Cell {columnId}-{rowId}
              </CanvasTable.Cell>
            ))}
          </CanvasTable.Column>
        ))}
      </CanvasTable.Root>
    </div>
  );

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
