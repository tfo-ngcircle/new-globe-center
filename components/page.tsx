import { NextSeo } from "next-seo";
import React, { useEffect, useState } from "react";
import { PageType } from "../typings";
import Footer from "./footer";
import Header from "./header";
import ToTopHandle from "./to-top";

interface Props {
  page?: PageType;
  children: React.ReactNode;
}

export const Page = ({ page, children }: Props) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setShowButton(window.scrollY > 400);
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <NextSeo
        title={page?.title}
        description={page?.seo?.description}
        openGraph={{
          type: "website",
          url: `https://${process.env.NEXT_PUBLIC_HOST_NAME}`,
          title: page?.seo?.title || page?.title,
          description: page?.seo?.description,
          images: page?.seo?.images?.data?.map((img) => ({
            url: img.attributes.url,
            width: img.attributes.width,
            height: img.attributes.height,
            alt: img.attributes.alternativeText,
          })),
        }}
      />
      <Header className="bg-white shadow-md md:shadow-none sticky z-20 mb-8" />
      {children}
      <Footer />
      <ToTopHandle flip={showButton} onClick={scrollToTop} />
    </>
  );
};
