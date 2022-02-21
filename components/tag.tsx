import React from "react";

export const Tag = ({ children }: React.HTMLProps<HTMLDivElement>) => {
  return (
    <div className="ring-2 rounded px-2 inline text-sm lg:text-base">
      {children}
    </div>
  );
};
