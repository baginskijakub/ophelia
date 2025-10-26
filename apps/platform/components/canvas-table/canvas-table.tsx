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
import { Badge } from "../badge";
import { GripVertical } from "lucide-react";
import { UseEntitySelector } from "@platform/hooks";

/** Contex?t */

interface CanvasTableContextType extends UseEntitySelector {
  columnOrder: string[];
  rowOrder: string[];
  setColumnOrder: (order: string[]) => void;
  setRowOrder: (order: string[]) => void;
  activeId: UniqueIdentifier | null;
  setActiveId: (id: UniqueIdentifier | null) => void;
  dragType: "column" | "row" | null;
  setDragType: (type: "column" | "row" | null) => void;
  rowHeight: number;
}

const CanvasTableContext = createContext<CanvasTableContextType | null>(null);

export const useCanvasTable = () => {
  const context = useContext(CanvasTableContext);
  if (!context) {
    throw new Error(
      "CanvasTable components must be used within CanvasTable.Root",
    );
  }
  return context;
};

/** Root */

interface RootProps extends HTMLAttributes<HTMLDivElement>, UseEntitySelector {
  children: ReactNode;
  columnOrder: string[];
  rowOrder: string[];
  onColumnOrderChange: (order: string[]) => void;
  onRowOrderChange: (order: string[]) => void;
  rowHeight?: number;
}

const Root = (props: RootProps) => {
  const {
    children,
    columnOrder: initialColumnOrder,
    rowOrder: initialRowOrder,
    onColumnOrderChange,
    onRowOrderChange,
    selectedEntity,
    selectEntity,
    className,
    rowHeight = 64,
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
    selectEntity(undefined);
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
    rowHeight,
    selectedEntity,
    selectEntity,
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
        <SortableContext
          items={columnOrder.map((id) => `col-${id}`)}
          strategy={horizontalListSortingStrategy}
        >
          <div className={cx("inline-flex", className)} {...rest}>
            {children}
          </div>
        </SortableContext>
      </DndContext>
    </CanvasTableContext.Provider>
  );
};

/** Handle */

interface HandleProps extends HTMLAttributes<HTMLButtonElement> {
  ref?: React.Ref<HTMLButtonElement | null>;
}

const Handle = (props: HandleProps) => {
  const { children, className = "", ...rest } = props;

  return (
    <Badge asChild>
      <button className={cx("cursor-pointer pr-2", className)} {...rest}>
        <GripVertical size={12} className="text-tertiary" />
        {children}
      </button>
    </Badge>
  );
};

/** Handle Column */

interface HandleColumnProps {
  children: ReactNode;
  className?: string;
}

const HandleColumn = ({ children, className = "" }: HandleColumnProps) => {
  const { rowOrder, rowHeight } = useCanvasTable();

  return (
    <SortableContext
      items={rowOrder.map((id) => `row-${id}`)}
      strategy={verticalListSortingStrategy}
    >
      <div
        style={{ marginTop: `${rowHeight}px` }}
        className={cx("flex flex-col", className)}
      >
        {children}
      </div>
    </SortableContext>
  );
};

/** Row Handle */

interface RowHandleProps extends HTMLAttributes<HTMLDivElement> {
  rowId: string;
  rowIndex: number;
}

const RowHandle = ({
  rowId,
  rowIndex,
  children,
  className = "",
}: RowHandleProps) => {
  const { listeners, setNodeRef, transform, transition, isDragging } =
    useSortable({ id: `row-${rowId}` });
  const { rowHeight, selectedEntity, selectEntity } = useCanvasTable();

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
    height: `${rowHeight}px`,
  };

  const selectRow = () => {
    selectEntity({ type: "row", rowId, rowIndex });
  };

  const isSelected =
    selectedEntity?.type === "row" && selectedEntity.rowId === rowId;

  return (
    <div
      className={cx(
        "flex items-center justify-center p-4 rounded-l-md",
        isSelected && "focus-ring-tlb",
        isDragging && "z-10",
      )}
      ref={setNodeRef}
      style={style}
      {...listeners}
    >
      <Handle
        className={cx("flex items-center justify-center", className)}
        onClick={selectRow}
      >
        {children}
      </Handle>
    </div>
  );
};

/** Column */

interface ColumnProps {
  columnId: string;
  columnIndex: number;
  children: ReactNode;
  className?: string;
}

const Column = ({
  columnId,
  columnIndex,
  children,
  className = "",
}: ColumnProps) => {
  const { rowOrder, rowHeight, selectedEntity, selectEntity } =
    useCanvasTable();

  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: `col-${columnId}` });

  const style = {
    transform: CSS.Translate.toString(transform),
    transition,
  };

  const isSelected =
    selectedEntity?.type === "column" && selectedEntity.columnId === columnId;

  const selectColumn = () => {
    selectEntity({ type: "column", columnId, columnIndex });
  };

  return (
    <div
      className={cx(
        "flex flex-col items-center rounded-md",
        isSelected && "focus-ring",
        isDragging && "z-10",
      )}
      style={style}
    >
      <div
        style={{ height: `${rowHeight}px` }}
        className="flex items-center p-4"
      >
        <Handle
          ref={setNodeRef}
          {...attributes}
          {...listeners}
          onClick={selectColumn}
          className={cx("w-fit")}
        >
          {columnId}
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

/** Cell */

interface CellProps {
  rowId: string;
  rowIndex: number;
  columnId: string;
  columnIndex: number;
  isLast: boolean;
  children: ReactNode;
  className?: string;
}

const Cell = ({
  rowId,
  rowIndex,
  columnId,
  columnIndex,
  isLast,
  children,
  className = "",
}: CellProps) => {
  const { attributes, setNodeRef, transform, transition, isDragging } =
    useSortable({
      id: `row-${rowId}`,
      disabled: false,
    });
  const { rowHeight, selectEntity, selectedEntity } = useCanvasTable();

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
    height: `${rowHeight}px`,
  };

  const selectCell = () => {
    selectEntity({ type: "cell", columnId, columnIndex, rowId, rowIndex });
  };

  const isSelectedCell =
    selectedEntity?.type === "cell" &&
    selectedEntity.columnId === columnId &&
    selectedEntity.rowId === rowId;

  const isSelectedRow =
    selectedEntity?.type === "row" && selectedEntity.rowId === rowId;

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={cx(
        "flex items-center justify-center p-4 rounded-md cursor-pointer",
        isDragging && "z-10",
        isSelectedCell && "focus-ring",
        isSelectedRow && "focus-ring-tb rounded-none",
        isSelectedRow && isLast && "focus-ring-trb rounded-l-none rounded-r-md",
        className,
      )}
      onClick={selectCell}
      {...attributes}
    >
      {children}
    </div>
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
  HandleColumn,
  ColumnHandle: Handle,
  RowHandle,
  Column,
  Cell,
};
