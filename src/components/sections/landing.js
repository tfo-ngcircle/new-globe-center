import formatHeadline from "@/lib/utils/text";
import { Button } from "../button";
import { Underline } from "../underline";

export default function LandingSection({ landing }) {
  return (
    <div className="h-full relative">
      <div className="w-full h-full absolute brightness-90 overflow-hidden">
        <img
          src={landing.background.src}
          alt={landing.background.alt}
          className="object-cover !my-5 w-full h-full bg-center"
        />
      </div>
      <div className="absolute w-full h-full mix-blend-hard-light opacity-50">
        <Underline className="absolute h-80 w-[500px] right-0 top-0 text-primary space-x-[-1px] drop-shadow-primary" />
        <Underline
          className="absolute h-full w-[1300px] left-0 bottom-0 text-secondary space-x-[-1px] drop-shadow-secondary rotate-180"
          classNameAlt="bg-secondary"
        />
      </div>
      <div className="container h-full flex items-center pt-24">
        <div className="space-y-8 z-10 text-white max-w-min">
          <div className="space-y-5">
            <h1 className="whitespace-nowrap">
              {landing && formatHeadline(landing.headline)}
            </h1>
            <Underline className="text-primary w-full h-3" />
          </div>
          <p className="w-[125%]">{landing && landing.description}</p>
          <Button label="Über uns" type="large" />
        </div>
      </div>
    </div>
  );
}
