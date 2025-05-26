import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "@ophelia/ui";

const INPUT_SIZES = ["sm", "lg"] as const;

const meta: Meta<typeof Input> = {
  title: "Input",
  component: Input,
  tags: ["autodocs"],
  argTypes: {
    id: {
      control: "text",
      description: "Unique identifier for the input and associated label.",
      table: { type: { summary: "string" } },
    },
    label: {
      control: "text",
      description: "Text shown above the input as a label.",
      table: { type: { summary: "string" } },
    },
    assitiveText: {
      control: "text",
      description: "Optional assistive/help text displayed below the input.",
      table: { type: { summary: "string" } },
    },
    error: {
      control: "text",
      description:
        "Error message shown below the input. Overrides assistive text.",
      table: { type: { summary: "string" } },
    },
    placeholder: {
      control: "text",
      description: "Placeholder text inside the input field.",
      table: { type: { summary: "string" } },
    },
    size: {
      control: { type: "select" },
      options: INPUT_SIZES,
      description: "Size of the input field.",
      table: {
        type: { summary: INPUT_SIZES.join(" | ") },
        defaultValue: { summary: "lg" },
      },
    },
    required: {
      control: "boolean",
      description: "Marks the field as required and shows an asterisk.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    fullWidth: {
      control: "boolean",
      description: "If true, makes the input take full width of its container.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
    },
    className: {
      control: false,
      description: "Optional class name for custom styling.",
    },
    ref: {
      control: false,
      description: "Ref to the input element.",
    },
    onChange: {
      action: "changed",
      description: "Fired when the input value changes.",
    },
  },
  args: {
    id: "email",
    label: "Email address",
    placeholder: "you@example.com",
    assitiveText: "We’ll never share your email.",
    size: "lg",
    required: false,
    fullWidth: false,
  },
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Basic: Story = {
  render: (props) => <Input {...props} />,
  name: "Basic",
};
