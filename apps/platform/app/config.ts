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
            key: "surface",
            values: [
              {
                key: "background",
                primitiveRef: {
                  key: "gray",
                  shade: 100,
                  value: "#f8f9fa",
                },
              },
              {
                key: "foreground",
                primitiveRef: {
                  key: "gray",
                  shade: 900,
                  value: "#212529",
                },
              },
            ],
          },
          {
            key: "interactive",
            values: [
              {
                key: "primary",
                primitiveRef: {
                  key: "brand",
                  shade: 500,
                  value: "#2196f3",
                },
              },
              {
                key: "secondary",
                primitiveRef: {
                  key: "brand",
                  shade: 600,
                  value: "#1e88e5",
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
      {
        key: "xl",
        fontSize: "20px",
        lineHeight: "32px",
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
      {
        key: "semibold",
        fontWeight: 600,
      },
      {
        key: "bold",
        fontWeight: 700,
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
          horizontalPadding: "12px",
          height: "32px",
        },
        {
          key: "md",
          horizontalPadding: "16px",
          height: "40px",
        },
        {
          key: "lg",
          horizontalPadding: "20px",
          height: "48px",
        },
      ],
      variants: [
        {
          key: "solid",
          background: {
            groupKey: "interactive",
            colorKey: "primary",
          },
          border: {
            width: "1px",
            color: {
              groupKey: "interactive",
              colorKey: "primary",
            },
          },
          hover: {
            background: {
              groupKey: "interactive",
              colorKey: "primaryHover",
            },
            border: {
              width: "1px",
              color: {
                groupKey: "interactive",
                colorKey: "primaryHover",
              },
            },
            opacity: 1,
            transition: {
              duration: "200ms",
              timingFunction: "ease-in-out",
            },
          },
          focus: {
            background: {
              groupKey: "interactive",
              colorKey: "primary",
            },
            border: {
              width: "1px",
              color: {
                groupKey: "interactive",
                colorKey: "primary",
              },
            },
            outline: {
              width: "2px",
              color: {
                groupKey: "interactive",
                colorKey: "primary",
              },
            },
            opacity: 1,
            transition: {
              duration: "150ms",
              timingFunction: "ease-out",
            },
          },
        },
        {
          key: "surface",
          background: {
            groupKey: "surface",
            colorKey: "background",
          },
          border: {
            width: "1px",
            color: {
              groupKey: "interactive",
              colorKey: "primary",
            },
          },
          hover: {
            background: {
              groupKey: "interactive",
              colorKey: "primaryHover",
            },
            border: {
              width: "1px",
              color: {
                groupKey: "interactive",
                colorKey: "primaryHover",
              },
            },
            opacity: 1,
            transition: {
              duration: "200ms",
              timingFunction: "ease-in-out",
            },
          },
          focus: {
            background: {
              groupKey: "interactive",
              colorKey: "primary",
            },
            border: {
              width: "1px",
              color: {
                groupKey: "interactive",
                colorKey: "primary",
              },
            },
            outline: {
              width: "2px",
              color: {
                groupKey: "interactive",
                colorKey: "primary",
              },
            },
            opacity: 1,
            transition: {
              duration: "150ms",
              timingFunction: "ease-out",
            },
          },
        },
      ],
      sizeVariantIntersection: [
        {
          sizeKey: "sm",
          variantKey: "solid",
          borderRadius: 6,
          typography: {
            sizeKey: "sm",
            variantKey: "medium",
          },
        },
        {
          sizeKey: "sm",
          variantKey: "surface",
          borderRadius: 6,
          typography: {
            sizeKey: "sm",
            variantKey: "medium",
          },
        },
        {
          sizeKey: "md",
          variantKey: "solid",
          borderRadius: 8,
          typography: {
            sizeKey: "base",
            variantKey: "medium",
          },
        },
        {
          sizeKey: "md",
          variantKey: "surface",
          borderRadius: 8,
          typography: {
            sizeKey: "base",
            variantKey: "medium",
          },
        },
        {
          sizeKey: "lg",
          variantKey: "solid",
          borderRadius: 12,
          typography: {
            sizeKey: "lg",
            variantKey: "semibold",
          },
        },
        {
          sizeKey: "lg",
          variantKey: "surface",
          borderRadius: 12,
          typography: {
            sizeKey: "lg",
            variantKey: "semibold",
          },
        },
      ],
    },
  },
};
