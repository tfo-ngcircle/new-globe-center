import { ImageType } from "../typings";
import { Img } from "./image";
import { Md } from "./md";

type Props = {
  title: string;
  description: boolean;
  image: ImageType;
};

export const VipPackage = ({ image, title, description }: Props) => {
  return (
    <div className="border-[3px] rounded border-primary p-10 items-center gap-4 bg-white">
      <Img image={image} width={128} height={120} layout="fixed" />
      <div className="space-y-3">
        <h4>{title}</h4>
        <Md>{description}</Md>
      </div>
    </div>
  );
};
