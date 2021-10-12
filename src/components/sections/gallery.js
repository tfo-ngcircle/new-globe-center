import formatHeadline from "@/lib/utils/text";
import { GaleryItem } from "../galery-item";
import { Underline } from "../underline";
import { gallery } from "../../data";

export default function GallerySection() {
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
        {gallery.images.map((img, i) => (
          <GaleryItem key={i} className={`${i === 0 ? "-ml-16" : ""}`} />
        ))}
      </div>
    </div>
  );
}
