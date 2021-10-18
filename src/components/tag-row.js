import { Tag } from "./tag";

export const TagRow = ({ head, items, className }) => {
  return (
    <div
      className={`flex items-center gap-4 divide-x divide-opacity-30 ${className}`}
    >
      {head}
      <div className="flex items-center gap-4 flex-wrap pl-4">
        {items.map((it, i) => (
          <Tag key={i}>{it}</Tag>
        ))}
      </div>
    </div>
  );
};
