"use client";

import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  HTMLAttributes,
} from "react";
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  UniqueIdentifier,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
  closestCenter,
} from "@dnd-kit/core";
import {
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
  horizontalListSortingStrategy,
  sortableKeyboardCoordinates,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import {
  restrictToHorizontalAxis,
  restrictToVerticalAxis,
} from "@dnd-kit/modifiers";
import { cx } from "@platform/utils";

interface CanvasTableContextType {
  columnOrder: string[];
  rowOrder: string[];
  setColumnOrder: (order: string[]) => void;
  setRowOrder: (order: string[]) => void;
  activeId: UniqueIdentifier | null;
  setActiveId: (id: UniqueIdentifier | null) => void;
  dragType: "column" | "row" | null;
  setDragType: (type: "column" | "row" | null) => void;
}

const CanvasTableContext = createContext<CanvasTableContextType | null>(null);

const useCanvasTable = () => {
  const context = useContext(CanvasTableContext);
  if (!context) {
    throw new Error(
      "CanvasTable components must be used within CanvasTable.Root",
    );
  }
  return context;
};

interface RootProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  columnOrder: string[];
  rowOrder: string[];
  onColumnOrderChange: (order: string[]) => void;
  onRowOrderChange: (order: string[]) => void;
}

const Root = (props: RootProps) => {
  const {
    children,
    columnOrder: initialColumnOrder,
    rowOrder: initialRowOrder,
    onColumnOrderChange,
    onRowOrderChange,
    className,
    ...rest
  } = props;

  const [columnOrder, setColumnOrder] = useState(initialColumnOrder);
  const [rowOrder, setRowOrder] = useState(initialRowOrder);
  const [activeId, setActiveId] = useState<UniqueIdentifier | null>(null);
  const [dragType, setDragType] = useState<"column" | "row" | null>(null);

  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 8,
      },
    }),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  const handleDragStart = (event: DragStartEvent) => {
    const { active } = event;
    setActiveId(active.id);

    if (active.id.toString().startsWith("col-")) {
      setDragType("column");
    } else if (active.id.toString().startsWith("row-")) {
      setDragType("row");
    }
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (!over) return;

    if (dragType === "column" && active.id !== over.id) {
      const oldIndex = columnOrder.indexOf(
        active.id.toString().replace("col-", ""),
      );
      const newIndex = columnOrder.indexOf(
        over.id.toString().replace("col-", ""),
      );

      const newOrder = arrayMove(columnOrder, oldIndex, newIndex);
      setColumnOrder(newOrder);
      onColumnOrderChange(newOrder);
    } else if (dragType === "row" && active.id !== over.id) {
      const oldIndex = rowOrder.indexOf(
        active.id.toString().replace("row-", ""),
      );
      const newIndex = rowOrder.indexOf(over.id.toString().replace("row-", ""));

      const newOrder = arrayMove(rowOrder, oldIndex, newIndex);
      setRowOrder(newOrder);
      onRowOrderChange(newOrder);
    }

    setActiveId(null);
    setDragType(null);
  };

  const contextValue: CanvasTableContextType = {
    columnOrder,
    rowOrder,
    setColumnOrder: (order) => {
      setColumnOrder(order);
      onColumnOrderChange(order);
    },
    setRowOrder: (order) => {
      setRowOrder(order);
      onRowOrderChange(order);
    },
    activeId,
    setActiveId,
    dragType,
    setDragType,
  };

  return (
    <CanvasTableContext.Provider value={contextValue}>
      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        modifiers={
          dragType === "column"
            ? [restrictToHorizontalAxis]
            : dragType === "row"
              ? [restrictToVerticalAxis]
              : []
        }
      >
        <div className={cx("inline-flex", className)} {...rest}>
          {children}
        </div>
      </DndContext>
    </CanvasTableContext.Provider>
  );
};

interface HandleProps {
  children: ReactNode;
  className?: string;
}

const Handle = ({ children, className = "" }: HandleProps) => {
  return (
    <div className={cx("cursor-grab active:cursor-grabbing", className)}>
      {children}
    </div>
  );
};

interface HandleColumnProps {
  children: ReactNode;
  className?: string;
}

const HandleColumn = ({ children, className = "" }: HandleColumnProps) => {
  const { rowOrder } = useCanvasTable();

  return (
    <SortableContext
      items={rowOrder.map((id) => `row-${id}`)}
      strategy={verticalListSortingStrategy}
    >
      <div className={cx("flex flex-col pt-[52px]", className)}>{children}</div>
    </SortableContext>
  );
};

interface SortableRowHandleProps {
  rowId: string;
  children: ReactNode;
  className?: string;
}

const SortableRowHandle = ({
  rowId,
  children,
  className = "",
}: SortableRowHandleProps) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: `row-${rowId}` });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      className={cx(
        "flex items-center justify-center p-2 border-b border-gray-200 min-h-[40px]",
        isDragging && "opacity-50",
        className,
      )}
    >
      <Handle>{children}</Handle>
    </div>
  );
};

interface ColumnProps {
  columnId: string;
  children: ReactNode;
  className?: string;
}

const Column = ({ columnId, children, className = "" }: ColumnProps) => {
  const { rowOrder } = useCanvasTable();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: `col-${columnId}` });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div className="flex flex-col">
      <div
        ref={setNodeRef}
        style={style}
        {...attributes}
        {...listeners}
        className={cx(
          "bg-gray-100 border-b border-gray-300 p-2 min-h-[40px] flex items-center justify-center",
          isDragging && "opacity-50",
        )}
      >
        <Handle>
          <div className="text-sm font-medium text-gray-700">
            Column {columnId}
          </div>
        </Handle>
      </div>

      <SortableContext
        items={rowOrder.map((id) => `row-${id}`)}
        strategy={verticalListSortingStrategy}
      >
        <div className={cx("flex flex-col", className)}>{children}</div>
      </SortableContext>
    </div>
  );
};

interface CellProps {
  rowId: string;
  children: ReactNode;
  className?: string;
}

const Cell = ({ rowId, children, className = "" }: CellProps) => {
  const { attributes, setNodeRef, transform, transition, isDragging } =
    useSortable({
      id: `row-${rowId}`,
      disabled: false,
    });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cx(
        "border-b border-gray-200 p-6 min-h-[64px] flex items-center",
        isDragging && "opacity-50",
        className,
      )}
      {...attributes}
    >
      {children}
    </div>
  );
};

interface TableContainerProps {
  children: ReactNode;
  className?: string;
}

const TableContainer = ({ children, className = "" }: TableContainerProps) => {
  const { columnOrder } = useCanvasTable();

  return (
    <SortableContext
      items={columnOrder.map((id) => `col-${id}`)}
      strategy={horizontalListSortingStrategy}
    >
      <div className={cx("flex", className)}>{children}</div>
    </SortableContext>
  );
};

function arrayMove<T>(array: T[], from: number, to: number): T[] {
  const newArray = array.slice();
  newArray.splice(
    to < 0 ? newArray.length + to : to,
    0,
    newArray.splice(from, 1)[0] as T,
  );
  return newArray;
}

export const CanvasTable = {
  Root,
  Handle,
  HandleColumn,
  SortableRowHandle,
  Column,
  Cell,
  TableContainer,
};

export const ExampleTable = () => {
  const [columnOrder, setColumnOrder] = useState(["1", "2", "3"]);
  const [rowOrder, setRowOrder] = useState(["a", "b", "c"]);

  return (
    <CanvasTable.Root
      columnOrder={columnOrder}
      rowOrder={rowOrder}
      onColumnOrderChange={setColumnOrder}
      onRowOrderChange={setRowOrder}
    >
      <CanvasTable.TableContainer>
        <CanvasTable.HandleColumn>
          {rowOrder.map((rowId) => (
            <CanvasTable.SortableRowHandle key={rowId} rowId={rowId}>
              ⋮⋮
            </CanvasTable.SortableRowHandle>
          ))}
        </CanvasTable.HandleColumn>

        {columnOrder.map((columnId) => (
          <CanvasTable.Column key={columnId} columnId={columnId}>
            {rowOrder.map((rowId) => (
              <CanvasTable.Cell key={`${columnId}-${rowId}`} rowId={rowId}>
                Cell {columnId}-{rowId}
              </CanvasTable.Cell>
            ))}
          </CanvasTable.Column>
        ))}
      </CanvasTable.TableContainer>
    </CanvasTable.Root>
  );
};
