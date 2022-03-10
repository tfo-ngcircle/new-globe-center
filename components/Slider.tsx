import React, { MutableRefObject, useEffect, useState } from "react";
import { AnimatePresence, HTMLMotionProps, motion } from "framer-motion";
import { MediaType } from "../typings";
import { Arrow } from "./Arrow";
import { wrap } from "popmotion";

const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

interface Props extends HTMLMotionProps<"img"> {
  startingIndex?: number;
  images?: MediaType[];
  isMaximised?: boolean;
  swipeable?: boolean;
  paginateRef: MutableRefObject<((dir: number) => void) | undefined>;
}

const Slider = React.forwardRef<HTMLDivElement, Props>(
  (
    { images, startingIndex, isMaximised, swipeable, className, paginateRef },
    ref
  ) => {
    const [[page, direction], setPage] = useState([startingIndex || 0, 0]);

    const paginate = (newDirection: number) => {
      setPage([page + newDirection, newDirection]);
    };

    const imageIndex = wrap(0, images?.length || 0, page);

    useEffect(() => {
      paginateRef.current = paginate;
    });

    return (
      <>
        <AnimatePresence initial={false} custom={direction}>
          <div ref={ref} className="w-full h-[90%] absolute" />
          {images && (
            <motion.img
              key={page}
              src={images[imageIndex].url}
              alt={
                images[imageIndex].alternativeText || images[imageIndex].caption
              }
              custom={direction}
              variants={swipeable || isMaximised ? variants : undefined}
              initial={swipeable || isMaximised ? "enter" : { opacity: 0 }}
              animate={swipeable || isMaximised ? "center" : { opacity: 1 }}
              exit={swipeable || isMaximised ? "exit" : { opacity: 0 }}
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: swipeable || isMaximised ? 0.2 : 1 },
              }}
              className={`${
                isMaximised
                  ? "object-contain w-full h-full inset-0 fixed"
                  : className
              }`}
              drag={swipeable || isMaximised ? "x" : undefined}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={1}
              onDragEnd={(e, { offset, velocity }) => {
                const swipe = swipePower(offset.x, velocity.x);
                if (swipe < -swipeConfidenceThreshold) paginate(1);
                else if (swipe > swipeConfidenceThreshold) paginate(-1);
              }}
            />
          )}
        </AnimatePresence>
        {isMaximised ? (
          <>
            <Arrow action="prev" onClick={() => paginate(-1)} />
            <Arrow action="next" onClick={() => paginate(1)} />
          </>
        ) : undefined}
      </>
    );
  }
);

Slider.displayName = "Slider";

export default Slider;
