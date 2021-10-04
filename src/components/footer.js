import { Logo } from "./logo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SocialIcon } from "./socialIcon";
import Link from "./link";

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
              <SocialIcon>
                <FaFacebookF />
              </SocialIcon>
              <SocialIcon>
                <FaLinkedinIn />
              </SocialIcon>
              <SocialIcon>
                <FaTwitter />
              </SocialIcon>
            </div>
            <div className="text-gray-500 flex space-x-8">
              <Link href="">© 2021 New Globe Center - NgC GmbH</Link>
              <Link href="">Cookie Policy</Link>
              <Link href="">Governance, Conduct and Ethics</Link>
              <Link href="">Impressum</Link>
              <Link href="">Privacy Policy</Link>
              <Link href="">Terms and Conditions</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
