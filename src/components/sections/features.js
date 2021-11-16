import Underline from "@/components/underline";
import { FeatureItem } from "../feature-item";
import { getIcon } from "@/components/icons";
import formatHeadline from "@/lib/utils/text";
import { Img } from "../image";
import { HeadingBox } from "../heading";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const underlineVariants = {
  visible: { x: 0, scaleX: -1 },
  hidden: { x: -300, scaleX: -1 },
};

const listVariants = {
  hidden: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

export default function FeaturesSection({ features }) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  return (
    <div className="relative">
      <div className="container">
        <div className="md:flex space-y-4 lg:space-x-8 md:space-y-0 justify-between h-full items-center">
          <Img
            image={features.image}
            className="object-cover relative h-[400px] w-full lg:w-[368px] lg:h-full xl:w-[510px] xl:h-[720px] shadow-lg"
          />
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <HeadingBox>
                <h2 ref={ref}>{formatHeadline(features.headline)}</h2>
                <Underline className="text-primary w-full h-3" />
              </HeadingBox>
              <p>{features.description}</p>
            </div>
            <motion.div
              initial="hidden"
              variants={listVariants}
              animate={controls}
              className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 xl:gap-x-8 gap-y-4 xl:gap-y-6 overflow-hidden"
            >
              {features.features.map((item, i) => (
                <FeatureItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  icon={
                    <span className="rounded-full border border-gray-300 inline-block">
                      {getIcon(item.icon)}
                    </span>
                  }
                />
              ))}
            </motion.div>
          </div>
        </div>
      </div>
      <Underline
        initial="hidden"
        animate={controls}
        variants={underlineVariants}
        transition={{ duration: 0.6 }}
        className="absolute text-primary opacity-70 mix-blend-multiply space-x-[-1px] sale-x-[-1] top-0 mt-4 lg:mt-20 w-48 lg:w-60 xl:w-[500px] h-20 lg:h-40 xl:h-80"
      />
    </div>
  );
}
