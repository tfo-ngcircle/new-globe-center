import { useState } from "react";
import { Button } from "../button";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { SocialIcon } from "../socialIcon";
import { motion, useAnimation } from "framer-motion";
import Input from "@/components/input";
import formatHeadline from "@/lib/utils/text";

const variantsClip = {
  open: {
    clipPath: "polygon(100.00% 0.00%,50% 0%,0% 100%,100% 100%)",
  },
  close: { clipPath: "polygon(100% 0%,95% 0%,95% 100%,100% 100%)" },
};

const variantsForm = {
  open: { x: 0 },
  close: { x: 250 },
};

export default function ContactSection({ contact, paddingTop }) {
  let [isOpen, setIsOpen] = useState(false);

  const clipControls = useAnimation();
  const formControls = useAnimation();

  const sequence = () => {
    clipControls.start(isOpen ? "close" : "open");
    formControls.start(isOpen ? "open" : "close");
  };

  isOpen ? sequence() : sequence();

  return (
    <div className="lg:absolute top-0 h-full lg:h-screen w-full bg-secondary text-white flex">
      <div
        className="lg:my-auto container"
        style={{
          paddingTop: paddingTop / 1.75,
          paddingBottom: paddingTop / 1.75,
        }}
      >
        <div className="max-w-lg space-y-10 py-16 lg:mt-16">
          <h2>{formatHeadline(contact.headline)}</h2>
          <Button label="jetzt anfragen" onTap={(e, i) => setIsOpen(!isOpen)} />
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
        <div className="absolute right-0 px-10 flex items-center h-full w-full justify-center">
          <motion.div
            initial="close"
            animate={formControls}
            variants={variantsForm}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 15 },
              duration: 0.5,
            }}
            className="space-y-10 bg-white p-10 mt-12 w-96 flex flex-col justify-end text-gray-600 shadow-3xl"
          >
            <h5>Jetzt Anfrage stellen</h5>
            <Input id="name" label="Name" />
            <Input id="email" label="Email" />
            <Input id="subject" label="Betreff" />
            <Input id="message" label="Nachricht" type="textarea" />
            <Input
              id="terms"
              label="Ich habe die Datenschutzerklärung gelesen und stimme zu."
              type="checkbox"
            />
            <Button label="Absenden" />
          </motion.div>
        </div>
        <motion.img
          initial="open"
          animate={clipControls}
          variants={variantsClip}
          src={contact.background.src}
          alt={contact.background.alt}
          className="object-cover brightness-75 h-full w-full"
          transition={{
            clipPath: { type: "spring", stiffness: 300, damping: 30 },
            duration: 0.5,
          }}
        />
      </div>
    </div>
  );
}
