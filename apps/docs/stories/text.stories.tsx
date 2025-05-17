import type { Meta, StoryObj } from "@storybook/react";
import { Text, type TextProps } from "@ophelia/ui";

const ROLES = ["display", "heading", "paragraph", "label"] as const;

const SIZE_OPTIONS = {
  display: ["sm", "md", "lg", "xl"],
  heading: ["xs", "sm", "md", "lg", "xl", "xxl"],
  paragraph: ["sm", "md", "lg", "xl"],
  label: ["sm", "md", "lg", "xl"],
} as const;

const meta: Meta<typeof Text> = {
  title: "Typography/Text",
  component: Text,
  tags: ["autodocs"],
  argTypes: {
    role: {
      control: { type: "select" },
      options: ROLES,
      description:
        "Text style role (determines font size, line height, weight).",
      table: {
        type: { summary: ROLES.join(" | ") },
      },
    },
    size: {
      control: { type: "select" },
      options: SIZE_OPTIONS.display, // default shown in UI
      description: "Size variant for the selected role.",
      table: {
        type: { summary: "xs | sm | md | lg | xl | xxl" },
      },
    },
    as: {
      control: { type: "text" },
      description: "Optional tag override (e.g. 'h1', 'p', 'span').",
      table: {
        type: { summary: "keyof JSX.IntrinsicElements" },
      },
    },
    children: {
      control: { type: "text" },
      defaultValue: "This is a text component.",
    },
  },
  args: {
    role: "heading",
    size: "lg",
    children: "This is a text component.",
  },
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Basic: Story = {
  render: (args: TextProps) => <Text {...args} />,
  name: "Basic",
  args: {
    role: "heading",
    size: "lg",
    children: "A simple heading",
  },
};
