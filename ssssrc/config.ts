import { Config } from "./types";

export const buttonSizeKeys = ["sm", "md", "lg"] as const;

export const config: Config = {
  themes: [
    {
      default: true,
      colors: {
        primitives: [
          {
            key: "neutral",
            values: {
              100: "#f8f9fa",
              200: "#e9ecef",
              300: "#dee2e6",
              400: "#ced4da",
              500: "#adb5bd",
              600: "#6c757d",
              700: "#495057",
              800: "#343a40",
              900: "#212529",
            },
          },
          {
            key: "primary",
            values: {
              100: "#e3f2fd",
              200: "#bbdefb",
              300: "#90caf9",
              400: "#64b5f6",
              500: "#2196f3",
              600: "#1e88e5",
              700: "#1976d2",
              800: "#1565c0",
              900: "#0d47a1",
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
                  key: "neutral",
                  shade: 100,
                },
              },
              {
                key: "foreground",
                primitiveRef: {
                  key: "neutral",
                  shade: 900,
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
                  key: "primary",
                  shade: 500,
                },
              },
              {
                key: "primaryHover",
                primitiveRef: {
                  key: "primary",
                  shade: 600,
                },
              },
            ],
          },
        ],
      },
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
    },
  ],
  components: {
    button: {
      sizeKeys: ["sm", "md", "lg"] as const,
      variantKeys: ["solid"] as const,
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
      ],
      sizeVariantIntersection: [
        {
          sizeKey: "md",
          variantKey: "solid",
          borderRadius: 6,
          typography: {
            sizeKey: "base",
            variantKey: "medium",
          },
        },
      ],
    },
  },
} as const;
