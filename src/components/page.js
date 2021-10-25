import Footer from "./footer";
import Header from "./header";

export const Page = ({ children }) => {
  return (
    <>
      <Header className="bg-white shadow-md md:shadow-none sticky z-20 mb-8" />
      {children}
      <Footer />
    </>
  );
};
