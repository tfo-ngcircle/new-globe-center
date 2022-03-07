import Image, { ImageProps } from "next/image";
import { MediaType } from "../typings";

interface Props extends Partial<ImageProps> {
  image: MediaType;
}

export const Img = ({ image, ...props }: Props) => {
  return (
    <Image
      {...props}
      src={image.url}
      alt={image.alternativeText || image.caption}
      layout={props.layout || "fill"}
      objectFit={props.objectFit || "cover"}
    />
  );
};
