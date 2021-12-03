import formatHeadline from "@/lib/utils/text";
import { Button } from "../button";
import { Logo } from "../logo";
import { Img } from "../image";
import Link from "next/link";
import { MdLocalPhone } from "react-icons/md";
import { SocialIcon } from "../socialIcon";

export default function AboutSection({ about, width }) {
  return (
    <div className="overflow-hidden">
      <div className="container">
        <div className="relative md:grid grid-cols-10 2xl:grid-cols-7 items-center gap-12">
          <div className="space-y-6 md:space-y-10 flex flex-col col-span-5 2xl:col-span-4">
            <Logo isFull />
            <div className="space-y-6 md:space-y-12">
              <h3>{formatHeadline(about.headline)}</h3>
              <div className="flex flex-wrap gap-6 lg:gap-20">
                <div className="space-y-1">
                  <h5>Nancy Migliore</h5>
                  <p>Empfangsmanagement</p>
                  <SocialIcon
                    href={"tel:0162 3057907"}
                    className="border-secondary border max-w-max border-opacity-10 rounded-xl"
                  >
                    <MdLocalPhone />
                    <span className="text-sm pr-1">{"0162 3057907"}</span>
                  </SocialIcon>
                </div>
                <div className="space-y-1">
                  <h5>Francesca Ngameni</h5>
                  <p>Kundenmanagement</p>
                  <SocialIcon
                    href={"tel:0178 3528932"}
                    className="border-secondary border max-w-max border-opacity-10 rounded-xl"
                  >
                    <MdLocalPhone />
                    <span className="text-sm pr-1">{"0178 3528932"}</span>
                  </SocialIcon>
                </div>
              </div>
            </div>
            <Link href="/about" passHref>
              <Button label="Mehr erfahren" className="mt-4 max-w-min" />
            </Link>
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
