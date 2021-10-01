import Link from "./link";
import { Logo } from "./logo";
import { useRouter } from "next/router";
import { Marker } from "@/icons/marker";
import { Phone } from "@/icons/phone";
import React from "react";

const destinations = [
  { label: "Haupt", link: "" },
  { label: "Raums", link: "raums" },
  { label: "Über", link: "uber" },
  { label: "Kontakt", link: "kontakt" },
];

const Header = React.forwardRef(({ className }, ref) => {
  const router = useRouter();
  return (
    <div
      ref={ref}
      className={`${className} bg-white bg-opacity-20 fixed top-0 left-0 right-0`}
    >
      <header className="container flex justify-between items-center py-7 ">
        <div>
          <Link>
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
                      router.asPath == `/${it.link}`
                        ? "text-primary"
                        : "text-gray-500 hover:text-primary"
                    }
                  >
                    {it.label}
                  </Link>
                </h6>
              </li>
            ))}
          </ul>
          <div className="flex items-center space-x-8">
            <Link href="#">
              <Phone className="rounded-full border border-gray-300 hover:border-primary hover:border-opacity-60" />
            </Link>
            <span className="h-14 w-px bg-gray-300" />
            <Link href="#">
              <Marker className="rounded-full border border-gray-300 hover:border-primary hover:border-opacity-60" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
});

Header.displayName = "Header";

export default Header;
