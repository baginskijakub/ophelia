import type { Meta, StoryObj } from "@storybook/react";
import { Link, type TextProps } from "@ophelia/ui";

const ROLES = ["paragraph", "label"] as const;

const SIZE_OPTIONS = {
  paragraph: ["sm", "md", "lg", "xl"],
  label: ["sm", "md", "lg", "xl"],
} as const;

const meta: Meta<typeof Link> = {
  title: "Link",
  component: Link,
  tags: ["autodocs"],
  argTypes: {
    role: {
      control: { type: "select" },
      options: ROLES,
      description: "Text style role for the link.",
      table: {
        type: { summary: ROLES.join(" | ") },
      },
    },
    size: {
      control: { type: "select" },
      options: SIZE_OPTIONS.paragraph, // default shown in UI
      description: "Size variant for the selected role.",
      table: {
        type: { summary: "sm | md | lg | xl" },
      },
    },
    children: {
      control: { type: "text" },
      defaultValue: "Click me",
    },
  },
  args: {
    role: "paragraph",
    size: "md",
    children: "Click here to learn more",
  },
};

export default meta;

type Story = StoryObj<typeof Link>;

export const Basic: Story = {
  render: (args: any) => <Link {...args} />,
  name: "Basic",
};
