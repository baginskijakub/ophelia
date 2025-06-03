import { Text, Icon } from "@ophelia/ui";
import styles from "./resume-step.module.css";

interface DragDropProps {
  isDraggingOver: boolean;
}

export const DragDrop: React.FC<DragDropProps> = (props) => {
  const { isDraggingOver } = props;

  return (
    <div className={styles["upload-root-inner"]}>
      <Icon name="upload" size="lg" className={styles["upload-icon"]} />

      <Text role="label" size="md" color="brand">
        {isDraggingOver ? "Drop file here" : "Drag and drop"}
      </Text>
    </div>
  );
};
