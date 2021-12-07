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
import Seo from "@/components/seo";

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
      <Seo />
      <Header
        ref={headerRef}
        className={`z-40 fixed`}
        dark={dark & (window.width >= 1024)}
        isHome
        isTransparent={isTransparent}
      />
      {height !== 0 ? (
        <Fullpage
          className="space-y-20 lg:space-y-0"
          paddingTop={window.width < 1024 ? 0 : height}
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
          <AboutSection about={data.about} />
          <GallerySection gallery={data.gallery} width={window.width} />
          <ContactSection
            contact={data.contact}
            paddingTop={height}
            leftContact={leftContact}
          />
          {window.width >= 1024 ? (
            <MapSection location={data.contact.location} />
          ) : undefined}
          <Footer />
        </Fullpage>
      ) : undefined}
    </>
  );
}
