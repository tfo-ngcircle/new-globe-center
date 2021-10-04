import Link from "./link";
import { Logo } from "./logo";
import { useRouter } from "next/router";
import { Marker } from "@/icons/marker";
import { Phone } from "@/icons/phone";
import React from "react";

const destinations = [
  { label: "Haupt", link: "" },
  { label: "Räume", link: "raums" },
  { label: "Über", link: "uber" },
  { label: "Kontakt", link: "kontakt" },
];

const Header = React.forwardRef(({ className, dark = true }, ref) => {
  const router = useRouter();
  const currentPath = router.asPath.substr(
    0,
    router.asPath.indexOf("#") < 0
      ? router.asPath.length
      : router.asPath.indexOf("#")
  );
  return (
    <div
      ref={ref}
      className={`${className} bg-opacity-20 fixed top-0 left-0 right-0 text-gray-500`}
    >
      <header className="container flex justify-between items-center py-7 ">
        <div>
          <Link
            onClick={() => window.window.fullpage_api.moveTo("landing", 0)}
            className={dark ? "text-white" : "text-black"}
          >
            <Logo />
          </Link>
        </div>
        <div className="flex space-x-24 items-center">
          <ul className="flex space-x-12">
            {destinations.map((it) => (
              <li key={it.link}>
                <h6>
                  <Link
                    href={`/${it.link}`}
                    className={
                      currentPath == `/${it.link}`
                        ? dark
                          ? "text-white"
                          : "text-primary"
                        : `text-current ${
                            dark ? "hover:text-white" : "hover:text-primary"
                          }`
                    }
                  >
                    {it.label}
                  </Link>
                </h6>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-8 text-gray-300">
            <Link href="#">
              <Phone
                dark={dark}
                className={`rounded-full border border-current ${
                  dark
                    ? "hover:border-white"
                    : "hover:border-opacity-60 hover:border-primary"
                }`}
              />
            </Link>
            <span className="h-14 w-px bg-current" />
            <Link
              href="#"
              onClick={() => window.window.fullpage_api.moveTo("map", 0)}
            >
              <Marker
                dark={dark}
                className={`rounded-full border border-current ${
                  dark
                    ? "hover:border-white"
                    : "hover:border-opacity-60 hover:border-primary"
                }`}
              />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
});

Header.displayName = "Header";

export default Header;
