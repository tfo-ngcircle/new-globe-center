import { Logo } from "./logo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SocialIcon } from "./socialIcon";
import Link from "./link";
import { Md } from "./md";

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
    { heading: "Headquarters", body: "Wolfsacker 8\n\n38444 Wolfsburg" },
    { heading: "Phone", body: "+49 531 239 64 190" },
    { heading: "E-Mail", body: "info@ngcircle.com" },
  ],
  [{ heading: "About", body: "[About NGC](/about)\n\n[Gallery](/gallery)" }],
  [
    {
      heading: "Contact",
      body: "[Email Us](/#contact)\n\n[Gallery](/gallery)",
    },
  ],
  [
    {
      heading: "Ways to work",
      body: "[Create](/space/create)\n\n[Connect](/space/connect)\n\n[Inspire](/space/inspire)",
    },
  ],
];

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <footer className="divide-y divide-gray-800">
        <div className="container flex flex-wrap  py-16 gap-8 lg:gap-16">
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
