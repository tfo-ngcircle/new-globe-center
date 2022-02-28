import React from "react";
import { BiArrowToTop } from "react-icons/bi";
import { HTMLMotionProps, motion } from "framer-motion";

const bounceTransition = {
  y: {
    duration: 0.8,
    yoyo: Infinity,
    ease: "easeInOut",
  },
};

interface Props extends HTMLMotionProps<"span"> {
  isDark?: boolean;
  flip: boolean;
}

function ToTopHandle(props: Props) {
  return (
    <motion.span
      className={`fixed bottom-0 inset-x-0 mx-auto max-w-fit mb-0 cursor-pointer p-3 ${
        props.isDark ? "text-white" : "text-slate-500"
      }`}
      transition={bounceTransition}
      animate={{
        y: ["-5%", "5%"],
      }}
      whileHover={{ y: ["0%", "0%"] }}
      {...props}
    >
      <BiArrowToTop
        className={`w-10 h-10 transition-all ${props.flip ? "" : "rotate-180"}`}
      />
    </motion.span>
  );
}

export default ToTopHandle;
