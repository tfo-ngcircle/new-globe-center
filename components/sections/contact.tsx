import { yupResolver } from "@hookform/resolvers/yup";
import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { MdEmail, MdLocalPhone } from "react-icons/md";
import { useInView } from "react-intersection-observer";
import * as Yup from "yup";
import { postApi } from "../../lib/api";
import { Contact, Section } from "../../typings";
import formatHeadline from "../../utils/text";
import Button from "../button";
import MyDialog from "../dialog";
import Input from "../input";
import { SocialIcon } from "../socialIcon";

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

const validationSchema = Yup.object().shape({
  name: Yup.string().min(3).required(),
  email: Yup.string().email().required(),
  subject: Yup.string().min(3).required(),
  message: Yup.string().min(20).required(),
  terms: Yup.boolean().oneOf(
    [true],
    "Sie müssen die Allgemeinen Geschäftsbedingungen akzeptieren"
  ),
});

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

  let [isDialogOpen, setDialogOpen] = useState(false);

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

  const {
    control,
    register,
    handleSubmit,
    reset,
    formState: { isDirty, isValid, errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  return (
    <div className="lg:absolute top-0 h-full lg:h-screen w-full bg-secondary text-white flex overflow-hidden">
      <div
        className="lg:my-auto container"
        style={{
          paddingTop: paddingTop / 1.75,
          paddingBottom: paddingTop / 1.75,
        }}
      >
        <MyDialog isOpen={isDialogOpen} onClose={() => setDialogOpen(false)}>
          <div className="h-screen w-screen flex items-center justify-center bg-black bg-opacity-50">
            <h4
              className="text-center bg-white px-16 pt-10 pb-12 drop-shadow-primary"
              style={{
                clipPath:
                  "polygon(0.00% 0.00%,90.00% 0.00%,100% 100%,10.00% 100.00%)",
              }}
            >
              {formatHeadline(
                "Vielen Dank für Ihre Nachricht. Wir werden Sie in Kürze kontaktieren."
              )}
            </h4>
          </div>
        </MyDialog>
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
          <motion.form
            initial="close"
            animate={formControls}
            variants={variantsForm}
            transition={{
              x: { type: "spring", stiffness: 300, damping: 15 },
              duration: 0.5,
            }}
            className="space-y-10 bg-white p-10 mt-12 w-96 flex flex-col justify-end text-gray-600 shadow-3xl"
            onSubmit={handleSubmit((d) => {
              postApi("/messages", { data: d }).then(() => {
                setDialogOpen(true);
                setTimeout(() => {
                  setDialogOpen(false);
                  setIsOpen(false);
                }, 3000);
                reset();
              });
            })}
          >
            <h5>Jetzt Anfrage stellen</h5>
            <Input id="name" label="Name" {...register("name")} />
            <Input id="email" label="Email" {...register("email")} />
            <Input id="subject" label="Betreff" {...register("subject")} />
            <Input
              id="message"
              label="Nachricht"
              type="textarea"
              {...register("message")}
            />
            <Input
              id="terms"
              label="Ich habe die Datenschutzerklärung gelesen und stimme zu."
              type="checkbox"
              {...register("terms")}
            />
            <Button label="Absenden" type="submit" />
          </motion.form>
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
