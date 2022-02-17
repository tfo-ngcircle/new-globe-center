import { getIcon } from "./icons";
import { BiCaretDown } from "react-icons/bi";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Md } from "./md";

export const Characteristic = ({ it }) => {
  const sup = String(it.label).indexOf("^");

  let newLabel;

  sup > 0
    ? (newLabel = (
        <>
          {String(it.label).substring(0, sup)}
          <sup>{String(it.label).substring(sup + 1)}</sup>
        </>
      ))
    : (newLabel = it.label);

  return it.details != undefined ? (
    <Popover className="relative">
      <Popover.Button as="div">
        <Btn it={it} newLabel={newLabel} />
      </Popover.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute z-10 shadow-xl bg-white right-0 py-2 px-4 mt-1 text-base">
          <Md>{it.details}</Md>
        </Popover.Panel>
      </Transition>
    </Popover>
  ) : (
    <Btn it={it} newLabel={newLabel} />
  );
};

const Btn = ({ it, newLabel }) => {
  return (
    <div
      className={`border border-gray-200 flex ${
        it.details != undefined ? "pr-2" : "pr-4"
      } pl-2 py-2 space-x-2 items-center cursor-pointer`}
    >
      {getIcon(it.name, `text-2xl text-gray-500`)}
      <div className={`text-sm font-bold truncate text-gray-500 `}>
        {newLabel}
      </div>
      {it.details != undefined ? (
        <BiCaretDown className={`w-4 h-4 text-gray-500`} />
      ) : undefined}
    </div>
  );
};
