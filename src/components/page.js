import Footer from "./footer";
import Header from "./header";
import Seo from "./seo";

export const Page = ({ seo, children }) => {
  return (
    <>
      <Seo seo={seo} />
      <Header className="bg-white shadow-md md:shadow-none sticky z-20 mb-8" />
      {children}
      <Footer />
    </>
  );
};
