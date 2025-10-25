import { SemanticRef } from "../colors";
import { Border, Outline, Transition } from "../helpers";
import { TypographyRef } from "../typography";

export interface ButtonDynamicProperties
  extends ButtonSize,
    ButtonVariant,
    ButtonSizeVariantIntersection {}

export interface ButtonSize {
  key: string;
  horizontalPadding: number;
  height: number;
}

export interface ButtonVariant {
  key: string;
  background?: SemanticRef;
  color?: SemanticRef;
  border?: Border;
  hover: {
    background?: SemanticRef;
    border?: Border;
    opacity?: number;
    transition?: Transition;
  };
  focus: {
    background?: SemanticRef;
    border?: Border;
    outline?: Outline;
    opacity?: number;
    transition?: Transition;
  };
}

export interface ButtonSizeVariantIntersection {
  sizeKey: string;
  variantKey: string;
  borderRadius: number;
  typography: TypographyRef;
}

export interface ButtonConfig {
  sizes: Array<ButtonSize>;
  variants: Array<ButtonVariant>;
  sizeVariantIntersection: Array<ButtonSizeVariantIntersection>;
}
