import Sidepane from "./Sidepane";

const meta = {
  title: "sidepane",
  component: Sidepane,
  argTypes: {
    label: { control: "text" },
    children: {
      control: "element",
    },
    title: {
      control: "text",
    },
  },
};

export default meta;

export const sidepane = {
  args: {
    title: "Book appointment",
    children: "hello",
  },
};

export const sidepaneRight = {
  args: {
    title: "Book appointment",
    children: "hello",
    dir: "rtl",
  },
};
