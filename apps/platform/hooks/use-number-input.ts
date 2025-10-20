import { ChangeEvent, useEffect, useState, KeyboardEvent } from "react";

interface UseNumberInput {
  inputProps: {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onBlur: () => void;
    onKeyDown: (event: KeyboardEvent<HTMLInputElement>) => void;
    onFocus: (event: ChangeEvent<HTMLInputElement>) => void;
  };
}

export const useNumberInput = (
  initialValue: number,
  updateValue: (value: number) => void,
): UseNumberInput => {
  const [value, setValue] = useState<string>(String(initialValue));

  useEffect(() => {
    if (Number(value) !== initialValue) {
      setValue(String(initialValue));
    }
  }, [initialValue]);

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const onBlur = () => {
    const newValue = Number(value);

    if (String(value).trim() === "" || isNaN(newValue)) {
      if (initialValue !== Number(value)) {
        updateValue(initialValue);
      }
      setValue(String(initialValue));
      return;
    }

    if (newValue !== initialValue) {
      updateValue(newValue);
    }
  };

  const onKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      event.currentTarget.blur();
    }

    const actionKeys = ["ArrowUp", "ArrowDown"];

    if (actionKeys.includes(event.key)) {
      event.preventDefault();

      const currentValue = Number(value);

      if (isNaN(currentValue)) return;

      const newValue =
        event.key === "ArrowUp" ? currentValue + 1 : currentValue - 1;

      setValue(String(newValue));
      updateValue(newValue);
    }
  };

  const onFocus = (event: ChangeEvent<HTMLInputElement>) => {
    event.target.select();
  };

  return {
    inputProps: {
      value,
      onChange,
      onBlur,
      onKeyDown,
      onFocus,
    },
  };
};
