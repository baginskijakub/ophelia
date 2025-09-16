import type {
  Border,
  Outline,
  SemanticRef,
  Transition,
  TypographyRef,
} from "@repo/types";

export interface ButtonDynamicProperties {
  horizontalPadding: string;
  height: string;
  background: SemanticRef;
  border: Border;
  hover: {
    background: SemanticRef;
    border: Border;
    opacity: number;
    transition: Transition;
  };
  focus: {
    background: SemanticRef;
    border: Border;
    outline: Outline;
    opacity: number;
    transition: Transition;
  };
  borderRadius: number;
  typography: TypographyRef;
}
