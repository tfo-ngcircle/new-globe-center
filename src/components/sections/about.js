import formatHeadline from "@/lib/utils/text";
import { Button } from "../button";
import { Logo } from "../logo";

const about = {
  headline: "Wir vernetzen die Region. Wir schaffen Verbundenheit.",
  description: [
    "Vermietung von Schulungs- und Konferenzräumen",
    "Perfekte Anbindung zur Autobahn, oder in die schöne Autostadt Wolfsburg",
    "Hochwertige und innovative Ausstattungstechnik",
    "Wunderschöne, ruhige Lage mit schöner Außenanlage",
    "Rund-Um-Glücklich Paket mit individuellem Catering",
  ],
};

export default function AboutSection() {
  return (
    <div className="relative h-full">
      <span className="absolute bg-primary w-[29.35%] h-60 top-[125.5px]" />
      <div className="container relative h-full">
        <div className="flex h-full items-center">
          <img
            src={require("../../../public/images/about.jpg")}
            alt="about"
            className="relative w-2/5 h-full object-cover"
            style={{
              clipPath:
                "path('M0 0h281v714.5H0V0zm324 125.5V852h281V397L324 125.5z')",
            }}
          />
          <div className="space-y-10 flex flex-col pl-20 flex-grow">
            <Logo isFull />
            <div className="relative flex">
              <div className="space-y-10">
                <h2>{formatHeadline(about.headline)}</h2>
                <ul className="list-disc list-inside marker:text-primary space-y-4 pl-5">
                  {about.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
              <Button
                label="our story"
                type="large"
                className="-rotate-90 block absolute right-0 top-0 origin-right"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
