import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";

interface Props extends HTMLMotionProps<"div"> {
  classNameAlt?: string;
}

const Underline = React.forwardRef<HTMLDivElement, Props>(
  ({ className, classNameAlt = "bg-primary", ...props }, ref) => {
    return (
      <motion.div
        className={`flex fill-current ${className}`}
        {...props}
        ref={ref}
      >
        <svg viewBox="0 0 12.168 12" className="h-full">
          <path d="m0 0 11.4 12h.76V0Z" />
        </svg>
        <span className={`${classNameAlt} bg-current flex-grow`} />
      </motion.div>
    );
  }
);

Underline.displayName = "Underline";

export default Underline;
