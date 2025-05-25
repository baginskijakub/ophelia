import type { Meta, StoryObj } from "@storybook/react";
import { Icon, type IconProps, ICON_MAP } from "@ophelia/ui";

const ICON_NAMES = Object.keys(ICON_MAP) as (keyof typeof ICON_MAP)[];
const ICON_SIZES = ["xs", "sm", "md", "lg", "xl"] as const;

const meta: Meta<typeof Icon> = {
  title: "Icon",
  component: Icon,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: { type: "select" },
      options: ICON_NAMES,
      description: "Name of the icon to render.",
      table: {
        type: { summary: ICON_NAMES.join(" | ") },
      },
    },
    size: {
      control: { type: "select" },
      options: ICON_SIZES,
      description: "Size of the icon.",
      table: {
        type: { summary: ICON_SIZES.join(" | ") },
        defaultValue: { summary: "sm" },
      },
    },
    className: {
      control: false,
      description: "Optional className for custom styling.",
    },
    style: {
      control: false,
      description: "Inline styles.",
    },
    onClick: {
      action: "clicked",
      description: "Click handler for the icon.",
    },
  },
  args: {
    name: "search",
    size: "sm",
  },
};

export default meta;

type Story = StoryObj<typeof Icon>;

export const Basic: Story = {
  render: (args: IconProps) => <Icon {...args} />,
  name: "Basic",
};
