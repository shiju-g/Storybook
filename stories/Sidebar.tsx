import React from "react";
import Link from "next/link";

interface Props {
  tabs: [{ id: number; title: any; href: string }];
  logo: string;
}

function classNames(
  ...classes: Array<string | undefined | null | false>
): string {
  return classes.filter(Boolean).join(" ");
}

const Sidebar = ({ logo, tabs }: Props) => {
  return (
    <div
      className="z-40 hidden md:flex md:flex-shrink-0"
      style={{ height: "100vh", position: "fixed" }}
    >
      <div className="flex flex-col w-48 lg:w-60">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex flex-col flex-grow pt-3 pb-3 overflow-y-auto bg-gray-100">
          <Link href={"/"}>
            <div className="flex items-center flex-shrink-0 px-2 ml-auto mr-auto cursor-pointer">
              <img src={logo} className="w-40" />
            </div>
          </Link>
          <nav
            className="relative flex flex-col flex-1 mt-5 overflow-y-auto divide-y divide-gray-300"
            aria-label="Sidebar"
          >
            <div className="px-4 mt-4 ">
              {tabs &&
                tabs.map((tab, index) => (
                  <Link
                    key={tab.id}
                    href={tab.href}
                    className={classNames(
                      "hover:bg-indigo-700 hover:text-white group flex items-center mb-2 text-sm px-2 py-2  font-medium rounded-md"
                    )}
                    target="_blank"
                    rel=""
                  >
                    {tab.title}
                  </Link>
                ))}
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
