import { ValueInput } from "@platform/components";
import { useNumberInput } from "@platform/hooks";
import { HeadingIcon } from "lucide-react";

interface HeightInputProps {
  defaultValue: number;
  updateValue: (value: number) => void;
}

export const HeightInput = (props: HeightInputProps) => {
  const { defaultValue, updateValue } = props;

  const { inputProps } = useNumberInput(defaultValue, updateValue);

  return (
    <ValueInput.Root>
      <ValueInput.Label>Height</ValueInput.Label>

      <ValueInput.InputGroup>
        <HeadingIcon size={12} />

        <ValueInput.NumberInput {...inputProps} />

        <ValueInput.PixelIndicator />
      </ValueInput.InputGroup>
    </ValueInput.Root>
  );
};
