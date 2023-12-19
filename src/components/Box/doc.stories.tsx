import type { Meta, StoryObj } from "@storybook/react";
import Box from ".";

const meta = {
  title: "Components/Box",
  component: Box,
} satisfies Meta<typeof Box>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Box",
  },
};

export default meta;
