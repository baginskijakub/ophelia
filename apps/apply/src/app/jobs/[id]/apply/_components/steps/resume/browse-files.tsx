import { Button, Text } from "@ophelia/ui";
import styles from "./resume-step.module.css";

interface BrowseFilesProps {
  onBrowseClick: () => void;
}

export const BrowseFiles: React.FC<BrowseFilesProps> = (props) => {
  const { onBrowseClick } = props;

  return (
    <div className={styles["upload-root-inner"]}>
      <Text role="label" size="md" color="brand">
        Choose a file from your computer
      </Text>
      <Button size="sm" variant="solid" onClick={onBrowseClick}>
        Browse files
      </Button>
    </div>
  );
};
