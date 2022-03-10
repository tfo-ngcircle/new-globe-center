import { useRef, useState } from "react";
import { useInterval } from "usehooks-ts";
import { MdFullscreen } from "react-icons/md";
import MyDialog from "./dialog";
import { useInView } from "react-intersection-observer";
import { MediaType } from "../typings";
import Slider from "./Slider";

interface Props extends React.HTMLProps<HTMLImageElement> {
  images?: MediaType[];
  swipeable?: boolean;
  canMaximize?: boolean;
  maximized?: boolean;
  startingIndex?: number;
  onMaximizeChange?: (isMaximised: boolean) => void;
}

export default function Carousel({
  images,
  className,
  swipeable = false,
  canMaximize = true,
  maximized = false,
  startingIndex = 0,
  onMaximizeChange = () => {},
}: Props) {
  const [ref, inView] = useInView();
  const [isMaximised, setIsMaximised] = useState(maximized);

  const paginate = useRef<(dir: number) => void>();

  useInterval(
    () => paginate?.current?.(1),
    !isMaximised && inView ? 5000 : null
  );

  return (
    <>
      <Slider
        ref={ref}
        startingIndex={startingIndex}
        images={images}
        isMaximised={isMaximised}
        swipeable={swipeable}
        className={className}
        paginateRef={paginate}
      />
      {canMaximize ? (
        <>
          <MdFullscreen
            className="bg-gray-700 text-white bg-opacity-50 text-4xl p-1 rounded-full z-10 absolute top-4 right-4"
            onClick={() => {
              setIsMaximised(true);
              onMaximizeChange(true);
            }}
          />

          <MyDialog
            isOpen={isMaximised}
            onClose={() => {
              setIsMaximised(false);
              onMaximizeChange(false);
            }}
            className="bg-black"
          >
            {isMaximised ? (
              <Slider
                ref={ref}
                startingIndex={startingIndex}
                images={images}
                isMaximised={isMaximised}
                swipeable={swipeable}
                className={className}
                paginateRef={paginate}
              />
            ) : undefined}
          </MyDialog>
        </>
      ) : undefined}
    </>
  );
}
