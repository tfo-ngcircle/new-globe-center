import formatHeadline from "@/lib/utils/text";
import { Button } from "./button";
import { Underline } from "./underline";

export const Space = ({ space }) => {
  return (
    <div className="slide w-full" data-anchor={space.id}>
      <div className="grid grid-cols-7 w-full h-full items-center">
        <div className="pl-36 pr-20 space-y-10 col-span-3">
          <div className="max-w-min">
            <h5>{formatHeadline(space.subtitle)}</h5>
            <h1>{formatHeadline(space.title)}</h1>
            <Underline className="text-primary w-full h-3 mt-3" />
          </div>
          <p>{space.description}</p>
          <Button label="learn more" />
        </div>
        <div className="bg-white h-full brightness-90 col-span-4">
          <img
            src={require("../../public/images/room.jpg")}
            alt="room"
            className="object-cover h-full w-full"
          />
        </div>
      </div>
    </div>
  );
};
