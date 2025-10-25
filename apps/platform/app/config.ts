import { Config } from "@repo/types";

export const mockOpheliaConfig: Config = {
  themes: [
    {
      name: "light",
      default: true,
      colors: {
        primitives: [
          {
            key: "gray",
            values: {
              100: "#ffffff",
              200: "#fafafa",
              300: "#f2f2f2",
              400: "#e6e6e6",
              500: "#cacaca",
              600: "#a9a9a9",
              700: "#7d7d7d",
              800: "#666666",
              900: "#171717",
            },
          },
          {
            key: "brand",
            values: {
              100: "#F0F7FF",
              200: "#EAF4FF",
              300: "#DFF0FF",
              400: "#CAE8FF",
              500: "#94CDFF",
              600: "#49AEFF",
              700: "#006BFF",
              800: "#0053DD",
              900: "#0048B7",
            },
          },
          {
            key: "success",
            values: {
              100: "#e8f5e8",
              200: "#c8e6c9",
              300: "#a5d6a7",
              400: "#81c784",
              500: "#4caf50",
              600: "#43a047",
              700: "#388e3c",
              800: "#2e7d32",
              900: "#1b5e20",
            },
          },
        ],
        semantics: [
          {
            key: "bg",
            values: [
              {
                key: "base",
                primitiveRef: {
                  key: "gray",
                  shade: 100,
                  value: "#ffffff",
                },
              },
              {
                key: "elevated",
                primitiveRef: {
                  key: "gray",
                  shade: 200,
                  value: "#fafafa",
                },
              },
              {
                key: "action",
                primitiveRef: {
                  key: "gray",
                  shade: 900,
                  value: "#171717",
                },
              },
            ],
          },
          {
            key: "text",
            values: [
              {
                key: "primary",
                primitiveRef: {
                  key: "gray",
                  shade: 900,
                  value: "#171717",
                },
              },
              {
                key: "secondary",
                primitiveRef: {
                  key: "gray",
                  shade: 700,
                  value: "#7d7d7d",
                },
              },
              {
                key: "contrast",
                primitiveRef: {
                  key: "gray",
                  shade: 100,
                  value: "#ffffff",
                },
              },
            ],
          },
          {
            key: "border",
            values: [
              {
                key: "default",
                primitiveRef: {
                  key: "gray",
                  shade: 400,
                  value: "#ebebeb",
                },
              },
              {
                key: "strong",
                primitiveRef: {
                  key: "gray",
                  shade: 400,
                  value: "#",
                },
              },
            ],
          },
        ],
      },
    },
  ],
  typography: {
    sizes: [
      {
        key: "sm",
        fontSize: "14px",
        lineHeight: "20px",
      },
      {
        key: "base",
        fontSize: "16px",
        lineHeight: "24px",
      },
      {
        key: "lg",
        fontSize: "18px",
        lineHeight: "28px",
      },
    ],
    variants: [
      {
        key: "regular",
        fontWeight: 400,
      },
      {
        key: "medium",
        fontWeight: 500,
      },
    ],
    sizeVariantIntersections: [
      {
        sizeKey: "base",
        variantKey: "medium",
        letterSpacing: "0.01em",
      },
      {
        sizeKey: "sm",
        variantKey: "medium",
        letterSpacing: "0.025em",
      },
    ],
  },
  components: {
    button: {
      sizes: [
        {
          key: "sm",
          horizontalPadding: 12,
          height: 28,
        },
        {
          key: "md",
          horizontalPadding: 16,
          height: 36,
        },
        {
          key: "lg",
          horizontalPadding: 20,
          height: 42,
        },
      ],
      variants: [
        {
          key: "solid",
          background: {
            groupKey: "bg",
            colorKey: "action",
          },
          color: {
            groupKey: "text",
            colorKey: "contrast",
          },
          hover: {},
          focus: {},
        },
        {
          key: "surface",
          background: {
            groupKey: "bg",
            colorKey: "elevated",
          },
          color: {
            groupKey: "text",
            colorKey: "primary",
          },
          border: {
            width: "1px",
            color: {
              groupKey: "border",
              colorKey: "default",
            },
          },
          hover: {},
          focus: {},
        },
        {
          key: "ghost",
          color: {
            groupKey: "text",
            colorKey: "primary",
          },
          hover: {},
          focus: {},
        },
      ],
      sizeVariantIntersection: [
        {
          sizeKey: "sm",
          variantKey: "solid",
          borderRadius: 6,
          typography: {
            sizeKey: "sm",
            variantKey: "regular",
          },
        },
        {
          sizeKey: "sm",
          variantKey: "surface",
          borderRadius: 6,
          typography: {
            sizeKey: "sm",
            variantKey: "regular",
          },
        },
        {
          sizeKey: "md",
          variantKey: "solid",
          borderRadius: 8,
          typography: {
            sizeKey: "base",
            variantKey: "regular",
          },
        },
        {
          sizeKey: "md",
          variantKey: "surface",
          borderRadius: 8,
          typography: {
            sizeKey: "base",
            variantKey: "regular",
          },
        },
        {
          sizeKey: "lg",
          variantKey: "solid",
          borderRadius: 8,
          typography: {
            sizeKey: "lg",
            variantKey: "regular",
          },
        },
        {
          sizeKey: "lg",
          variantKey: "surface",
          borderRadius: 8,
          typography: {
            sizeKey: "lg",
            variantKey: "regular",
          },
        },
        {
          sizeKey: "sm",
          variantKey: "ghost",
          borderRadius: 6,
          typography: {
            sizeKey: "sm",
            variantKey: "regular",
          },
        },
        {
          sizeKey: "md",
          variantKey: "ghost",
          borderRadius: 8,
          typography: {
            sizeKey: "base",
            variantKey: "regular",
          },
        },
        {
          sizeKey: "lg",
          variantKey: "ghost",
          borderRadius: 8,
          typography: {
            sizeKey: "lg",
            variantKey: "regular",
          },
        },
      ],
    },
  },
};
