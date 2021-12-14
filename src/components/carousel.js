import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { useInterval } from "usehooks-ts";
import { MdFullscreen } from "react-icons/md";
import MyDialog from "./dialog";
import { useInView } from "react-intersection-observer";

const variants = {
  enter: (direction) => {
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
  exit: (direction) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

const swipeConfidenceThreshold = 10000;
const swipePower = (offset, velocity) => {
  return Math.abs(offset) * velocity;
};

export default function Carousel({
  images,
  className,
  swipeable,
  canMaximize = true,
  maximized = false,
  startingIndex = 0,
  onMaximizeChange = () => {},
}) {
  const [ref, inView] = useInView();
  const [[page, direction], setPage] = useState([startingIndex, 0]);
  const [isMaximised, setIsMaximised] = useState(maximized);

  const paginate = (newDirection) => {
    setPage([page + newDirection, newDirection]);
  };

  const imageIndex = wrap(0, images.length, page);

  useInterval(
    () => {
      paginate(1);
    },
    !isMaximised && inView ? 5000 : null
  );

  const slider = (
    <AnimatePresence initial={false} custom={direction}>
      <div ref={ref} className="w-full h-[90%] absolute" />
      <motion.img
        key={page}
        src={images[imageIndex].src}
        alt={images[imageIndex]?.alt}
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
          isMaximised ? "object-contain w-full h-full inset-0 fixed" : className
        }`}
        drag={swipeable || isMaximised ? "x" : undefined}
        dragConstraints={{ left: 0, right: 0 }}
        dragElastic={1}
        onDragEnd={(e, { offset, velocity }) => {
          const swipe = swipePower(offset.x, velocity.x);
          if (swipe < -swipeConfidenceThreshold) {
            paginate(1);
          } else if (swipe > swipeConfidenceThreshold) {
            paginate(-1);
          }
        }}
      />
    </AnimatePresence>
  );

  return (
    <>
      {slider}
      {canMaximize ? (
        <MdFullscreen
          className="bg-gray-700 text-white bg-opacity-50 text-4xl p-1 rounded-full z-10 absolute top-4 right-4"
          onClick={() => {
            setIsMaximised(true);
            onMaximizeChange(true);
          }}
        />
      ) : undefined}
      <MyDialog
        isOpen={isMaximised}
        onClose={() => {
          setIsMaximised(false);
          onMaximizeChange(false);
        }}
        className="bg-black"
      >
        {slider}
      </MyDialog>
    </>
  );
}
