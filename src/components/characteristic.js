import { getIcon } from "./icons";

export const Characteristic = ({ it }) => {
  return (
    <div className="flex border pr-6 pl-2 py-2 space-x-2 items-center cursor-pointer hover:border-gray-300">
      {getIcon(it.name, "text-3xl text-gray-500")}
      <div className="text-sm font-bold  text-gray-500 truncate">
        {it.label}
      </div>
    </div>
  );
};
