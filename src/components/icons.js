import { BiArea, BiGroup, BiChair, BiCoffee, BiCookie } from "react-icons/bi";
import { GiWaterBottle, GiNetworkBars } from "react-icons/gi";
import { RiParkingBoxLine } from "react-icons/ri";
import { HiOutlinePresentationChartBar } from "react-icons/hi";

export function getIcon(tag, className) {
  switch (tag) {
    case "phone":
      return <Phone />;
    case "marker":
      return <Marker />;
    case "accessibility":
      return <Accessibility />;
    case "charging":
      return <Charging />;
    case "catering":
      return <Catering />;
    case "presentation":
      return <Presentation />;
    case "parking":
      return <Parking />;
    case "tree":
      return <Tree />;
    case "diamond":
      return <Diamond />;
    case "chauffeur":
      return <Chauffeur />;
    case "area":
      return <BiArea className={className} />;
    case "people":
      return <BiGroup className={className} />;
    case "seating":
      return <BiChair className={className} />;
    case "coffee":
      return <BiCoffee className={className} />;
    case "water":
      return <GiWaterBottle className={className} />;
    case "speed":
      return <GiNetworkBars className={className} />;
    case "park":
      return <RiParkingBoxLine className={className} />;
    case "cookie":
      return <BiCookie className={className} />;
    case "present":
      return <HiOutlinePresentationChartBar className={className} />;
    default:
      return undefined;
  }
}

export const Marker = ({ size = 48, className, dark }) => {
  return (
    <Icon
      size={size}
      className={className}
      dark={dark}
      black={
        <path d="M24.5 12c-4.4-.2-8.1 3.3-8.3 7.7 0 6 8.3 16.3 8.3 16.3s8.3-10.3 8.3-16.3c-.2-4.4-3.9-7.9-8.3-7.7z" />
      }
      red={
        <path d="M24.5 23c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7z" />
      }
    />
  );
};

export const Phone = ({ size = 48, className, dark }) => {
  return (
    <Icon
      size={size}
      className={className}
      dark={dark}
      black={
        <path d="M26.2 32.8c2.5.9 5.1 1.3 7.8 1.2v-4.4c-3.3 0-4.4-1.1-4.4-1.1l-3.4 4.3c-5.1-1.8-9.1-5.9-11-11l4.3-3.3s-1.1-1.1-1.1-4.4H14c0 2.6.4 5.3 1.2 7.8" />
      }
      red={
        <path d="M23.8 14.8c3.9 1.3 7 4.4 8.3 8.3M22.4 19c2.6.9 4.7 2.9 5.6 5.6" />
      }
    />
  );
};

export const Accessibility = ({ size = 48, className, dark }) => {
  return (
    <Icon
      size={size}
      className={className}
      dark={dark}
      black={
        <>
          <path d="M19.8 23.5c-3.1 0-5.7 2.5-5.7 5.7s2.5 5.7 5.7 5.7c2.5 0 4.6-1.6 5.4-3.9" />
          <path d="M29.3 24.5h-4.7v-2.9a2 2 0 0 0-2.4-1.5c-.7.2-1.3.8-1.5 1.5v4.8c0 1 .8 1.9 1.9 1.9h5.8l2.9 5.7 1.9-1" />
        </>
      }
      red={<circle cx="22.6" cy="14.9" r="1.9" />}
    />
  );
};

export const Charging = ({ size = 48, className, dark }) => {
  return (
    <Icon
      size={size}
      className={className}
      dark={dark}
      black={
        <>
          <path strokeLinejoin="round" d="M13.4 35.6V12h14.8v23.6" />
          <path
            strokeLinejoin="round"
            d="M28.2 23.8h4.4v8.8a2.2 2.2 0 0 0 4.4 0V12"
          />
          <path d="M36 22v-8" />
          <path d="M38 22v-8" />
          <path d="M11 36h20" />
        </>
      }
      red={<path d="m21.4 17.9-3.5 5.9h5.9l-3.6 5.9" />}
    />
  );
};

export const Catering = ({ size = 48, className, dark }) => {
  return (
    <Icon
      size={size}
      className={className}
      dark={dark}
      black={
        <>
          <path d="M35 33.9h-8.8" />
          <path d="M30.6 33.9v-8.8" />
          <path d="M35 14.1v6.6s0 4.4-4.4 4.4-4.4-4.4-4.4-4.4v-6.6Z" />
        </>
      }
      red={
        <>
          <path d="M17.4 35v-9.9" />
          <path d="M21.8 13v7.7s0 4.4-4.4 4.4-4.4-4.4-4.4-4.4V13" />
          <path d="M17.4 21.8V13" />
        </>
      }
    />
  );
};

export const Presentation = ({ size = 48, className, dark }) => {
  return (
    <Icon
      size={size}
      className={className}
      dark={dark}
      black={
        <>
          <path strokeLinejoin="round" d="M14 14h20v15H14z" />
          <path d="M24 10v4" />
          <path d="M24 29v7" />
          <path d="M19 36h10" />
        </>
      }
      red={
        <>
          <path d="M24 26v-8" />
          <path d="M29 26v-4" />
          <path d="M19 26v-6" />
        </>
      }
    />
  );
};

export const Parking = ({ size = 48, className, dark }) => {
  return (
    <Icon
      size={size}
      className={className}
      dark={dark}
      black={<path d="M14 14h20v20H14z" />}
      red={
        <>
          <path d="M21.5 31V18" />
          <path d="M22 19h3s3 0 3 3-3 3-3 3h-3" />
        </>
      }
    />
  );
};

export const Tree = ({ size = 48, className, dark }) => {
  return (
    <Icon
      size={size}
      className={className}
      dark={dark}
      black={<path d="m24 28-3-3m3 0 3-3m-3 0-3-3m-4 17h14m-7-19v19" />}
      red={
        <path d="M24 30h-7c-4.6-.1-4.6-6.8 0-7-1.9-2.5-.1-6.5 3-6.8a4 4 0 1 1 8 0c3.1.3 4.9 4.3 3 6.8 4.6.2 4.6 6.9 0 7h-7z" />
      }
    />
  );
};

export const Diamond = ({ size = 48, className, dark }) => {
  return (
    <Icon
      size={size}
      className={className}
      dark={dark}
      red={
        <>
          <path d="M24 34 13 20l5-6h12l5 6z" />
          <path d="m27 14 3 6-6 14m-3-20-3 6 6 14M13 20h22" />
        </>
      }
    />
  );
};

export const Chauffeur = ({ size = 48, className, dark }) => {
  return (
    <Icon
      size={size}
      className={className}
      dark={dark}
      black={
        <>
          <path d="m23 18 2-2m0 2-2-2" />
          <path d="M17 24v9l3 3h8l3-3v-9" />
          <path d="m23 18 2-2m0 2-2-2" />
        </>
      }
      red={
        <>
          <path d="M19 18h-3l-3-3 11-4 11 4-3 3h-3m-13 0v3h16v-3m-13 3c1 3 5 3 5 3s4 0 5-3" />
        </>
      }
    />
  );
};

export default function Icon({ size = 48, className, dark, black, red }) {
  return (
    <svg viewBox="0 0 48 48" height={size} className={className}>
      <g className="stroke-current stroke-2">
        <g
          style={{ fill: "none" }}
          className={`${dark ? "text-white" : "text-primary"}`}
        >
          {red}
        </g>
        <g
          style={{
            fill: "none",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
          }}
          className={`${dark ? "text-white" : "text-black"}`}
        >
          {black}
        </g>
      </g>
    </svg>
  );
}
