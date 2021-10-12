import Footer from "./footer";
import Header from "./header";

export const Page = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
