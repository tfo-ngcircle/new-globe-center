import { GaleryItem } from "../galery-item";
import { Underline } from "../underline";

export default function GallerySection() {
  return (
    <div className="h-full flex flex-col justify-end">
      <div className="container space-y-5">
        <div className="max-w-max space-y-4">
          <h2>
            Lorem ipsum<span className="text-primary">.</span>
          </h2>
          <Underline className="text-primary w-full h-3" />
        </div>
        <p className="max-w-4xl">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa.
        </p>
      </div>
      <div className="grid grid-cols-5 my-8 2xl:my-16 space-x-[-4.3rem] gap-y-5 w-[104%]">
        <GaleryItem className="-ml-16" />
        <GaleryItem />
        <GaleryItem />
        <GaleryItem />
        <GaleryItem />
        <GaleryItem />
        <GaleryItem />
        <GaleryItem />
        <GaleryItem />
        <GaleryItem />
      </div>
    </div>
  );
}
