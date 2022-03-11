import React from "react";
import { useState } from "react";

type Props = JSX.IntrinsicElements["input"] &
  JSX.IntrinsicElements["textarea"] & {
    label: string;
    rows?: number;
  };

const Input = React.forwardRef<HTMLInputElement & HTMLTextAreaElement, Props>(
  (props: Props, ref) => {
    let [isEmpty, setIsEmpty] = useState(true);
    return (
      <div
        className={`${
          props.type == "checkbox" ? "inline-flex items-center" : "relative"
        }`}
      >
        {props.type === "textarea" ? (
          <textarea
            name={props.id}
            id={props.id}
            ref={ref}
            rows={props.rows}
            onBlur={props.onBlur}
            onChange={(event) => {
              props.onChange && props.onChange(event);
              setIsEmpty(event.target.value.trim().length <= 0);
            }}
            className="border-0 bg-transparent outline-none focus:ring-0 border-b-2 border-gray-300 focus:border-primary w-full transition-all duration-150 p-0"
          />
        ) : props.type == "checkbox" ? (
          <input
            className="!text-secondary w-6 h-6 mr-4 focus:ring-secondary focus:ring-opacity-25 border border-gray-300 rounded"
            type={props.type}
            name={props.id}
            id={props.id}
            ref={ref}
            onBlur={props.onBlur}
            onChange={props.onChange}
          />
        ) : (
          <input
            type={props.type}
            name={props.id}
            id={props.id}
            ref={ref}
            onBlur={props.onBlur}
            onChange={(event) => {
              props.onChange && props.onChange(event);
              setIsEmpty(event.target.value.trim().length <= 0);
            }}
            className="border-0 bg-transparent outline-none focus:ring-0 border-b-2 focus:border-primary w-full transition-all duration-150 p-0"
          />
        )}
        <label
          htmlFor={props.id}
          className={`tracking-wider caption transition-all duration-150 hover:cursor-text ${
            props.type == "checkbox" ? undefined : "absolute left-1 top-0"
          } ${!isEmpty ? "-translate-y-4 -translate-x-1" : undefined}`}
        >
          {props.label}
        </label>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
