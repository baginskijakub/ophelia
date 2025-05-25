import type { Meta, StoryObj } from "@storybook/react";
import { Logo, LogoSize } from "@ophelia/ui";

const LOGO_SIZES: LogoSize[] = ["sm", "md", "lg", "xl"];

const meta: Meta<typeof Logo> = {
  title: "Logo",
  component: Logo,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: { type: "select" },
      options: LOGO_SIZES,
      description: "Size of the logo.",
      table: {
        type: { summary: LOGO_SIZES.join(" | ") },
        defaultValue: { summary: "md" },
      },
    },
    className: {
      control: false,
      description: "Optional className for custom styling.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Logo>;

export const Basic: Story = {
  render: (props) => <Logo {...props} />,
  name: "Basic",
  args: {
    size: "md",
  },
};
