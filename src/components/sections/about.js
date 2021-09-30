import Image from "next/image";
import about from "../../../public/about.jpg";
import { Button } from "../button";
import { Logo } from "../logo";

export default function AboutSection() {
  return (
    <div className="relative h-full">
      <span className="absolute bg-primary w-[29.35%] h-60 top-[125.5px]" />
      <div className="container relative h-full">
        <div className="flex h-full items-center">
          <div
            className="relative w-2/5 h-full"
            style={{
              clipPath:
                "path('M0 0h281v714.5H0V0zm324 125.5V852h281V397L324 125.5z')",
            }}
          >
            <Image src={about} alt="" layout="fill" objectFit="cover" />
          </div>
          <div className="space-y-10 flex flex-col pl-20 flex-grow">
            <Logo isFull />
            <div className="relative flex">
              <div className="space-y-10">
                <h2>
                  Lorem ipsum dolor
                  <br />
                  sit amet, consetetur<span className="text-primary">.</span>
                </h2>
                <ul className="list-disc list-inside marker:text-primary space-y-4 pl-5">
                  <li>Sed ut perspiciatis unde omnis iste natus.</li>
                  <li>Lorem ipsum dolor sit amet, consetetur sadipscing.</li>
                  <li>But I must explain to you how all this mistaken.</li>
                  <li>Zwei flinke Boxer jagen.</li>
                  <li>Quiere la boca exhausta vid, kiwi.</li>
                </ul>
              </div>
              <Button
                label="our story"
                type="large"
                className="-rotate-90 block whitespace-nowrap absolute right-20 top-0 origin-right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
