import type { Meta, StoryObj } from "@storybook/react";
import { Step, Stepper } from "@ophelia/ui";

const meta: Meta<typeof Stepper> = {
  title: "Stepper",
  component: Stepper,
  tags: ["autodocs"],
  argTypes: {
    current: {
      control: { type: "select" },
      options: [0, 1, 2, 3],
      description: "Visual style of the button.",
      table: {
        type: { summary: [0, 1, 2, 3].join(" | ") },
        defaultValue: { summary: "solid" },
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof Stepper>;

export const Basic: Story = {
  render: (props) => (
    <Stepper current={props.current}>
      <Step>First</Step>
      <Step>Second</Step>
      <Step>Third</Step>
      <Step>Fourth</Step>
    </Stepper>
  ),
  name: "Basic",
  args: {
    current: 0,
  },
};
