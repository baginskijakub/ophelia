export type PrimitiveShade = {
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
};

export interface PrimitiveGroup {
  key: string;
  values: PrimitiveShade;
}

export interface PrimitiveRef {
  key: string;
  shade: keyof PrimitiveShade;
  value: string;
}

export interface SemanticColor {
  key: string;
  primitiveRef: PrimitiveRef;
}

export interface SemanticGroup {
  key: string;
  values: Array<SemanticColor>;
}

export interface SemanticRef {
  groupKey: string;
  colorKey: string;
}

export interface ColorsConfig {
  primitives: Array<PrimitiveGroup>;
  semantics: Array<SemanticGroup>;
}

export type ColorRef =
  | {
      type: "semantic";
      groupKey: string;
      colorKey: string;
    }
  | {
      type: "primitive";
      key: string;
      shade: keyof PrimitiveShade;
    };
