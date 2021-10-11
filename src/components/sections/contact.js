import { Button } from "../button";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { SocialIcon } from "../socialIcon";
import formatHeadline from "@/lib/utils/text";

const contact = {
  headline: "Our team is ready to answer your questions.",
  email: "info@newglobecenter.com",
  phone: "+49 531 239 64 190",
  background: {
    src: "https://as2.ftcdn.net/v2/jpg/02/04/18/31/1000_F_204183167_eLpT1Fyt9egBbeJ6AXdWqhoiBRc9AREf.jpg",
    alt: "About",
  },
};

export default function ContactSection({ paddingTop }) {
  return (
    <div className="absolute top-0 h-screen w-full bg-secondary text-white flex">
      <div
        className="my-auto container"
        style={{ paddingTop: paddingTop / 1.75 }}
      >
        <div className="max-w-md space-y-10">
          <h2>{formatHeadline(contact.headline)}</h2>
          <Button label="enquire now" />
          <div className="flex space-x-4">
            <SocialIcon href={"mailto:" + contact.email}>
              <MdEmail />
              <span className="text-sm opacity-70 pr-1">{contact.email}</span>
            </SocialIcon>
            <SocialIcon href={"tel:" + contact.phone}>
              <MdLocalPhone />
              <span className="text-sm opacity-70 pr-1">{contact.phone}</span>
            </SocialIcon>
          </div>
        </div>
      </div>
      <div className="absolute h-full right-0 w-4/6">
        <img
          src={contact.background.src}
          alt={contact.background.alt}
          className="object-cover brightness-75 h-full w-full"
          style={{
            clipPath: "polygon(100.00% 0.00%,50% 0%,0% 100%,100% 100%)",
          }}
        />
      </div>
    </div>
  );
}
