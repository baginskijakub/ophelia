import type { Meta, StoryObj } from "@storybook/react";
import { Flex } from "@ophelia/ui";

const FLEX_DIRECTION = [
  "row",
  "column",
  "row-reverse",
  "column-reverse",
] as const;
const FLEX_ALIGN = [
  "flex-start",
  "center",
  "flex-end",
  "baseline",
  "stretch",
] as const;
const FLEX_JUSTIFY = [
  "flex-start",
  "center",
  "flex-end",
  "space-between",
  "space-around",
  "space-evenly",
] as const;
const FLEX_GAP = [0, 4, 8, 12, 16, 20, 24, 32] as const;

const meta: Meta<typeof Flex> = {
  title: "Layout/Flex",
  component: Flex,
  tags: ["autodocs"],
  argTypes: {
    direction: {
      control: { type: "select" },
      options: FLEX_DIRECTION,
      description: "Direction of item layout in the flex container.",
      table: {
        type: { summary: FLEX_DIRECTION.join(" | ") },
      },
    },
    align: {
      control: { type: "select" },
      options: FLEX_ALIGN,
      description: "Alignment of items along the cross axis.",
      table: {
        type: { summary: FLEX_ALIGN.join(" | ") },
      },
    },
    justify: {
      control: { type: "select" },
      options: FLEX_JUSTIFY,
      description: "Distribution of items along the main axis.",
      table: {
        type: { summary: FLEX_JUSTIFY.join(" | ") },
      },
    },
    gap: {
      control: { type: "select" },
      options: FLEX_GAP,
      description: "Gap between flex items.",
      table: {
        type: { summary: FLEX_GAP.join(" | ") },
      },
    },
    fullWidth: {
      control: "boolean",
      description: "Whether to stretch to full width.",
    },
    fill: {
      control: "boolean",
      description: "Whether to fill available width.",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Flex>;

const boxStyles = {
  backgroundColor: "#cceeff",
  padding: "20px",
  minWidth: "80px",
  borderRadius: "8px",
};

export const Basic: Story = {
  render: (props) => (
    <Flex {...props}>
      <div style={boxStyles}>Item 1</div>
      <div style={boxStyles}>Item 2</div>
      <div style={boxStyles}>Item 3</div>
    </Flex>
  ),
  name: "Basic",
  args: {
    gap: 4,
    justify: "flex-start",
    align: "flex-start",
    direction: "row",
    fullWidth: false,
    fill: false,
  },
};
