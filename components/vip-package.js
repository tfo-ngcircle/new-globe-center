import { Img } from "@/components/image";
import { Md } from "@/components/md";

export const VipPackage = ({ image, title, description }) => {
  return (
    <div className="border-[3px] rounded border-primary p-10 items-center gap-4 bg-white">
      <Img image={image} className="w-32 h-32" />
      <div className="space-y-3">
        <h4>{title}</h4>
        <Md>{description}</Md>
      </div>
    </div>
  );
};
