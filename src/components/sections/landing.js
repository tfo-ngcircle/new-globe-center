import { Underline } from "../underline";

export default function LandingSection() {
  return (
    <div className="h-full">
      <div className="container h-full flex items-center">
        <div className="max-w-[727px] space-y-8">
          <div className="space-y-4">
            <h1>
              Lorem ipsum dolor sit amet consectutur
              <span className="text-primary">.</span>
            </h1>
            <Underline className="text-primary pr-4 w-full" />
          </div>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua.
          </p>
        </div>
      </div>
    </div>
  );
}
