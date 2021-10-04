import Footer from "@/components/footer";
import { Fullpage } from "@/components/fullpage";
import Header from "@/components/header";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import FeaturesSection from "@/components/sections/features";
import GallerySection from "@/components/sections/gallery";
import LandingSection from "@/components/sections/landing";
import MapSection from "@/components/sections/map";
import useDimensions from "@/lib/utils/dimens";
import { useRef, useState } from "react";

export default function Home() {
  const headerRef = useRef();
  const size = useDimensions(headerRef);
  const [dark, setDark] = useState(false);

  return (
    <>
      <Header ref={headerRef} className="z-50" dark={dark} />
      {size.height !== 0 ? (
        <Fullpage
          paddingTop={size.height}
          onLeave={(_, dest, dir) => {
            setDark(dest.anchor === "contact");
          }}
        >
          <LandingSection />
          <FeaturesSection />
          <AboutSection />
          <GallerySection />
          <ContactSection paddingTop={size.height} />
          <MapSection />
          <div className="flex flex-col justify-between h-full">
            <div className="container flex flex-grow items-center text-gray-500">
              <p className="px-24">
                * All prices shown are valid at the time of inquiry, based on
                24-month contracts. Prices are subject to change and will vary
                depending on the specifically selected products and services.
                Terms and Conditions apply.
              </p>
            </div>
            <Footer />
          </div>
        </Fullpage>
      ) : undefined}
    </>
  );
}
