import Image, { ImageProps } from "next/image";
import { MediaType } from "../typings";

interface Props extends Partial<ImageProps> {
  image?: MediaType;
  useThumbnail?: boolean;
}

export const Img = ({ image, useThumbnail, ...props }: Props) => {
  if (image?.url == null || image?.url == undefined) return <></>;
  return (
    <Image
      {...props}
      src={useThumbnail ? image?.formats?.thumbnail.url : image?.url}
      alt={image?.alternativeText || image?.caption}
      layout={props.layout || "fill"}
      objectFit={props.objectFit || "cover"}
    />
  );
};
