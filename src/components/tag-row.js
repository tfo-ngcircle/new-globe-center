import { Tag } from "./tag";

export const TagRow = ({ head, items, className }) => {
  return (
    <div
      className={`flex items-center gap-2 xl:gap-4 divide-x divide-opacity-30 ${className}`}
    >
      {head}
      <div className="grid lg:flex items-center gap-2 xl:gap-4 lg:flex-wrap pl-2 xl:pl-4">
        {items.map((it, i) => (
          <Tag key={i}>{it}</Tag>
        ))}
      </div>
    </div>
  );
};
