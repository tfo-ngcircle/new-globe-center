import React from "react";
import { useState } from "react";

const Input = React.forwardRef(
  ({ onChange, onBlur, id, label, rows, type = "text" }, ref) => {
    let [isEmpty, setIsEmpty] = useState(true);

    return (
      <div className="relative">
        {type === "textarea" ? (
          <textarea
            type={type}
            name={id}
            id={id}
            ref={ref}
            rows={rows || 3}
            onBlur={onBlur}
            onChange={(event) => {
              onchange && onChange(event);
              setIsEmpty(event.target.value.trim().length <= 0);
            }}
            className="bg-transparent outline-none focus:outline-none border-b-2 focus:border-primary w-full transition-all duration-150"
          />
        ) : (
          <input
            type={type}
            name={id}
            id={id}
            ref={ref}
            onBlur={onBlur}
            onChange={(event) => {
              onchange && onChange(event);
              setIsEmpty(event.target.value.trim().length <= 0);
            }}
            className="bg-transparent outline-none focus:outline-none border-b-2 focus:border-primary w-full transition-all duration-150"
          />
        )}
        <label
          htmlFor={id}
          className={`absolute left-1 top-0 tracking-wider caption transition-all duration-150 hover:cursor-text ${
            !isEmpty ? "-translate-y-4 -translate-x-1" : undefined
          }`}
        >
          {label}
        </label>
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
