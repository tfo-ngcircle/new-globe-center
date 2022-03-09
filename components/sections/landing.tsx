import formatHeadline from "../../utils/text";
import { navigateFullpage } from "../../utils/utils";
import Button from "../button";
import { HeadingBox } from "../heading";
import Underline from "../underline";
import Carousel from "../carousel";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Section } from "../../typings";

const bluelineVariants = {
  hidden: {
    rotate: 180,
    x: -500,
  },
  visible: {
    rotate: 180,
    x: 0,
  },
};

const redlineVariants = {
  hidden: {
    x: 400,
  },
  visible: {
    x: 0,
  },
};

interface Props {
  landing?: Section<null>;
}

export default function LandingSection({ landing }: Props) {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  return (
    <div className="h-full relative">
      <div className="w-full h-full absolute brightness-75 lg:brightness-90 overflow-hidden">
        <Carousel
          images={landing?.image?.data?.map((it) => it.attributes)}
          className="absolute object-cover lg:!my-5 w-full h-full bg-center"
          swipeable
          canMaximize={false}
        />
      </div>
      <div className="absolute w-full h-full mix-blend-hard-light opacity-50 overflow-hidden">
        <Underline
          initial="hidden"
          animate={controls}
          variants={redlineVariants}
          transition={{
            duration: 0.5,
            type: "tween",
            ease: "easeOut",
            delay: 0.25,
          }}
          className="absolute h-80 w-[500px] right-0 top-0 text-primary space-x-[-1px] drop-shadow-primary"
        />
        <Underline
          initial="hidden"
          animate={controls}
          variants={bluelineVariants}
          transition={{
            duration: 0.4,
            type: "tween",
            ease: "easeOut",
            delay: 0.25,
          }}
          className="absolute w-full md:h-full lg:w-[768px] xl:w-[960px] 2xl:w-[1300px] left-0 bottom-0 text-secondary space-x-[-1px] drop-shadow-secondary rotate-180"
          classNameAlt="bg-secondary"
        />
      </div>
      <div className="container h-full flex items-center pt-24 2xl:pt-0 3xl:pt-24">
        <div className="space-y-8 z-10 text-white">
          <HeadingBox>
            <h1 className="whitespace-nowrap">
              {landing && formatHeadline(landing.headline)}
            </h1>
            <Underline className="text-primary w-full h-3" />
          </HeadingBox>
          <p className="w-full sm:w-2/3 3xl:w-2/5 text-lg" ref={ref}>
            {landing && landing.description}
          </p>
          <Button
            label="Über uns"
            is="large"
            onClick={(e) => navigateFullpage(e, "about")}
            className="w-full sm:w-[165%] md:w-auto"
          />
        </div>
      </div>
    </div>
  );
}
