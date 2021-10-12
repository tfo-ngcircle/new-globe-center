import { Logo } from "./logo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SocialIcon } from "./socialIcon";
import Link from "./link";

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

export default function Footer() {
  return (
    <div className="bg-black text-white">
      <footer className="divide-y divide-gray-800">
        <div className="container flex justify-between py-16">
          <div>
            <Logo isFull classNameFlag="text-white" />
          </div>
          <div>Hi</div>
        </div>
        <div className="py-4">
          <div className="container flex justify-between items-center">
            <div className="flex space-x-8">
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
            <div className="text-gray-500 flex space-x-8">
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
