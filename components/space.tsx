import { motion, useAnimation } from "framer-motion";
import { HiOutlineClock, HiOutlineCurrencyEuro } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import { useIsomorphicLayoutEffect } from "usehooks-ts";
import { SpaceType } from "../typings";
import formatHeadline from "../utils/text";
import Button from "./button";
import Carousel from "./carousel";
import { Characteristic } from "./characteristic";
import { HeadingBox } from "./heading";
import MyLink from "./link";
import { TagRow } from "./tag-row";
import Underline from "./underline";

const transision = { duration: 0.5, type: "tween", ease: "easeOut" };

const itemVariants = {
  visible: { x: 0, opacity: 1 },
  hidden: { x: -300, opacity: 0 },
};

const imageVariants = {
  visible: { opacity: 1, scale: 1 },
  hidden: { opacity: 0, scale: 1.1 },
};

const listVariants = {
  hidden: {
    transition: {
      staggerDirection: 1,
      duration: 0,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

interface SpaceProps extends React.HTMLProps<HTMLDivElement> {
  space: SpaceType;
  isFull?: boolean;
}

export const Space = ({ space, isFull, ...props }: SpaceProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useIsomorphicLayoutEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  return (
    <div data-anchor={space.slug} {...props}>
      <div className="lg:grid lg:grid-cols-7 w-full xl:h-full xl:items-center xl:space-y-0 space-y-6 overflow-hidden">
        <motion.div
          ref={ref}
          initial="hidden"
          variants={listVariants}
          animate={controls}
          className={`${
            isFull ? undefined : "px-5 lg:pl-12 xl:pl-36"
          } lg:pr-10 3xl:pr-20 space-y-4 lg:space-y-6 3xl:space-y-8 col-span-3 py-2`}
        >
          <motion.div
            variants={itemVariants}
            transition={transision}
            className="xl:max-w-min max-w-max"
          >
            <h5>{formatHeadline(space.subtitle)}</h5>
            <HeadingBox>
              <h1>{formatHeadline(space.title)}</h1>
              <Underline className="text-primary w-full h-3" />
            </HeadingBox>
          </motion.div>
          <motion.p
            variants={itemVariants}
            transition={transision}
            className="break-words"
          >
            {isFull ? space.longDescription : space.shortDescription}
          </motion.p>
          <motion.div
            variants={itemVariants}
            transition={transision}
            className="flex gap-2 3xl:gap-4 flex-wrap"
          >
            {space.characteristics.key.data?.map((kc) => (
              <Characteristic it={kc.attributes} key={kc.id} />
            ))}
          </motion.div>
          <motion.div
            variants={itemVariants}
            transition={transision}
            className="space-y-2 lg:space-y-4 divide-y"
          >
            <TagRow
              head={
                <HiOutlineClock className="text-2xl text-primary flex-shrink-0" />
              }
              items={space.availability}
            />
            <TagRow
              head={
                <HiOutlineCurrencyEuro className="text-2xl text-primary flex-shrink-0" />
              }
              items={space.prices?.data?.map(
                (price) =>
                  `${price.attributes.name} **${price.attributes.amount}€**`
              )}
              className="pt-2 lg:pt-4"
            />
          </motion.div>
          {!isFull ? (
            <motion.div variants={itemVariants} transition={transision}>
              <MyLink href={`/space/${space.slug}`}>
                <Button label="Mehr erfahren" />
              </MyLink>
            </motion.div>
          ) : undefined}
        </motion.div>
        <motion.div
          animate={controls}
          variants={imageVariants}
          transition={{ duration: 0.8, type: "tween", ease: "easeOut" }}
          className="col-span-4 h-80 md:h-[30rem] xl:h-full relative bg-secondary"
        >
          {space.images.data && (
            <Carousel
              className="w-full h-full object-cover absolute"
              images={space.images.data?.map((img) => img.attributes)}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};
