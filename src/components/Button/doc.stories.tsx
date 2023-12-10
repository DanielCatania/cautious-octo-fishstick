import type { Meta, StoryObj } from "@storybook/react";

import Button from ".";

const meta = {
  title: "Components/Button",
  component: Button,
} satisfies Meta<typeof Button>;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Button",
  },
};

export const Stylized: Story = {
  args: {
    children: "Stylized Button",
    color: "white",
    backgroundColor: "red",
  },
};

export default meta;
