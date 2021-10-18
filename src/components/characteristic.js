import { getIcon } from "./icons";

export const Characteristic = ({ it }) => {
  return (
    <div
      className={`${
        it.premium
          ? "border-2 border-yellow-300 bg-gradient-to-r from-yellow-200 to-yellow-300"
          : "border border-gray-200"
      } flex pr-6 pl-2 py-2 space-x-2 items-center cursor-pointer`}
    >
      {getIcon(
        it.name,
        `text-3xl ${it.premium ? "text-yellow-600" : "text-gray-500"}`
      )}
      <div
        className={`text-sm font-bold truncate ${
          it.premium ? "text-yellow-600" : "text-gray-500"
        }`}
      >
        {it.label}
      </div>
    </div>
  );
};
