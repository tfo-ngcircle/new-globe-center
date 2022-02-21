import { HTMLMotionProps, motion } from "framer-motion";

const itemVariants = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
  },
};

interface Props extends HTMLMotionProps<"div"> {
  icon: React.ReactNode;
  description?: string;
}

export const FeatureItem = ({ icon, title, description }: Props) => {
  return (
    <motion.div
      className="space-y-2"
      variants={itemVariants}
      transition={{ duration: 0.5, type: "tween", ease: "easeOut" }}
    >
      {icon}
      <h6>{title}</h6>
      <p className="caption max-w-[200px]">{description}</p>
    </motion.div>
  );
};
