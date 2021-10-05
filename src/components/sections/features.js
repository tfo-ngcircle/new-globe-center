import { Underline } from "../underline";
import { FeatureItem } from "../feature-item";
import { getIcon } from "@/components/icons";
import formatHeadline from "@/lib/utils/text";

const features = {
  headline: "Dein Meeting. Unsere Ausstattung.",
  description: "Das bieten wir dir für dein Meeting.",
  features: [
    {
      title: "Lorem ipsum.",
      icon: "phone",
      description: "Lorem ipsum dolor sit amet, consetetur.",
    },
    {
      title: "Lorem ipsum.",
      icon: "marker",
      description: "Lorem ipsum dolor sit amet, consetetur.",
    },
    {
      title: "Lorem ipsum.",
      icon: "phone",
      description: "Lorem ipsum dolor sit amet, consetetur.",
    },
    {
      title: "Lorem ipsum.",
      icon: "marker",
      description: "Lorem ipsum dolor sit amet, consetetur.",
    },
    {
      title: "Lorem ipsum.",
      icon: "phone",
      description: "Lorem ipsum dolor sit amet, consetetur.",
    },
    {
      title: "Lorem ipsum.",
      icon: "marker",
      description: "Lorem ipsum dolor sit amet, consetetur.",
    },
  ],
};

export default function FeaturesSection() {
  return (
    <div className="relative">
      <div className="container">
        <div className="flex justify-between h-full items-center">
          <img
            src={require("../../../public/images/facilities_main.jpg")}
            alt="facilities"
            className="object-cover relative w-[510px] h-[720px]"
          />
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="max-w-max space-y-4">
                <h2>{formatHeadline(features.headline)}</h2>
                <Underline className="text-primary w-full h-3" />
              </div>
              <p>{features.description}</p>
            </div>
            <div className="grid grid-cols-3 gap-x-16 gap-y-12">
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
      <Underline className="absolute text-primary opacity-70 mix-blend-multiply space-x-[-1px] scale-x-[-1] top-0 mt-20 w-[500px] h-80" />
    </div>
  );
}
