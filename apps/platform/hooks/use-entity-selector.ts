import { useState } from "react";

export type SelectedEntity =
  | { type: "column"; columnId: string; columnIndex: number }
  | {
      type: "row";
      rowId: string;
      rowIndex: number;
    }
  | {
      type: "cell";
      columnId: string;
      columnIndex: number;
      rowId: string;
      rowIndex: number;
    };

export interface UseEntitySelector {
  selectedEntity: SelectedEntity | undefined;
  selectEntity: (entity: SelectedEntity | undefined) => void;
}

export const useEntitySelector = () => {
  const [selectedEntity, selectEntity] = useState<SelectedEntity>();

  return {
    selectedEntity,
    selectEntity,
  };
};
