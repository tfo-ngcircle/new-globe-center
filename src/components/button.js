import { motion } from "framer-motion";

export const Button = ({ label, type = "default", className, ...props }) => {
  return (
    <motion.button
      className={`${
        type === "outlined"
          ? "px-10 py-2 !text-primary !bg-white border-2 text-xl hover:!bg-primary hover:!text-white hover:!drop-shadow-none hover:border-primary active:border-primary-light" // outlined
          : type === "large"
          ? "px-28" // large
          : "px-14" // default
      } bg-primary transition-all ease-in text-white hover:drop-shadow-primary active:drop-shadow-primary-sm whitespace-nowrap ${className}`}
      whileTap={{
        scale: 0.95,
        transition: {
          duration: 0.025,
        },
      }}
      {...props}
    >
      {label}
    </motion.button>
  );
};
