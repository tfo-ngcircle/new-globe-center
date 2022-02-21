import { ImageType } from "../typings";

type Props = JSX.IntrinsicElements["img"] & {
  image: ImageType;
};

export const Img = ({ image, ...props }: Props) => {
  return <img src={image.src} alt={image?.alt} {...props} />;
};
