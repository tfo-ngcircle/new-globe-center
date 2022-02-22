import { Md } from "./md";
import { Tag } from "./tag";

interface Props extends React.HTMLProps<HTMLDivElement> {
  head: React.ReactNode;
  items?: string[];
}

export const TagRow = ({ head, items, className }: Props) => {
  return (
    <div
      className={`flex items-center gap-2 2xl:gap-4 divide-x divide-opacity-30 ${className}`}
    >
      {head}
      <div className="grid lg:flex items-center gap-2 2xl:gap-4 lg:flex-wrap pl-2 xl:pl-4">
        {items?.map((it, i) => (
          <Tag key={i}>
            <Md>{it}</Md>
          </Tag>
        ))}
      </div>
    </div>
  );
};
