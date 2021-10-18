import formatHeadline from "@/lib/utils/text";
import { HiOutlineClock, HiOutlineCurrencyEuro } from "react-icons/hi";
import { Button } from "./button";
import { Carousel } from "./carousel";
import { Characteristic } from "./characteristic";
import Link from "./link";
import { TagRow } from "./tag-row";
import { Underline } from "./underline";

export const Space = ({ space, isFull, ...props }) => {
  return (
    <div data-anchor={space.slug} {...props}>
      <div className="grid grid-cols-7 w-full h-full items-center">
        <div className="pr-20 space-y-8 col-span-3">
          <div className="max-w-min">
            <h5>{formatHeadline(space.subtitle)}</h5>
            <h1>{formatHeadline(space.title)}</h1>
            <Underline className="text-primary w-full h-3 mt-3" />
          </div>
          <p>{space.description}</p>
          <div className="flex gap-4 flex-wrap">
            {space.characteristics.key.map((kc) => (
              <Characteristic it={kc} key={kc.name} />
            ))}
          </div>
          <div className="space-y-4 divide-y">
            <TagRow
              head={<HiOutlineClock className="text-3xl text-primary" />}
              items={space.availability}
            />
            <TagRow
              head={<HiOutlineCurrencyEuro className="text-3xl text-primary" />}
              items={space.price}
              className="pt-4"
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
