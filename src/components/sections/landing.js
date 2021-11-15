import formatHeadline from "@/lib/utils/text";
import { navigateFullpage } from "@/lib/utils/utils";
import { Button } from "../button";
import { HeadingBox } from "../heading";
import Underline from "@/components/underline";
import Carousel from "../carousel";

export default function LandingSection({ landing }) {
  return (
    <div className="h-full relative">
      <div className="w-full h-full absolute brightness-75 md:brightness-90 overflow-hidden">
        <Carousel
          images={landing.images}
          className="absolute object-cover md:!my-5 w-full h-full bg-center"
          swipeable
          canMaximize={false}
        />
      </div>
      <div className="absolute w-full h-full mix-blend-hard-light opacity-50">
        <Underline className="absolute h-80 w-[500px] right-0 top-0 text-primary space-x-[-1px] drop-shadow-primary" />
        <Underline
          className="absolute w-full md:h-full lg:w-[768px] xl:w-[960px] 2xl:w-[1300px] left-0 bottom-0 text-secondary space-x-[-1px] drop-shadow-secondary rotate-180"
          classNameAlt="bg-secondary"
        />
      </div>
      <div className="container h-full flex items-center pt-24">
        <div className="space-y-8 z-10 text-white max-w-min">
          <HeadingBox>
            <h1 className="whitespace-nowrap">
              {landing && formatHeadline(landing.headline)}
            </h1>
            <Underline className="text-primary w-full h-3" />
          </HeadingBox>
          <p className="md:w-[125%]">{landing && landing.description}</p>
          <Button
            label="Über uns"
            type="large"
            onClick={(e) => navigateFullpage(e, "about")}
          />
        </div>
      </div>
    </div>
  );
}
