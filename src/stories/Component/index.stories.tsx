import type { Meta, StoryObj } from "@storybook/react";

import { Component } from "@/components/Component";

const meta = {
  component: Component,
} satisfies Meta<typeof Component>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: "Test",
  },
};
