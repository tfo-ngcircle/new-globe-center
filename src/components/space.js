import formatHeadline from "@/lib/utils/text";
import { Button } from "./button";
import { Carousel } from "./carousel";
import { Characteristic } from "./characteristic";
import Link from "./link";
import { Underline } from "./underline";

export const Space = ({ space }) => {
  return (
    <div className="slide w-full" data-anchor={space.id}>
      <div className="grid grid-cols-7 w-full h-full items-center">
        <div className="pl-36 pr-20 space-y-10 col-span-3">
          <div className="max-w-min">
            <h5>{formatHeadline(space.subtitle)}</h5>
            <h1>{formatHeadline(space.title)}</h1>
            <Underline className="text-primary w-full h-3 mt-3" />
          </div>
          <p>{space.description}</p>
          <div className="space-y-4">
            <h6>Characteristics</h6>
            <div className="flex gap-4 flex-wrap">
              {space.characteristics.key.map((kc) => (
                <Characteristic it={kc} key={kc.name} />
              ))}
            </div>
          </div>
          <div>
            <Link href={`/space/${space.slug}`}>
              <Button label="learn more" />
            </Link>
          </div>
        </div>
        <div className="col-span-4 h-full relative">
          <Carousel
            className="w-full h-full object-cover absolute"
            images={space.images}
          />
        </div>
      </div>
    </div>
  );
};
