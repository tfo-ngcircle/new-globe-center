import { useState } from "react";
import Button from "../button";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { SocialIcon } from "../socialIcon";
import { motion, useAnimation } from "framer-motion";
import Input from "../input";
import formatHeadline from "../../utils/text";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { Contact, Section } from "../../typings";

const variantsClip = {
  open: {
    clipPath: "polygon(100.00% 0.00%,50% 0%,0% 100%,100% 100%)",
  },
  close: { clipPath: "polygon(100% 0%,95% 0%,95% 100%,100% 100%)" },
};

const variantsRight = {
  hidden: { width: "80%" },
  visible: { width: "66.666667%" },
};

const variantsForm = {
  open: { x: 0 },
  close: { x: 250 },
};

const variantsText = {
  hidden: { x: 200, opacity: 0 },
  visible: { x: 0, opacity: 1 },
};

const listVariants = {
  hidden: {
    transition: {
      staggerDirection: -1,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const transition = {
  duration: 0.5,
  type: "tween",
  ease: "easeOut",
};

interface Props {
  contact?: Section<Contact>;
  paddingTop: number;
  leftContact: boolean;
}

export default function ContactSection({
  contact,
  paddingTop,
  leftContact,
}: Props) {
  let [isOpen, setIsOpen] = useState(false);

  const clipControls = useAnimation();
  const formControls = useAnimation();

  const sequence = () => {
    clipControls.start(isOpen ? "close" : "open");
    formControls.start(isOpen ? "open" : "close");
  };

  isOpen ? sequence() : sequence();

  if (leftContact && isOpen) setIsOpen(false);

  const [ref, inView] = useInView();

  useEffect(() => {
    clipControls.start(inView ? "visible" : "hidden");
  }, [clipControls, inView]);

  return (
    <div className="lg:absolute top-0 h-full lg:h-screen w-full bg-secondary text-white flex overflow-hidden">
      <div
        className="lg:my-auto container"
        style={{
          paddingTop: paddingTop / 1.75,
          paddingBottom: paddingTop / 1.75,
        }}
      >
        <motion.div
          className="max-w-lg space-y-10 py-16 lg:mt-16"
          ref={ref}
          initial="hidden"
          variants={listVariants}
          animate={clipControls}
        >
          <motion.h2 variants={variantsText} transition={transition}>
            {formatHeadline(contact?.headline || "")}
          </motion.h2>
          <motion.div variants={variantsText} transition={transition}>
            <Button label="jetzt anfragen" onTap={() => setIsOpen(!isOpen)} />
          </motion.div>
          <motion.div
            className="flex flex-wrap gap-4"
            variants={variantsText}
            transition={transition}
          >
            {contact?.content && (
              <>
                <SocialIcon href={"mailto:" + contact.content[0].email}>
                  <MdEmail />
                  <span className="text-sm opacity-70 pr-1">
                    {contact?.content[0]?.email}
                  </span>
                </SocialIcon>
                <SocialIcon href={"tel:" + contact.content[0].telephone}>
                  <MdLocalPhone />
                  <span className="text-sm opacity-70 pr-1">
                    {contact.content[0].telephone}
                  </span>
                </SocialIcon>
              </>
            )}
          </motion.div>
        </motion.div>
      </div>
      <motion.div
        className="hidden lg:block h-full lg:absolute bottom-0 right-0 w-4/6"
        animate={clipControls}
        variants={variantsRight}
        transition={transition}
      >
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
          src={contact?.image?.data?.[0]?.attributes.url}
          alt={contact?.image?.data?.[0]?.attributes.alternativeText}
          className="object-cover brightness-75 h-full w-full"
          transition={{
            clipPath: { type: "spring", stiffness: 300, damping: 30 },
            duration: 0.5,
          }}
        />
      </motion.div>
    </div>
  );
}
