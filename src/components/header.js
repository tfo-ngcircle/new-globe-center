import Link from "./link";
import { Logo } from "./logo";
import { useRouter } from "next/router";
import { Phone, Marker } from "@/components/icons";
import { useWindowSize } from "usehooks-ts";
import React from "react";

const destinations = [
  { label: "Home", link: "/#landing" },
  { label: "Räume", link: "/#spaces" },
  { label: "Über", link: "/#about" },
  { label: "Kontakt", link: "/#contact" },
];

function navigateFullpage(e, path) {
  e.preventDefault();
  window.window.fullpage_api.moveTo(path, 0);
}

const Header = React.forwardRef(({ className, dark, isHome }, ref) => {
  const router = useRouter();
  const screen = useWindowSize();

  return (
    <div
      ref={ref}
      className={`${className} top-0 left-0 right-0 text-gray-500 transition-colors duration-200`}
    >
      <header className="container flex justify-between items-center py-5 md:py-7">
        <Link
          onClick={(e) => (isHome ? navigateFullpage(e, "landing") : undefined)}
          className={dark ? "text-white" : "text-black"}
        >
          <Logo height={screen.width < 1024 ? 40 : 60} />
        </Link>
        <div className="hidden md:flex space-x-12 md:space-x-24 items-center">
          <ul className="flex space-x-6 md:space-x-12">
            {destinations.map((it) => (
              <li key={it.link}>
                <h6>
                  <Link
                    href={it.link}
                    className={`${
                      router.asPath == it.link
                        ? `${dark ? "text-white" : "text-primary"}`
                        : "text-current"
                    } ${dark ? "hover:text-white" : "hover:text-primary"}`}
                    onClick={(e) =>
                      isHome
                        ? navigateFullpage(e, it.link.substr(2))
                        : undefined
                    }
                  >
                    {it.label}
                  </Link>
                </h6>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-8 text-gray-300">
            <Link
              href="/#contact"
              onClick={(e) =>
                isHome ? navigateFullpage(e, "contact") : undefined
              }
            >
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
              href="/#map"
              onClick={(e) => (isHome ? navigateFullpage(e, "map") : undefined)}
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
