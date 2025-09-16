interface TypographySize {
  key: string;
  fontSize: string;
  lineHeight: string;
}

interface TypographyVariant {
  key: string;
  fontWeight: number;
}

interface TypographySizeVariantIntersection {
  sizeKey: string;
  variantKey: string;
  letterSpacing: string;
}

export interface TypographyRef {
  sizeKey: string;
  variantKey: string;
}

export interface TypographyConfig {
  sizes: Array<TypographySize>;
  variants: Array<TypographyVariant>;
  sizeVariantIntersections: Array<TypographySizeVariantIntersection>;
}
