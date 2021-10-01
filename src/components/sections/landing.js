import { Button } from "../button";
import { Underline } from "../underline";
import Image from "next/image";
import room from "../../../public/room.jpg";

export default function LandingSection() {
  return (
    <div className="h-full relative">
      <div className="w-full h-full absolute z-0 brightness-90">
        <Image
          src={room}
          alt=""
          layout="fill"
          objectFit="cover"
          className="!my-5"
        />
      </div>
      <div className="absolute w-full h-full mix-blend-hard-light opacity-50">
        <Underline className="absolute h-80 w-[500px] right-0 top-0 text-primary space-x-[-1px] drop-shadow-primary" />
        <Underline
          className="absolute h-full w-[1300px] left-0 bottom-0 text-secondary space-x-[-1px] drop-shadow-secondary rotate-180"
          classNameAlt="bg-secondary"
        />
      </div>
      <div className="container h-full flex items-center pt-24">
        <div className="max-w-[727px] space-y-8 z-10 text-white">
          <div className="space-y-4">
            <h1>
              Lorem ipsum dolor sit amet consectutur
              <span className="text-primary">.</span>
            </h1>
            <Underline className="text-primary pr-4 w-full h-3" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
          <Button label="book now" type="large" />
        </div>
      </div>
    </div>
  );
}
