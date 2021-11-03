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
import { useElementSize, useWindowSize } from "usehooks-ts";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { data } from "src/data";

export default function Home() {
  const headerRef = useRef();
  const [dark, setDark] = useState(false);
  const [leftContact, setLeftContact] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const { width, height } = useElementSize(headerRef);

  const router = useRouter();
  const window = useWindowSize();

  return (
    <>
      <Header
        ref={headerRef}
        className={`z-40 fixed`}
        dark={dark & (window.width >= 768)}
        isHome
        isTransparent={isTransparent}
      />
      {height !== 0 ? (
        <Fullpage
          className="space-y-20 md:space-y-0"
          paddingTop={window.width < 768 ? 0 : height}
          onLeave={(ori, dest, dir) => {
            setDark(dest.anchor === "contact");
            setIsTransparent(dest.anchor === "landing");
            setLeftContact(ori.anchor === "contact");
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
          <SpacesSection spaces={data.spaces} width={width} />
          <AboutSection about={data.about} width={width} />
          <GallerySection gallery={data.gallery} width={window.width} />
          <ContactSection
            contact={data.contact}
            paddingTop={height}
            leftContact={leftContact}
          />
          {window.width >= 1024 ? (
            <MapSection location={data.contact.location} />
          ) : undefined}
          <div className="flex flex-col justify-between h-full">
            <div className="container flex flex-grow items-center text-gray-500">
              <p className="px-8 lg:px-24 pb-32 md:pb-0">
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
