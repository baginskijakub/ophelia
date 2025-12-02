import { BorderInput as Input } from "@platform/components";
import { Border } from "@repo/types";

interface BorderInputProps {
  value?: Border;
  updateValue: (colorRef?: Border) => void;
}

export const BorderInput = (props: BorderInputProps) => {
  return (
    <Input.Root {...props}>
      <Input.Label>Border</Input.Label>

      <Input.Content>
        <Input.WidthInput />
        <Input.ColorInput />
      </Input.Content>
    </Input.Root>
  );
};
