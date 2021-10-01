import { Button } from "../button";
import { Logo } from "../logo";

export default function AboutSection() {
  return (
    <div className="relative h-full">
      <span className="absolute bg-primary w-[29.35%] h-60 top-[125.5px]" />
      <div className="container relative h-full">
        <div className="flex h-full items-center">
          <img
            src={require("../../../public/about.jpg")}
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
                <h2>
                  Wir vernetzen die Region
                  <span className="text-primary">.</span>
                  <br />
                  Wir schaffen Verbundenheit
                  <span className="text-primary">.</span>
                </h2>
                <ul className="list-disc list-inside marker:text-primary space-y-4 pl-5">
                  <li>Vermietung von Schulungs- und Konferenzräumen</li>
                  <li>
                    Perfekte Anbindung zur Autobahn, oder in die schöne
                    Autostadt Wolfsburg
                  </li>
                  <li>Hochwertige und innovative Ausstattungstechnik</li>
                  <li>Wunderschöne, ruhige Lage mit schöner Außenanlage</li>
                  <li>Rund-Um-Glücklich Paket mit individuellem Catering</li>
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
