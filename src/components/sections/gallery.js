import formatHeadline from "@/lib/utils/text";
import Carousel from "../carousel";
import { Img } from "../image";
import Underline from "@/components/underline";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect, useState } from "react";
import { useElementSize } from "usehooks-ts";

const listVariants = {
  hidden: {
    transition: {
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

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

export default function GallerySection({ gallery, width }) {
  var device = 1;
  if (width >= 1536) device = 5;
  else if (width >= 1280) device = 4;
  else if (width >= 1024) device = 3;
  else if (width >= 768) device = 2;

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    controls.start(inView ? "visible" : "hidden");
  }, [controls, inView]);

  const [maximized, setMaximized] = useState();

  return (
    <div className="h-full flex flex-col justify-end mt-0 md:mt-20 lg:mt-0">
      <div className="container space-y-5">
        <div className="max-w-max space-y-4">
          <h2>{formatHeadline(gallery.headline)}</h2>
          <Underline className="text-primary w-full h-3" />
        </div>
        <p className="max-w-4xl">{gallery && gallery.description}</p>
      </div>
      {device > 2 ? (
        <div className="relative">
          <motion.div
            id="gal"
            ref={ref}
            initial="hidden"
            variants={listVariants}
            animate={controls}
            className="grid md:grid-rows-2 grid-flow-col my-8 2xl:my-16 space-x-[-4.3rem] gap-y-5 w-[104%] overflow-auto scrollbar-hide"
          >
            {gallery.images.map((img, i) => (
              <motion.div
                key={i}
                className={`${
                  i === maximized
                    ? "absolute !w-full h-full !z-50 inset-0  brightness-100"
                    : "h-[14rem] !w-[30rem] brightness-90"
                } first:-ml-16 cursor-pointer transition filter ease-out duration-300 scale-100`}
                whileHover={{
                  scale: 1.12,
                  filter: "brightness(1)",
                  zIndex: 40,
                  transition: { duration: 0.15 },
                }}
                style={{
                  clipPath:
                    i == maximized
                      ? ""
                      : "polygon(0.00% 0.00%,80.00% 0.00%,100% 100%,20.00% 100.00%)",
                }}
                variants={itemVariants}
                transition={{ duration: 0.4, type: "tween", ease: "easeOut" }}
                layout
              >
                {i !== maximized ? (
                  <Img image={img} onClick={() => setMaximized(i)} />
                ) : (
                  <Carousel
                    images={gallery.images}
                    className="absolute h-full max-w-screen object-cover"
                    swipeable
                    maximized
                    onMaximizeChange={(isMaximized) => {
                      setMaximized(!isMaximized ? -1 : i);
                      console.log(isMaximized);
                    }}
                    startingIndex={i}
                  />
                )}
              </motion.div>
            ))}
          </motion.div>
          <div
            className="hidden md:inline-block fp-controlArrow fp-prev !z-50 drop-shadow-md"
            onClick={() => scrollGalerry(-1)}
          />
          <div
            className="hidden md:inline-block fp-controlArrow fp-next !z-50 drop-shadow-md"
            onClick={() => scrollGalerry(1)}
          />
        </div>
      ) : (
        <div className="relative h-96 md:h-[32rem] mt-8 flex w-screen items-center justify-center overflow-hidden">
          <Carousel
            images={gallery.images}
            className="absolute h-full max-w-screen object-cover"
            swipeable
          />
        </div>
      )}
    </div>
  );
}

function scrollGalerry(direction) {
  const him = document.getElementById("gal");
  him.scroll({ left: him.scrollLeft + 512 * direction, behavior: "smooth" });
}
