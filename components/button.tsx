import React from "react";
import { HTMLMotionProps, motion } from "framer-motion";

type ButtonType = "default" | "outlined" | "large";

interface Props extends HTMLMotionProps<"button"> {
  label: string;
  is?: ButtonType;
}

function Button({ label, is = "default", className, ...props }: Props) {
  return (
    <motion.button
      className={`${
        is === "outlined"
          ? "px-10 py-2 !text-primary !bg-white border-2 text-xl hover:!bg-primary hover:!text-white hover:!drop-shadow-none hover:border-primary active:border-primary-light" // outlined
          : is === "large"
          ? "px-28" // large
          : "px-14" // default
      } bg-primary transition-all ease-in text-white hover:drop-shadow-primary active:drop-shadow-primary-sm whitespace-nowrap select-none ${className}`}
      whileTap={{
        scale: 0.95,
        transition: {
          duration: 0.0257,
        },
      }}
      {...props}
    >
      {label}
    </motion.button>
  );
}

export default Button;
