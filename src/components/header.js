import Link from "./link";
import { Logo } from "./logo";
import { useRouter } from "next/router";
import { Phone, Marker } from "@/components/icons";
import { useWindowSize } from "usehooks-ts";
import { Menu, Transition } from "@headlessui/react";
import { AiOutlineMenu } from "react-icons/ai";
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

const Header = React.forwardRef(
  ({ className, dark, isHome, isTransparent = false }, ref) => {
    const router = useRouter();
    const screen = useWindowSize();

    return (
      <div
        ref={ref}
        className={`transition-all duration-200 ${className} top-0 left-0 right-0 text-gray-500 ${
          dark ? "!bg-transparent" : undefined
        } ${
          isTransparent ? "bg-transparent" : "bg-white shadow-md md:shadow-none"
        }`}
      >
        <header className="container flex justify-between items-center py-5 md:py-7">
          <Link
            onClick={(e) =>
              isHome ? navigateFullpage(e, "landing") : undefined
            }
            className={dark ? "text-white" : "text-black"}
          >
            <Logo height={screen.width < 1024 ? 40 : 60} />
          </Link>
          <div className="flex space-x-2 md:space-x-24 items-center">
            <ul className="hidden md:flex space-x-6 md:space-x-12">
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
            <div className="flex items-center space-x-3 md:space-x-8 text-gray-300">
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
              <span className="h-14 md:w-px bg-current" />
              <Link
                href="/#map"
                onClick={(e) =>
                  isHome ? navigateFullpage(e, "map") : undefined
                }
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
            <Menu
              as="div"
              className="md:hidden relative inline-block text-left"
            >
              <Menu.Button>
                <AiOutlineMenu
                  className={`${isTransparent ? "text-white" : undefined} mx-4`}
                />
              </Menu.Button>
              <Transition
                enter="transition duration-100 ease-in-out"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition duration-75 ease-in"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Menu.Items
                  as="ul"
                  className="absolute right-0 top-[4.635rem] w-56 origin-top-right bg-white shadow-xl p-6 divide-y divide-gray-100 ring-1 ring-black ring-opacity-5"
                >
                  {destinations.map((it) => (
                    <Menu.Item
                      as="li"
                      key={it.link}
                      className={`${
                        router.asPath == it.link ? "bg-primary text-white" : ""
                      } p-4 rounded-sm transition-all`}
                    >
                      <h6>
                        <Link
                          href={it.link}
                          className="w-full block"
                          onClick={(e) =>
                            isHome
                              ? navigateFullpage(e, it.link.substr(2))
                              : undefined
                          }
                        >
                          {it.label}
                        </Link>
                      </h6>
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </header>
      </div>
    );
  }
);

Header.displayName = "Header";

export default Header;
