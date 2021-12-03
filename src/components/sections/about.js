import formatHeadline from "@/lib/utils/text";
import { Button } from "../button";
import { Logo } from "../logo";
import { Img } from "../image";
import Link from "next/link";

export default function AboutSection({ about, width }) {
  return (
    <>
      <Img
        image={about.image}
        className="object-cover absolute right-0 bottom-0 h-[90%]"
      />
      <div className="container">
        <div className="relative md:grid grid-cols-10 2xl:grid-cols-7 items-center gap-12">
          <div className="space-y-6 md:space-y-10 flex flex-col col-span-5 2xl:col-span-4">
            <Logo isFull />
            <div className="space-y-6 md:space-y-10">
              <h3>{formatHeadline(about.headline)}</h3>
              <ul className="list-disc list-outside marker:text-primary 2xl:space-y-4 pl-5">
                {about.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>
            <Link href="/about" passHref>
              <Button label="Mehr erfahren" className="mt-4 max-w-min" />
            </Link>
          </div>
        </div>
        <div className="h-full col-span-4 2xl:col-span-3 py-6 md:py-2"></div>
      </div>
    </>
  );
}
