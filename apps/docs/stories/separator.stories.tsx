import type { Meta, StoryObj } from "@storybook/react";
import { Separator } from "@ophelia/ui";

const ORIENTATIONS = ["horizontal", "vertical"] as const;

const meta: Meta<typeof Separator> = {
  title: "Separator",
  component: Separator,
  tags: ["autodocs"],
  argTypes: {
    orientation: {
      control: { type: "select" },
      options: ORIENTATIONS,
      description: "Orientation of the separator.",
      table: {
        type: { summary: ORIENTATIONS.join(" | ") },
        defaultValue: { summary: "horizontal" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Separator>;

export const Basic: Story = {
  render: (props) => <Separator {...props} />,
  name: "Basic",
  args: {
    orientation: "vertical",
  },
};
