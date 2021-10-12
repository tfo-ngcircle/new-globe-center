import Footer from "@/components/footer";
import { Fullpage } from "@/components/fullpage";
import Header from "@/components/header";
import AboutSection from "@/components/sections/about";
import ContactSection from "@/components/sections/contact";
import FeaturesSection from "@/components/sections/features";
import GallerySection from "@/components/sections/gallery";
import LandingSection from "@/components/sections/landing";
import MapSection from "@/components/sections/map";
import SpacesSection from "@/components/sections/spaces";
import useDimensions from "@/lib/utils/dimens";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { data } from "src/data";

export default function Home() {
  const headerRef = useRef();
  const size = useDimensions(headerRef);
  const [dark, setDark] = useState(false);

  const router = useRouter();

  return (
    <>
      <Header ref={headerRef} className="z-50" dark={dark} />
      {size.height !== 0 ? (
        <Fullpage
          paddingTop={size.height}
          onLeave={(_, dest, dir) => {
            setDark(dest.anchor === "contact");
            if (router.asPath !== `/#${dest.anchor}`)
              router.replace(`#${dest.anchor}`, undefined, { shallow: true });
          }}
          anchors={[
            "landing",
            "features",
            "spaces",
            "about",
            "gallery",
            "contact",
            "map",
            "footer",
          ]}
        >
          <LandingSection landing={data.landing} />
          <FeaturesSection features={data.features} />
          <SpacesSection spaces={data.spaces} />
          <AboutSection about={data.about} />
          <GallerySection gallery={data.gallery} />
          <ContactSection contact={data.contact} paddingTop={size.height} />
          <MapSection location={data.contact.location} />
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
