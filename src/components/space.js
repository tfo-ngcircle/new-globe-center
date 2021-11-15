import formatHeadline from "@/lib/utils/text";
import { HiOutlineClock, HiOutlineCurrencyEuro } from "react-icons/hi";
import { Button } from "./button";
import Carousel from "./carousel";
import { Characteristic } from "./characteristic";
import { HeadingBox } from "./heading";
import Link from "./link";
import { TagRow } from "./tag-row";
import Underline from "@/components/underline";

export const Space = ({ space, isFull, ...props }) => {
  return (
    <div data-anchor={space.slug} {...props}>
      <div className="md:grid md:grid-cols-7 w-full lg:h-full xl:items-center lg:space-y-0 space-y-6">
        <div
          className={`${
            isFull ? undefined : "px-5 lg:pl-12 xl:pl-36"
          } lg:pr-10 xl:pr-20 space-y-4 lg:space-y-6 xl:space-y-8 col-span-3`}
        >
          <div className="lg:max-w-min max-w-max">
            <h5>{formatHeadline(space.subtitle)}</h5>
            <HeadingBox>
              <h1>{formatHeadline(space.title)}</h1>
              <Underline className="text-primary w-full h-3" />
            </HeadingBox>
          </div>
          <p>{space.description[isFull ? 1 : 0]}</p>
          <div className="flex gap-2 xl:gap-4 flex-wrap">
            {space.characteristics.key.map((kc) => (
              <Characteristic it={kc} key={kc.name} />
            ))}
          </div>
          <div className="space-y-2 xl:space-y-4 divide-y">
            <TagRow
              head={<HiOutlineClock className="text-3xl text-primary" />}
              items={space.availability}
            />
            <TagRow
              head={<HiOutlineCurrencyEuro className="text-3xl text-primary" />}
              items={space.price}
              className="pt-2 xl:pt-4"
            />
          </div>
          {!isFull ? (
            <div>
              <Link href={`/space/${space.slug}`}>
                <Button label="Mehr erfahren" />
              </Link>
            </div>
          ) : undefined}
        </div>
        <div className="col-span-4 h-80 lg:h-full relative bg-secondary">
          <Carousel
            className="w-full h-full object-cover absolute"
            images={space.images}
          />
        </div>
      </div>
    </div>
  );
};
