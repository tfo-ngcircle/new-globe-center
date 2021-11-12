import { Logo } from "./logo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SocialIcon } from "./socialIcon";
import Link from "./link";
import { Md } from "./md";
import { Img } from "./image";

const partners = [
  {
    src: "https://res.cloudinary.com/ngc-gmbh/image/upload/h_80,c_scale/v1635943722/ngc/digital-solutions_kysjh8.png",
    alt: "",
  },
  {
    src: "https://res.cloudinary.com/ngc-gmbh/image/upload/h_120,c_scale/v1635943721/ngc/ngcircle_zxn73k.png",
    alt: "",
  },
  {
    src: "https://res.cloudinary.com/ngc-gmbh/image/upload/h_90,c_scale/v1635943720/ngc/1tnc_obe1pv.png",
    alt: "",
  },
  {
    src: "https://res.cloudinary.com/ngc-gmbh/image/upload/h_80,c_scale/v1635943722/ngc/digital-solutions_kysjh8.png",
    alt: "",
  },
  {
    src: "https://res.cloudinary.com/ngc-gmbh/image/upload/h_120,c_scale/v1635943721/ngc/ngcircle_zxn73k.png",
    alt: "",
  },
  {
    src: "https://res.cloudinary.com/ngc-gmbh/image/upload/h_90,c_scale/v1635943720/ngc/1tnc_obe1pv.png",
    alt: "",
  },
  {
    src: "https://res.cloudinary.com/ngc-gmbh/image/upload/h_80,c_scale/v1635943722/ngc/digital-solutions_kysjh8.png",
    alt: "",
  },
  {
    src: "https://res.cloudinary.com/ngc-gmbh/image/upload/h_120,c_scale/v1635943721/ngc/ngcircle_zxn73k.png",
    alt: "",
  },
  {
    src: "https://res.cloudinary.com/ngc-gmbh/image/upload/h_90,c_scale/v1635943720/ngc/1tnc_obe1pv.png",
    alt: "",
  },
];

const socialLinks = {
  facebook: "#",
  linkedin: "#",
  twitter: "#",
};

const bottomLinks = [
  { label: "Cookie Policy", destination: "#" },
  { label: "Governance, Conduct and Ethics", destination: "#" },
  { label: "Impressum", destination: "#" },
  { label: "Privacy Policy", destination: "#" },
  { label: "Terms and Conditions", destination: "#" },
];

const footerItems = [
  [
    { heading: "Adresse", body: "Wolfsacker 8\n\n38444 Wolfsburg" },
    { heading: "Telefon", body: "+49 5308 5231220" },
    { heading: "E-Mail", body: "info@ngcircle.com" },
  ],
  [{ heading: "Über", body: "[Über NGC](/about)\n\n[Galerie](/gallery)" }],
  [
    {
      heading: "Kontakt",
      body: "[Schreibt uns](/#contact)\n\n[Galerie](/#gallery)",
    },
  ],
  [
    {
      heading: "Räume",
      body: "[Create](/space/create)\n\n[Connect](/space/connect)\n\n[Inspire](/space/inspire)",
    },
  ],
];

export default function Footer() {
  return (
    <div className="flex flex-col h-full justify-between gap-10 lg:gap-16 pt-24">
      <div className="container flex flex-wrap items-center justify-center gap-8 xl:gap-x-20 my-auto">
        {partners.map((partner, i) => (
          <Img
            image={partner}
            key={i}
            className="object-contain filter contrast-0 opacity-40 hover:opacity-100 grayscale hover:filter-none transition-all duration-300 hover:-translate-y-1 cursor-pointer"
          />
        ))}
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
                {socialLinks.facebook && (
                  <SocialIcon href={socialLinks.facebook}>
                    <FaFacebookF />
                  </SocialIcon>
                )}
                {socialLinks.linkedin && (
                  <SocialIcon href={socialLinks.linkedin}>
                    <FaLinkedinIn />
                  </SocialIcon>
                )}
                {socialLinks.twitter && (
                  <SocialIcon href={socialLinks.twitter}>
                    <FaTwitter />
                  </SocialIcon>
                )}
              </div>
              <div className="text-gray-500 flex flex-wrap gap-3 md:gap-6">
                <span>
                  © {new Date().getFullYear()} New Globe Center - NgC GmbH
                </span>
                {bottomLinks &&
                  bottomLinks.map((link, i) => (
                    <Link href={link.destination} key={i}>
                      {link.label}
                    </Link>
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
