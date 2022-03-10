import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  action: Action;
  color?: string;
}

export function Arrow(props: Props) {
  return (
    <div
      className={`fp-controlArrow fp-${props.action}`}
      ref={(el) =>
        el &&
        el.style.setProperty(
          "border-color",
          props.color || "white",
          "important"
        )
      }
      {...props}
    />
  );
}

type Action = "prev" | "next";
