import { Underline } from "../underline";
import { FeatureItem } from "../feature-item";
import { getIcon } from "@/components/icons";
import formatHeadline from "@/lib/utils/text";
import { Img } from "../image";
import { HeadingBox } from "../heading";

export default function FeaturesSection({ features }) {
  return (
    <div className="relative">
      <div className="container">
        <div className="md:flex space-y-4 lg:space-x-8 md:space-y-0 justify-between h-full items-center">
          <Img
            image={features.image}
            className="object-cover relative h-[400px] w-full lg:w-[368px] lg:h-full xl:w-[510px] xl:h-[720px] shadow-lg"
          />
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-4">
              <HeadingBox>
                <h2>{formatHeadline(features.headline)}</h2>
                <Underline className="text-primary w-full h-3" />
              </HeadingBox>
              <p>{features.description}</p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-5 xl:gap-x-8 gap-y-4 xl:gap-y-6">
              {features.features.map((item, i) => (
                <FeatureItem
                  key={i}
                  title={item.title}
                  description={item.description}
                  icon={
                    <span className="rounded-full border border-gray-300 inline-block">
                      {getIcon(item.icon)}
                    </span>
                  }
                />
              ))}
            </div>
          </div>
        </div>
      </div>
      <Underline
        initial={{ scaleX: -1, x: 200 }}
        animate={{ x: 0 }}
        transition={{ ease: "easeOut", duration: 1 }}
        className="absolute text-primary opacity-70 mix-blend-multiply space-x-[-1px] sale-x-[-1] top-0 mt-4 lg:mt-20 w-48 lg:w-60 xl:w-[500px] h-20 lg:h-40 xl:h-80"
      />
    </div>
  );
}
