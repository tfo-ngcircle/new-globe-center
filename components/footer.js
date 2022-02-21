import { Logo } from "./logo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SocialIcon } from "./socialIcon";
import MyLink from "./link";
import { Md } from "./md";
import { useContext } from "react";
import { GlobalContext } from "../pages/_app";

const footerItems = [
  [
    { heading: "Adresse", body: "Wolfsacker 8\n\n38444 Wolfsburg" },
    { heading: "Telefon", body: "+49 5308 5231220" },
    { heading: "E-Mail", body: "info@newglobecenter.com" },
  ],
  [{ heading: "Über", body: "[Über NGC](/about)\n\n[Galerie](/#gallery)" }],
  [
    {
      heading: "Kontakt",
      body: "[Schreibt uns](/#contact)\n\n[Galerie](/#gallery)",
    },
  ],
  [
    {
      heading: "Räume",
      body: "[Connect](/space/connect)\n\n[Create](/space/create)\n\n[Inspire](/space/inspire)",
    },
  ],
];

export default function Footer() {
  const { footer } = useContext(GlobalContext);
  return (
    <div className="flex flex-col h-full justify-between gap-10 lg:gap-16 pt-24">
      <div className="container flex flex-wrap items-center justify-center gap-8 xl:gap-x-20 my-auto">
        {/* {footer.partners?.map((partner, i) => (
          <Img
            image={partner}
            key={i}
            className="object-contain filter contrast-0 opacity-40 hover:opacity-100 grayscale hover:filter-none transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          />
        ))} */}
      </div>
      <div className="bg-black text-white">
        <footer className="divide-y divide-gray-800">
          <div className="container flex flex-wrap  py-16 gap-8 lg:gap-16 xl:gap-24">
            <div className="pr-12">
              <Logo isFull classNameFlag="text-white" />
            </div>
            {footerItems.map((item, i) => (
              <FooterGroup key={i} items={item} />
            ))}
          </div>
          <div className="py-4">
            <div className="container flex flex-wrap justify-between items-center gap-3 pb-5 md:pb-0">
              <div className="flex gap-3 md:gap-8">
                {footer?.socialLinks?.facebook && (
                  <SocialIcon href={footer.socialLinks.facebook}>
                    <FaFacebookF />
                  </SocialIcon>
                )}
                {footer?.socialLinks?.linkedin && (
                  <SocialIcon href={footer.socialLinks.linkedin}>
                    <FaLinkedinIn />
                  </SocialIcon>
                )}
                {footer?.socialLinks?.twitter && (
                  <SocialIcon href={footer.socialLinks.twitter}>
                    <FaTwitter />
                  </SocialIcon>
                )}
              </div>
              <div className="text-gray-500 flex flex-wrap gap-3 md:gap-6">
                <span>
                  © {new Date().getFullYear()} New Globe Center - NgC GmbH
                </span>
                {footer?.bottomLinks &&
                  footer.bottomLinks.map((link, i) => (
                    <MyLink href={link.destination} key={i} target="_blank">
                      {link.label}
                    </MyLink>
                  ))}
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export const FooterGroup = ({ items, ...props }) => {
  return (
    <div className="gap-5 flex flex-wrap lg:flex-col" {...props}>
      {items.map((item, i) => (
        <div key={i} className="space-y-4">
          <h6>{item.heading}</h6>
          <Md className="text-gray-400 space-y-2">{item.body}</Md>
        </div>
      ))}
    </div>
  );
};
