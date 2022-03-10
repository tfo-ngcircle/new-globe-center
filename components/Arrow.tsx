import React from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
  action: Action;
  color?: string;
}

export function Arrow(props: Props) {
  return (
    <div
      className={`fp-controlArrow fp-${props.action} !z-50`}
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
