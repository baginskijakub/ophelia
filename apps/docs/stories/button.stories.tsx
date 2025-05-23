import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "@ophelia/ui";

const BUTTON_VARIANTS = ["solid", "outline", "text"] as const;
const BUTTON_SIZES = ["sm", "md", "lg"] as const;

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: BUTTON_VARIANTS,
      description: "Visual style of the button.",
      table: {
        type: { summary: BUTTON_VARIANTS.join(" | ") },
        defaultValue: { summary: "solid" },
      },
    },
    size: {
      control: { type: "select" },
      options: BUTTON_SIZES,
      description: "Size of the button.",
      table: {
        type: { summary: BUTTON_SIZES.join(" | ") },
        defaultValue: { summary: "md" },
      },
    },
    as: {
      control: false,
      description: "Optional custom element to render instead of `button`.",
    },
    onClick: {
      action: "clicked",
      description: "Click event handler.",
    },
    children: {
      control: "text",
      description: "Content inside the button.",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Basic: Story = {
  render: (props) => <Button {...props} />,
  name: "Basic",
  args: {
    variant: "solid",
    size: "md",
    children: "Continue",
  },
};
