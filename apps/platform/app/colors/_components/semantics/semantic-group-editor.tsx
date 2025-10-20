import {
  IconButton,
  Input,
  Menu,
  Separator,
  Badge,
} from "@platform/components";
import { useSemanticsForm } from "./semantic-form";
import { Ellipsis, TrashIcon } from "lucide-react";

export const SemanticGroupEditor = () => {
  const {
    selectedEntity,
    handleSemanticGroupKeyChange,
    handleDeleteSemanticGroup,
  } = useSemanticsForm();

  if (!selectedEntity || selectedEntity.type !== "group") {
    return null;
  }

  return (
    <>
      <div className="p-3 flex justify-between gap-4">
        <Badge size="sm" color="200" className="text-nowrap">
          {selectedEntity.groupKey}
        </Badge>

        <Menu.Root>
          <Menu.Trigger asChild>
            <IconButton size="xs" variant="ghost">
              <Ellipsis size={16} />
            </IconButton>
          </Menu.Trigger>
          <Menu.Portal>
            <Menu.Content
              side="bottom"
              align="end"
              sideOffset={4}
              alignOffset={-4}
              id="semantic-no-close"
            >
              <Menu.Group>
                <Menu.Item onClick={() => handleDeleteSemanticGroup()}>
                  <TrashIcon size={14} className="text-secondary" />
                  Delete group
                </Menu.Item>
              </Menu.Group>
            </Menu.Content>
          </Menu.Portal>
        </Menu.Root>
      </div>

      <Separator />

      <div className="p-3 flex flex-col gap-4">
        <div className="w-full flex justify-between items-center gap-2">
          <p className="text-sm text-secondary">Group</p>

          <Input
            value={selectedEntity.groupKey}
            variant="subtle"
            color="100"
            size={1}
            className="max-w-32"
            onChange={(e) => handleSemanticGroupKeyChange(e.target.value)}
          />
        </div>
      </div>
    </>
  );
};
