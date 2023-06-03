import { serialize } from "v8";
import Sidebar from "./Sidebar";
import { storiesOf } from "@storybook/react";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineAccountBook, AiOutlineMoneyCollect } from "react-icons/ai";

const meta = {
  title: "Sidebar",
  component: Sidebar,
  argTypes: {
    logo: "text",
  },
};

export default meta;

export const sidebar = {
  args: {
    logo: "https://app.certifiedtrainer.in//img/kdisc-logo.png",
    tabs: [
      {
        id: 1,
        title: (
          <span className="flex items-center">
            <AiOutlineHome className="mr-2" /> Home
          </span>
        ),
        href: "",
      },
      {
        id: 2,
        title: (
          <span className="flex items-center">
            <AiOutlineAccountBook className="mr-2" /> All Appoinments
          </span>
        ),
        href: "",
      },
      {
        id: 3,
        title: (
          <span className="flex items-center">
            <AiOutlineUser className="mr-2" /> Coaches
          </span>
        ),
        href: "",
      },
      {
        id: 4,
        title: (
          <span className="flex items-center">
            <AiOutlineMoneyCollect className="mr-2" /> Salaries
          </span>
        ),
        href: "",
      },
    ],
  },
};
