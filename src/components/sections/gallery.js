import formatHeadline from "@/lib/utils/text";
import { Img } from "../image";
import { Trapazoid } from "../trapazoid";
import { Underline } from "../underline";

export default function GallerySection({ gallery }) {
  return (
    <div className="h-full flex flex-col justify-end">
      <div className="container space-y-5">
        <div className="max-w-max space-y-4">
          <h2>{formatHeadline(gallery.headline)}</h2>
          <Underline className="text-primary w-full h-3" />
        </div>
        <p className="max-w-4xl">{gallery && gallery.description}</p>
      </div>
      <div className="grid grid-cols-5 my-8 2xl:my-16 space-x-[-4.3rem] gap-y-5 w-[104%]">
        {gallery.images.slice(0, 10).map((img, i) => (
          <Trapazoid
            key={i}
            className="first:-ml-16 h-[14rem] brightness-90 hover:drop-shadow-md hover:scale-110 hover:brightness-100 hover:z-40 cursor-pointer"
          >
            <Img image={img} />
          </Trapazoid>
        ))}
      </div>
    </div>
  );
}
