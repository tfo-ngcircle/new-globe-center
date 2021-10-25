import formatHeadline from "@/lib/utils/text";
import Carousel from "../carousel";
import { Img } from "../image";
import { Trapazoid } from "../trapazoid";
import { Underline } from "../underline";

export default function GallerySection({ gallery, width }) {
  var device = 0;
  if (width >= 1536) device = 5;
  if (width >= 1280) device = 4;
  else if (width >= 1024) device = 3;
  else if (width >= 768) device = 2;
  else device = 1;

  return (
    <div className="h-full flex flex-col justify-end">
      <div className="container space-y-5">
        <div className="max-w-max space-y-4">
          <h2>{formatHeadline(gallery.headline)}</h2>
          <Underline className="text-primary w-full h-3" />
        </div>
        <p className="max-w-4xl">{gallery && gallery.description}</p>
      </div>
      {device > 2 ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 my-8 2xl:my-16 space-x-[-4.3rem] gap-y-5 w-[104%]">
          {gallery.images.slice(0, device * 2).map((img, i) => (
            <Trapazoid
              key={i}
              className="first:-ml-16 h-[14rem] brightness-90 hover:drop-shadow-md hover:scale-110 hover:brightness-100 hover:z-40 cursor-pointer"
            >
              <Img image={img} />
            </Trapazoid>
          ))}
        </div>
      ) : (
        <div className="relative h-96 mt-8 flex w-screen items-center justify-center overflow-hidden">
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
