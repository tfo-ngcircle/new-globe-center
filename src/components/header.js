import Link from "./link";
import { Logo } from "./logo";
import { useRouter } from "next/router";
import { Marker } from "@/icons/marker";
import { Phone } from "@/icons/phone";

const destinations = [
  { label: "Lorem", link: "" },
  { label: "Ipsum", link: "ipsum" },
  { label: "Dolor", link: "dolor" },
  { label: "Consectutur", link: "consectutur" },
];

export default function Header() {
  const router = useRouter();

  return (
    <div className="bg-white bg-opacity-20">
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
              <Phone className="rounded-full ring-1 ring-gray-300 hover:ring-primary hover:ring-opacity-50" />
            </Link>
            <span className="h-14 w-px bg-gray-300" />
            <Link href="#">
              <Marker className="rounded-full ring-1 ring-gray-300 hover:ring-primary hover:ring-opacity-50" />
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
}
