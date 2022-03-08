import formatHeadline from "../../utils/text";
import Button from "../button";
import { Logo } from "../logo";
import { Img } from "../image";
import MyLink from "next/link";
import { MdLocalPhone } from "react-icons/md";
import { SocialIcon } from "../socialIcon";
import { CorporateContactJsonLd } from "next-seo";
import { Contact, Section } from "../../typings";

interface Props {
  about?: Section<Contact>;
}

export default function AboutSection({ about }: Props) {
  return (
    <div className="overflow-hidden">
      {about?.content && (
        <CorporateContactJsonLd
          url={`https://${process.env.NEXT_PUBLIC_HOST_NAME}`}
          logo={`https://${process.env.NEXT_PUBLIC_HOST_NAME}/images/logo.svg`}
          contactPoint={about.content.map((it) => {
            return {
              telephone: it.telephone,
              contactType: it.contactType,
              areaServed: it.areaServed,
              availableLanguage: ["German", "Deutsch"],
            };
          })}
        />
      )}
      <div className="container">
        <div className="relative md:grid grid-cols-10 2xl:grid-cols-7 items-center gap-12">
          <div className="space-y-6 md:space-y-10 flex flex-col col-span-5 2xl:col-span-4">
            <Logo isFull />
            <div className="space-y-6 md:space-y-12">
              <h3>{formatHeadline(about?.headline || "")}</h3>
              <div className="flex flex-wrap gap-6 lg:gap-20">
                {about?.content?.map((item, i) => (
                  <div className="space-y-1" key={i}>
                    <h5>{item.name}</h5>
                    <p>{item.contactType}</p>
                    <SocialIcon
                      href={`tel:${item?.telephone}`}
                      className="border-secondary border max-w-max border-opacity-10 rounded-xl"
                    >
                      <MdLocalPhone />
                      <span className="text-sm pr-1">{item?.telephone}</span>
                    </SocialIcon>
                  </div>
                ))}
              </div>
            </div>
            <MyLink href="/about" passHref>
              <Button label="Mehr erfahren" className="mt-4 max-w-min z-20" />
            </MyLink>
          </div>
        </div>
        <div className="h-full col-span-4 2xl:col-span-3 py-6 md:py-2"></div>
      </div>
      <div className="lg:absolute h-[32em] w-full -mt-16 scale-125 lg:scale-100 lg:w-1/2 right-0 bottom-0 lg:h-[90%]">
        {about?.image && (
          <Img
            image={about.image.data!.attributes}
            objectFit="contain"
            objectPosition="right bottom"
          />
        )}
      </div>
    </div>
  );
}
