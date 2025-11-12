import { Button } from "@platform/components";
import { cx } from "@platform/utils";
import { BUTTON_HEIGHT_CLASS, BUTTON_WIDTH_CLASS } from "./constants";
import { usePublishPanel } from "./context";

export const PublishButton = () => {
  const { handlePublishClick } = usePublishPanel();

  return (
    <Button
      className={cx(BUTTON_HEIGHT_CLASS, BUTTON_WIDTH_CLASS)}
      onClick={handlePublishClick}
    >
      Publishing changes
      <span className="font-mono text-xs px-2.5 py-0.5 bg-white/15 rounded-full">
        v1.0.0
      </span>
    </Button>
  );
};
