import { Logo } from "./logo";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { SocialIcon } from "./socialIcon";

export default function Footer() {
  return (
    <div className="bg-black text-white transition-all">
      <footer className="divide-y divide-gray-800">
        <div className="container flex justify-between py-16">
          <div>
            <Logo isFull className="text-white" classNameFlag="text-white" />
          </div>
          <div>Hi</div>
        </div>
        <div className="py-4">
          <div className="container flex justify-between">
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
            <div className="text-gray-500">Hello</div>
          </div>
        </div>
      </footer>
    </div>
  );
}
