import Image, { ImageProps } from "next/image";
import { ImageType } from "../typings";

interface Props extends Partial<ImageProps> {
  image: ImageType;
}

export const Img = ({ image, ...props }: Props) => {
  return (
    <Image
      {...props}
      src={image.src}
      alt={image?.alt}
      layout={props.layout || "fill"}
      objectFit={props.objectFit || "cover"}
    />
  );
};
