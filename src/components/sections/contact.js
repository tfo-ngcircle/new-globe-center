import { Button } from "../button";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { SocialIcon } from "../socialIcon";

export default function ContactSection({ paddingTop }) {
  return (
    <div className="absolute top-0 h-screen w-full bg-secondary text-white flex">
      <div className="my-auto container" style={{ paddingTop: paddingTop }}>
        <div className="max-w-md space-y-10">
          <h2>
            Our team is ready to answer your questions
            <span className="text-primary">.</span>
          </h2>
          <Button label="enquire now" />
          <div className="flex space-x-4">
            <SocialIcon>
              <MdEmail />
              <span className="text-sm opacity-70 pr-1">
                info@newglobecenter.com
              </span>
            </SocialIcon>
            <SocialIcon>
              <MdLocalPhone />
              <span className="text-sm opacity-70 pr-1">
                +49 531 239 64 190
              </span>
            </SocialIcon>
          </div>
        </div>
      </div>
      <div className="absolute h-full right-0 w-4/6">
        <img
          src="https://as2.ftcdn.net/v2/jpg/02/04/18/31/1000_F_204183167_eLpT1Fyt9egBbeJ6AXdWqhoiBRc9AREf.jpg"
          alt="about"
          className="object-cover brightness-75 h-full w-full"
          style={{
            clipPath: "polygon(100.00% 0.00%,50% 0%,0% 100%,100% 100%)",
          }}
        />
      </div>
    </div>
  );
}
