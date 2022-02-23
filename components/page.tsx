import Footer from "./footer";
import Header from "./header";
import { NextSeo, NextSeoProps } from "next-seo";
import React from "react";

interface Props {
  seo: NextSeoProps;
  children: React.ReactNode;
}

export const Page = ({ seo, children }: Props) => {
  return (
    <>
      <NextSeo {...seo} />
      <Header className="bg-white shadow-md md:shadow-none sticky z-20 mb-8" />
      {children}
      <Footer />
    </>
  );
};
