import Footer from "./footer";
import Header from "./header";
import { NextSeo, NextSeoProps } from "next-seo";
import React, { useEffect, useState } from "react";
import ToTopHandle from "./to-top";

interface Props {
  seo: NextSeoProps;
  children: React.ReactNode;
}

export const Page = ({ seo, children }: Props) => {
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
      <NextSeo {...seo} />
      <Header className="bg-white shadow-md md:shadow-none sticky z-20 mb-8" />
      {children}
      <Footer />
      <ToTopHandle flip={showButton} onClick={scrollToTop} />
    </>
  );
};
