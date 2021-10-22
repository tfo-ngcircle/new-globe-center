import formatHeadline from "@/lib/utils/text";
import { Button } from "../button";
import { Logo } from "../logo";
import { Img } from "../image";

export default function AboutSection({ about, width }) {
  return (
    <div className="container">
      <div className="relative md:grid grid-cols-10 2xl:grid-cols-2 items-center gap-12">
        <div className="h-full col-span-4 2xl:col-span-1 py-6 md:py-0">
          <span className="absolute left-[-24.1%] 2xl:left-[-27.25%] bg-primary w-[44.4%] 2xl:w-1/2 h-[30%] top-[16.1%] hidden md:block" />
          <Img
            image={about.image}
            className="object-cover"
            style={{
              clipPath:
                width >= 768
                  ? "polygon(0% 0%, 46% 0%, 46% 84%, 0% 84%, 0% 100%, 54% 100%, 54% 16%, 100% 47%, 100% 100%, 0% 100%, 0% 0%)"
                  : undefined,
            }}
          />
        </div>
        <div className="space-y-6 md:space-y-10 flex flex-col col-span-5 2xl:col-span-1">
          <Logo isFull />
          <div className="space-y-6 md:space-y-10">
            <h3>{formatHeadline(about.headline)}</h3>
            <ul className="list-disc list-outside marker:text-primary 2xl:space-y-4 pl-5">
              {about.description.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <Button
          label="Mehr erfahren"
          className="lg:-rotate-90 block md:absolute lg:right-[-8%] xl:-right-4 2xl:-right-32 md:top-full lg:top-[60%] origin-top mt-4 w-full lg:w-auto"
        />
      </div>
    </div>
  );
}
