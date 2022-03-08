import Footer from "../components/footer";
import { Fullpage } from "../components/fullpage";
import Header from "../components/header";
import ToTopHandle from "../components/to-top";
import AboutSection from "../components/sections/about";
import ContactSection from "../components/sections/contact";
import FeaturesSection from "../components/sections/features";
import GallerySection from "../components/sections/gallery";
import LandingSection from "../components/sections/landing";
import MapSection from "../components/sections/map";
import { useElementSize, useWindowSize } from "usehooks-ts";
import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { data } from "../data";
import { NextSeo } from "next-seo";
import { navigateFullpage } from "../utils/utils";
import { GetServerSideProps } from "next";
import { stringify } from "qs";
import { fetchApi } from "../lib/api";
import { Entities, Section } from "../typings";

interface Props {
  sections?: Section<any>[];
}

export default function Home({ sections }: Props) {
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [dark, setDark] = useState(false);
  const [leftContact, setLeftContact] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const { width, height } = useElementSize<HTMLDivElement>(headerRef);

  const router = useRouter();
  const window = useWindowSize();

  return (
    <>
      <NextSeo title="Ihr Raum" />
      <Header
        ref={headerRef}
        className={`z-40 fixed`}
        dark={dark && window.width >= 1024}
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
          <LandingSection
            landing={sections?.find((it) => it.anchor == "landing")}
          />
          <FeaturesSection
            features={sections?.find((it) => it.anchor == "features")}
          />
          {/* <SpacesSection spaces={data.spaces} width={width} /> */}
          <AboutSection about={sections?.find((it) => it.anchor == "about")} />
          <GallerySection
            gallery={sections?.find((it) => it.anchor == "gallery")}
            screenWidth={window.width}
          />
          <ContactSection
            contact={sections?.find((it) => it.anchor == "contact")}
            paddingTop={height}
            leftContact={leftContact}
          />
          {window.width >= 1024 ? (
            <MapSection location={sections?.find((it) => it.anchor == "map")} />
          ) : undefined}
          <Footer />
        </Fullpage>
      ) : undefined}
      <ToTopHandle
        isDark={dark || isTransparent || router.asPath == "/#footer"}
        flip={router.asPath !== "/#landing"}
        onClick={(e) => navigateFullpage(e, "landing")}
      />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  const query = stringify(
    {
      fields: ["headline", "description", "anchor"],
      populate: {
        content: { populate: "*" },
        image: { populate: "*" },
      },
      _locale: locale,
    },
    {
      encodeValuesOnly: true,
    }
  );

  console.log(query);

  const sections = await fetchApi<Entities<Section<any>>>(`/sections?${query}`);

  return {
    props: { sections: sections.data?.map((it) => it.attributes) },
  };
};
