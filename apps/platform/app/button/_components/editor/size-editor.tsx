import { useButtonForm } from "../button-form";

export const SizeEditor = () => {
  const { selectedEntity } = useButtonForm();

  if (!selectedEntity || selectedEntity.type !== "size") {
    return null;
  }

  return <div>SizeEditor</div>;
};
