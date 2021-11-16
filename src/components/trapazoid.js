import { motion } from "framer-motion";

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 256,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

export const Trapazoid = ({ className, children, ...props }) => {
  return (
    <motion.div
      className={`${className} transition filter ease-out duration-300`}
      {...props}
      style={{
        clipPath: "polygon(0.00% 0.00%,80.00% 0.00%,100% 100%,20.00% 100.00%)",
      }}
      variants={itemVariants}
      transition={{ duration: 0.4, type: "tween", ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
