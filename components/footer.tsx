import { useContext } from "react";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { GlobalContext } from "../pages/_app";
import { FooterColumn } from "../typings";
import MyLink from "./link";
import { Logo } from "./logo";
import { Md } from "./md";
import { SocialIcon } from "./socialIcon";

export default function Footer({ isHome = false }: { isHome?: boolean }) {
  const { footer } = useContext(GlobalContext);
  return (
    <footer className="bg-black text-white divide-y divide-gray-800 h-full flex flex-col justify-end">
      <div className="grow flex items-center">
        <div className="container flex flex-wrap  py-16 gap-8 lg:gap-16 xl:gap-24">
          <div className="pr-12">
            <Logo isFull classNameFlag="text-white opacity-50" height={42} />
          </div>
          {footer.columns.map((item, i) => (
            <FooterGroup key={i} items={item} isHome={isHome} />
          ))}
        </div>
      </div>
      <div className="py-4 h-max">
        <div className="container flex flex-wrap justify-between items-center gap-3 pb-5 md:pb-0">
          <div className="flex gap-3 md:gap-8">
            {footer.socialLinks.map((it) => (
              <SocialIcon href={it.link} key={it.label}>
                {it.label == "facebook" ? (
                  <FaFacebookF />
                ) : it.label == "linkedin" ? (
                  <FaLinkedinIn />
                ) : it.label == "twitter" ? (
                  <FaTwitter />
                ) : undefined}
              </SocialIcon>
            ))}
          </div>
          <div className="text-gray-500 flex flex-wrap gap-3 md:gap-6">
            <span>
              © {new Date().getFullYear()} New Globe Center - NgC GmbH
            </span>
            {footer?.bottomLinks &&
              footer.bottomLinks.map((link, i) => (
                <MyLink
                  href={link.link}
                  key={i}
                  target={link.newTab ? "_blank" : "_self"}
                >
                  {link.label}
                </MyLink>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export const FooterGroup = ({
  isHome = false,
  items,
  ...props
}: {
  isHome?: boolean;
  items: FooterColumn[];
}) => {
  return (
    <div className="gap-5 flex flex-wrap lg:flex-col" {...props}>
      {items.map((item, i) => (
        <div key={i} className="space-y-4">
          <h6>{item.heading}</h6>
          <Md className="text-gray-400 space-y-2" isHome={isHome}>
            {item.body}
          </Md>
        </div>
      ))}
    </div>
  );
};
