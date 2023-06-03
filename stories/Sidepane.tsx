import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { AiFillCloseCircle } from "react-icons/ai";

interface Props {
  children: any;
  title?: string;
  dir?: "" | "rtl";
  open?: boolean;
  setOpen?: any;
}

export default function Example({
  children,
  title,
  dir,
}: //   open,
//   setOpen,
Props) {
  const [open, setOpen] = useState(true);

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <div className="fixed inset-0" />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div
              className={
                dir === "rtl"
                  ? "pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10"
                  : "pointer-events-none fixed inset-y-0 left-0 flex max-w-full "
              }
            >
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom={
                  dir === "rtl" ? "translate-x-full" : "-translate-x-full"
                }
                enterTo={dir === "rtl" ? "translate-x-0" : "-translate-x-0"}
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom={dir === "rtl" ? "translate-x-0" : "-translate-x-0"}
                leaveTo={
                  dir === "rtl" ? "translate-x-full" : "-translate-x-full"
                }
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col  bg-white py-6 shadow-xl">
                    <div className="px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                          {title}
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <AiFillCloseCircle
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="relative mt-6 flex-1 px-4 sm:px-6">
                      {/* Your content */}
                      {children}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
