import formatHeadline from "../../utils/text";
import Button from "../button";
import { Logo } from "../logo";
import { Img } from "../image";
import MyLink from "next/link";
import { MdLocalPhone } from "react-icons/md";
import { SocialIcon } from "../socialIcon";
import { AboutSectionData } from "../../typings";

interface Props {
  about: AboutSectionData;
}

export default function AboutSection({ about }: Props) {
  return (
    <div className="overflow-hidden">
      <div className="container">
        <div className="relative md:grid grid-cols-10 2xl:grid-cols-7 items-center gap-12">
          <div className="space-y-6 md:space-y-10 flex flex-col col-span-5 2xl:col-span-4">
            <Logo isFull />
            <div className="space-y-6 md:space-y-12">
              <h3>{formatHeadline(about.headline)}</h3>
              <div className="flex flex-wrap gap-6 lg:gap-20">
                {about?.contact.map((item, i) => (
                  <div className="space-y-1" key={i}>
                    <h5>{item.name}</h5>
                    <p>{item.post}</p>
                    <SocialIcon
                      href={`tel:${item?.phone}`}
                      className="border-secondary border max-w-max border-opacity-10 rounded-xl"
                    >
                      <MdLocalPhone />
                      <span className="text-sm pr-1">{item?.phone}</span>
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
      <Img
        image={about.image}
        className="object-cover lg:absolute w-[150%] -mt-16 scale-125 lg:scale-100 lg:w-auto right-0 bottom-0 lg:h-[90%]"
      />
    </div>
  );
}
