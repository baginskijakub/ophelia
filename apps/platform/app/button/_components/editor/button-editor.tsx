import { CanvasDrawer } from "@platform/components";
import { useButtonForm } from "../button-form";

export const ButtonEditor = () => {
  const { selectedEntity } = useButtonForm();

  if (!selectedEntity || selectedEntity.type !== "button") {
    return null;
  }

  return <CanvasDrawer.Group>ButtonEditor</CanvasDrawer.Group>;
};
