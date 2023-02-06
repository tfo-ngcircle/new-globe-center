import { GetServerSideProps } from "next";
import { NextSeo } from "next-seo";
import { useRouter } from "next/router";
import { stringify } from "qs";
import { useState } from "react";
import { useElementSize, useWindowSize } from "usehooks-ts";
import Footer from "../components/footer";
import { Fullpage } from "../components/fullpage";
import Header from "../components/header";
import AboutSection from "../components/sections/about";
import ContactSection from "../components/sections/contact";
import FeaturesSection from "../components/sections/features";
import GallerySection from "../components/sections/gallery";
import LandingSection from "../components/sections/landing";
import MapSection from "../components/sections/map";
import SpacesSection from "../components/sections/spaces";
import ToTopHandle from "../components/to-top";
import { fetchApi } from "../lib/api";
import { Entities, Section } from "../typings";
import { navigateFullpage } from "../utils/utils";

interface Props {
  sections?: Section<any>[];
}

export default function Home({ sections }: Props) {
  const [dark, setDark] = useState(false);
  const [leftContact, setLeftContact] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);
  const [headerRef, { width, height }] = useElementSize<HTMLDivElement>();

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
          paddingTop={window.width < 1024 ? 0 : height > 124 ? 118.19 : height}
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
          <SpacesSection
            spaces={sections
              ?.find((it) => it.anchor == "spaces")
              ?.spaces?.data?.map((it) => it.attributes)}
            width={width}
          />
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
          <Footer isHome />
        </Fullpage>
      ) : undefined}
      <ToTopHandle
        isDark={dark || isTransparent || router.asPath == "/#footer"}
        flip={router.asPath !== "/#landing" && router.asPath !== "/"}
        onClick={(e) => navigateFullpage(e)}
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
        spaces: {
          sort: ["id"],
          populate: {
            characteristics: {
              populate: "*",
            },
            extras: {
              populate: "*",
            },
            technology: {
              populate: "*",
            },
            images: {
              populate: "*",
            },
            prices: {
              populate: "*",
            },
            vip_packages: {
              populate: "*",
            },
          },
        },
      },
      _locale: locale,
    },
    {
      encodeValuesOnly: true,
    }
  );

  const sections = await fetchApi<Entities<Section<any>>>(`/sections?${query}`);

  return {
    props: { sections: sections.data?.map((it) => it.attributes) },
  };
};
