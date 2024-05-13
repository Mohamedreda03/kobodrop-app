import { Disclosure } from "@headlessui/react";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/20/solid";

import Kobodrop from "../assets/logos/kobodrop_logo.svg";

export default function NavBar() {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex h-[15vh] items-center justify-between px-8 max-w-7xl mx-auto">
            <div className="flex">
              <a href="#">
                <img src={Kobodrop} alt="kobodrop logo" />
              </a>
              <div className="hidden md:flex text-lg space-x-4 ml-4">
                <a
                  className="text-gray-500 hover:text-gray-900 active:text-gray-400"
                  href="#features"
                >
                  Features
                </a>
                <a
                  className="text-gray-500 hover:text-gray-900 active:text-gray-400"
                  href="#partners"
                >
                  Partners
                </a>
                <a
                  className="text-gray-500 hover:text-gray-900 active:text-gray-400"
                  href="#reviews"
                >
                  Reviews
                </a>
              </div>
            </div>
            <a
              href="https://play.google.com"
              target="_blank"
              className="bg-gray-800 text-white rounded-xl px-6 py-2 hover:bg-gray-900 active:bg-gray-700 hidden md:block"
            >
              Install Kobodrop
            </a>
            <Disclosure.Button className="rounded-md p-2 text-gray-500 hover:bg-gray-700 hover:text-white block md:hidden">
              {open ? (
                <XMarkIcon className="h-6 w-6 block" />
              ) : (
                <Bars3Icon className="h-6 w-6 block" />
              )}
            </Disclosure.Button>
          </div>
          <Disclosure.Panel className="px-8 py-4">
            <div className="flex flex-col space-y-4">
              <Disclosure.Button
                as="a"
                href="#features"
                className="text-gray-500 hover:text-gray-900 active:text-gray-400"
              >
                Features
              </Disclosure.Button>

              <Disclosure.Button
                as="a"
                className="text-gray-500 hover:text-gray-900 active:text-gray-400"
                href="#partners"
              >
                Partners
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                className="text-gray-500 hover:text-gray-900 active:text-gray-400"
                href="#reviews"
              >
                Reviews
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                className="text-gray-500 hover:text-gray-900 active:text-gray-400"
                href="https://play.google.com"
                target="_blank"
              >
                Install Kobodrop
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
