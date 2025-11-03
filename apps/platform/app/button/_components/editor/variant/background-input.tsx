import { ColorInput } from "@platform/components";
import { ColorRef } from "@repo/types";

interface BackgroundInputProps {
  value?: ColorRef;
  updateValue: (colorRef?: ColorRef) => void;
}

export const BackgroundInput = (props: BackgroundInputProps) => {
  return (
    <ColorInput.Root {...props}>
      <ColorInput.Label>Background</ColorInput.Label>

      <ColorInput.Content>
        <ColorInput.Trigger>
          <ColorInput.ColorPreview />
          <ColorInput.ValuePreview />
        </ColorInput.Trigger>

        <ColorInput.RemoveButton />
      </ColorInput.Content>

      <ColorInput.Select />
    </ColorInput.Root>
  );
};
