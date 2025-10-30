"use client";

import { cx } from "@platform/utils";
import { ColorRef, PrimitiveShade } from "@repo/types";
import {
  createContext,
  HTMLAttributes,
  useContext,
  useMemo,
  useState,
} from "react";
import { ColorIndicator } from "../color-indicator";
import Popover from "../popover/popover";
import { CheckIcon, SearchIcon } from "lucide-react";
import { useThemeForm } from "../../app/_components";

interface ColorInputContextValues {
  value?: ColorRef;
  updateValue: (newValue: ColorRef) => void;
  query?: string;
  setQuery: (newQuery: string) => void;
  colorOptions: ColorRef[];
  selectedType: "semantic" | "primitive";
  selectType: (type: "semantic" | "primitive") => void;
}

const ColorInputContext = createContext<ColorInputContextValues>(
  {} as ColorInputContextValues,
);

const useColorInputContext = () => {
  const context = useContext(ColorInputContext);

  if (!context) {
    throw new Error(
      "ColorInput components must be used within a ColorInputProvider",
    );
  }

  return context;
};

interface RootProps extends HTMLAttributes<HTMLDivElement> {
  value?: ColorRef;
  updateValue: (newValue: ColorRef) => void;
}

export const Root = (props: RootProps) => {
  const { value, updateValue, children, className, ...rest } = props;

  const { theme } = useThemeForm();

  const [selectedType, selectType] = useState<"semantic" | "primitive">(
    "semantic",
  );
  const [query, setQuery] = useState<string>("");
  const colorOptions = useMemo(() => {
    if (selectedType === "semantic") {
      return theme.colors.semantics.flatMap((group) =>
        group.values.map((color) => ({
          type: "semantic" as const,
          groupKey: group.key,
          colorKey: color.key,
          value: color.primitiveRef.value,
        })),
      );
    }

    return theme.colors.primitives.flatMap((group) =>
      (Object.keys(group.values) as unknown as (keyof PrimitiveShade)[]).map(
        (shade) => ({
          type: "primitive" as const,
          key: group.key,
          shade,
          value: group.values[shade],
        }),
      ),
    );
  }, [query, selectedType]);

  return (
    <Popover.Root>
      <ColorInputContext.Provider
        value={{
          value,
          updateValue,
          selectedType,
          selectType,
          colorOptions,
          query,
          setQuery,
        }}
      >
        <div className={cx("flex flex-col gap-1", className)} {...rest}>
          {children}
        </div>
      </ColorInputContext.Provider>
    </Popover.Root>
  );
};

export const Label = (props: HTMLAttributes<HTMLLabelElement>) => {
  const { children, className, ...rest } = props;

  return (
    <label className={cx("text-xs text-tertiary pl-0.5", className)} {...rest}>
      {children}
    </label>
  );
};

export const Trigger = (props: HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...rest } = props;

  return (
    <Popover.Trigger>
      <div
        className={cx(
          "bg-gray-300 text-tertiary rounded-sm",
          "px-2 h-6",
          "flex items-center gap-1",
          "transition-shadow focus-within:ring-2 ring-gray-500",
          "cursor-pointer",
          className,
        )}
        {...rest}
      >
        {children}
      </div>
    </Popover.Trigger>
  );
};

export const ColorPreview = (props: HTMLAttributes<HTMLSpanElement>) => {
  const { className, ...rest } = props;
  const { value } = useColorInputContext();

  const label = useMemo(() => {
    if (!value) return "None";

    return value.type === "semantic"
      ? `${value.groupKey}-${value.colorKey}`
      : `${value.key}-${value.shade}`;
  }, [value]);

  return (
    <span
      className={cx(
        "flex gap-1.5 items-center flex-1",
        "text-sm text-secondary",
        className,
      )}
      {...rest}
    >
      {value && <ColorIndicator color={value.value} />}
      {label}
    </span>
  );
};

export const ValuePreview = (props: HTMLAttributes<HTMLSpanElement>) => {
  const { className, ...rest } = props;
  const { value } = useColorInputContext();

  if (!value) {
    return null;
  }

  return (
    <span
      className={cx("text-xs text-tertiary font-mono", className)}
      {...rest}
    >
      {value.value}
    </span>
  );
};

export const Select = (props: HTMLAttributes<HTMLDivElement>) => {
  const { children, className, ...rest } = props;

  const { selectedType, selectType, colorOptions } = useColorInputContext();

  return (
    <Popover.Portal>
      <Popover.Content
        side="bottom"
        align="start"
        sideOffset={6}
        className={cx("p-2 pb-0 flex flex-col", className)}
        {...rest}
      >
        <div className="flex items-center gap-1 p-1 bg-gray-300 rounded-lg">
          <ColorTypeToggleButton
            active={selectedType === "semantic"}
            onClick={() => selectType("semantic")}
          >
            Semantic
          </ColorTypeToggleButton>
          <ColorTypeToggleButton
            active={selectedType === "primitive"}
            onClick={() => selectType("primitive")}
          >
            Primitive
          </ColorTypeToggleButton>
        </div>

        <div className="flex items-center gap-2 px-2 py-1.5 mt-2 bg-gray-300 rounded-md">
          <SearchIcon size={13} className="text-secondary" />
          <input placeholder="Search" className="text-sm focus:outline-none" />
        </div>

        <div className="flex flex-col gap-1 max-h-[256px] overflow-y-auto py-2">
          {colorOptions.map((colorOption, index) => (
            <ColorOptionItem key={index} colorOption={colorOption} />
          ))}
        </div>
      </Popover.Content>
    </Popover.Portal>
  );
};

interface ColorTypeToggleButtonProps extends HTMLAttributes<HTMLButtonElement> {
  active: boolean;
}

const ColorTypeToggleButton = (props: ColorTypeToggleButtonProps) => {
  const { active, children, className, ...rest } = props;

  return (
    <button
      className={cx(
        "flex items-center justify-center flex-1",
        "p-1 rounded-md border-[0.5px] border-transparent",
        "text-sm text-secondary",
        !active && "cursor-pointer",
        active && "bg-primary surface-md text-primary",
      )}
      {...rest}
    >
      {children}
    </button>
  );
};

interface ColorOptionItemProps extends HTMLAttributes<HTMLButtonElement> {
  colorOption: ColorRef;
}

const ColorOptionItem = (props: ColorOptionItemProps) => {
  const { colorOption, className, ...rest } = props;

  const { value, updateValue } = useColorInputContext();

  const label = useMemo(() => {
    return colorOption.type === "semantic"
      ? `${colorOption.groupKey}-${colorOption.colorKey}`
      : `${colorOption.key}-${colorOption.shade}`;
  }, [colorOption]);

  const isActive = useMemo(() => {
    if (!value) return false;

    if (colorOption.type === "semantic" && value.type === "semantic") {
      return (
        colorOption.groupKey === value.groupKey &&
        colorOption.colorKey === value.colorKey
      );
    }

    if (colorOption.type === "primitive" && value.type === "primitive") {
      return colorOption.key === value.key && colorOption.shade === value.shade;
    }

    return false;
  }, [colorOption, value]);

  return (
    <button
      className={cx(
        "flex items-center justify-between w-full",
        "px-2 py-1 rounded-md",
        isActive && "bg-sky-50",
        !isActive && "hover:bg-gray-200 cursor-pointer",
        className,
      )}
      {...rest}
      onClick={() => updateValue(colorOption)}
    >
      <span className="flex items-center gap-2 text-sm text-secondary">
        <ColorIndicator color={colorOption.value} />
        {label}
      </span>

      {isActive && <CheckIcon size={14} className="text-sky-700" />}
    </button>
  );
};
