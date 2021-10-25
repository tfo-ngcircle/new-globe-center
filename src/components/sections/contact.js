import { Button } from "../button";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { SocialIcon } from "../socialIcon";
import formatHeadline from "@/lib/utils/text";

export default function ContactSection({ contact, paddingTop }) {
  return (
    <div className="lg:absolute top-0 h-full lg:h-screen w-full bg-secondary text-white flex">
      <div
        className="lg:my-auto container"
        style={{
          paddingTop: paddingTop / 1.75,
          paddingBottom: paddingTop / 1.75,
        }}
      >
        <div className="max-w-lg space-y-10 py-16 lg:py-0">
          <h2>{formatHeadline(contact.headline)}</h2>
          <Button label="jetzt anfragen" />
          <div className="flex flex-wrap gap-4">
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
      <div className="hidden lg:block h-full lg:absolute bottom-0 right-0 w-4/6">
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
