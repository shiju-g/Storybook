import type { Meta, StoryObj } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import Button from "./Button";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction

const meta: Meta<typeof Button> = {
  title: "Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    className: {
      control: "text",
    },
    children: {
      control: "text",
    },
    onClick: {
      action: "button clicked",
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    className: "bg-red-500 hover:bg-red-700 px-5 py-2 rounded-lg",
    children: "Primary",
    onClick: action("button clicked"),
  },
};

export const Secondary: Story = {
  args: {
    className: "bg-green-500 px-5 hover:bg-green-600 py-2 rounded-lg",
    children: "Secondary",
    onClick: action("secondary clicked"),
  },
};

export const Large: Story = {
  args: {
    className: "px-20 py-4 ",
    children: "large",
    onClick: action("large clicked"),
  },
};

export const Small: Story = {
  args: {
    className: "px-2.5 py-1 text-sm ",
    children: "small",
    onClick: action("small clicked"),
  },
};
