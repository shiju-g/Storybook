import { action } from "@storybook/addon-actions";
import Input from "./Input";

const meta = {
  title: "input",
  component: Input,
  argTypes: {
    placeholder: { control: "text" },
    name: { control: "text" },
    type: { control: "text" },
    onChange: action("onchange"),
    className: { control: "text" },
    label: { control: "text" },
    noBorder: {
      control: "boolean",
    },
  },
};

export default meta;

export const Name = {
  args: {
    placeholder: "Enter your name",
    value: "",
    type: "text",
    onChange: (e: any) => console.log(e),
    disable: false,
    noBorder: false,
  },
};

export const Email = {
  args: {
    placeholder: "example@mail.com",
    value: "",
    type: "email",
    onChange: (e: any) => console.log(e),
    disable: false,
    noBorder: false,
  },
};

export const phone = {
  args: {
    placeholder: "Enter your mobile number",
    value: "",
    type: "number",
    onChange: (e: any) => console.log(e),
    disable: false,
    noBorder: false,
  },
};

export const Disable = {
  args: {
    placeholder: "Enter your mobile number",
    value: "Diabled input",
    type: "text",
    onChange: (e: any) => console.log(e),
    disable: true,
    noBorder: false,
  },
};

export const NOBORDER = {
  args: {
    placeholder: "without border",
    value: "",
    type: "text",
    onChange: (e: any) => console.log(e),
    disable: false,
    noBorder: true,
  },
};

export const LabelWithInput = {
  args: {
    placeholder: "label with input",
    value: "",
    type: "text",
    onChange: (e: any) => console.log(e),
    disable: false,
    label: "type....",
    noBorder: false,
  },
};
