import { Underline } from "../underline";
import { Phone } from "@/icons/phone";
import { FeatureItem } from "../feature-item";

export default function FeaturesSection() {
  return (
    <div className="relative">
      <div className="container">
        <div className="flex justify-between h-full items-center">
          <img
            src={require("../../../public/facilities_main.jpg")}
            alt="room"
            className="object-cover relative w-[510px] h-[720px]"
          />
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="max-w-max space-y-4">
                <h2>
                  Dein Meeting<span className="text-primary">.</span>
                  <br />
                  Unsere Ausstattung<span className="text-primary">.</span>
                </h2>
                <Underline className="text-primary w-full h-3" />
              </div>
              <p>Das bieten wir dir für dein Meeting.</p>
            </div>
            <div className="grid grid-cols-3 gap-x-16 gap-y-12">
              <FeatureItem
                icon={<Phone className="rounded-full border border-gray-300" />}
                title="Lorem ipsum."
                description="Lorem ipsum dolor sit amet, consetetur."
              />
              <FeatureItem
                icon={<Phone className="rounded-full border border-gray-300" />}
                title="Lorem ipsum."
                description="Lorem ipsum dolor sit amet, consetetur."
              />
              <FeatureItem
                icon={<Phone className="rounded-full border border-gray-300" />}
                title="Lorem ipsum."
                description="Lorem ipsum dolor sit amet, consetetur."
              />
              <FeatureItem
                icon={<Phone className="rounded-full border border-gray-300" />}
                title="Lorem ipsum."
                description="Lorem ipsum dolor sit amet, consetetur."
              />
              <FeatureItem
                icon={<Phone className="rounded-full border border-gray-300" />}
                title="Lorem ipsum."
                description="Lorem ipsum dolor sit amet, consetetur."
              />
              <FeatureItem
                icon={<Phone className="rounded-full border border-gray-300" />}
                title="Lorem ipsum."
                description="Lorem ipsum dolor sit amet, consetetur."
              />
            </div>
          </div>
        </div>
      </div>
      <Underline className="absolute text-primary opacity-70 mix-blend-multiply space-x-[-1px] scale-x-[-1] top-0 mt-20 w-[500px] h-80" />
    </div>
  );
}
