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
      staggerChildren: 0.06,
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.06,
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
        <div className="lg:flex space-y-4 space-x-2 3xl:space-x-8 lg:space-y-0 justify-between h-full items-center">
          <Img
            image={features.image}
            className="object-cover relative w-full h-[400px] xl:h-auto lg:w-[368px] xl:w-[510px] shadow-lg xl:self-stretch"
          />
          <div className="space-y-4 lg:space-y-6">
            <div className="space-y-4">
              <HeadingBox>
                <h2>{formatHeadline(features.headline)}</h2>
                <Underline className="text-primary w-full h-3" />
              </HeadingBox>
              <p>{features.description}</p>
            </div>
            <motion.div
              ref={ref}
              initial="hidden"
              variants={listVariants}
              animate={controls}
              className="grid grid-cols-2 md:grid-cols-3 gap-x-5 xl:gap-x-8 gap-y-4 3xl:gap-y-6 overflow-hidden"
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
        className="absolute text-primary opacity-70 mix-blend-multiply space-x-[-1px] sale-x-[-1] top-0 mt-4 lg:mt-20 w-52 lg:w-60 xl:w-[500px] h-40 lg:h-60 xl:h-80"
      />
    </div>
  );
}
