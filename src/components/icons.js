export function getIcon(tag) {
  switch (tag) {
    case "phone":
      return <Phone />;
    case "marker":
      return <Marker />;
    default:
      return undefined;
  }
}

export const Marker = ({ size = 48, className, dark }) => {
  return (
    <svg viewBox="0 0 48 48" height={size} className={className}>
      <g className="stroke-current stroke-2">
        <path
          d="M24.5 12c-4.4-.2-8.1 3.3-8.3 7.7 0 6 8.3 16.3 8.3 16.3s8.3-10.3 8.3-16.3c-.2-4.4-3.9-7.9-8.3-7.7z"
          style={{ fill: "none" }}
          className={`${dark ? "text-white" : "text-black"}`}
        />
        <path
          d="M24.5 23c-1.5 0-2.7-1.2-2.7-2.7 0-1.5 1.2-2.7 2.7-2.7 1.5 0 2.7 1.2 2.7 2.7 0 1.5-1.2 2.7-2.7 2.7z"
          style={{ fill: "none" }}
          className={`${dark ? "text-white" : "text-primary"}`}
        />
      </g>
    </svg>
  );
};

export const Phone = ({ size = 48, className, dark }) => {
  return (
    <svg
      xmlSpace="preserve"
      viewBox="0 0 48 48"
      height={size}
      className={className}
    >
      <g className="stroke-current stroke-2">
        <path
          d="M26.2 32.8c2.5.9 5.1 1.3 7.8 1.2v-4.4c-3.3 0-4.4-1.1-4.4-1.1l-3.4 4.3c-5.1-1.8-9.1-5.9-11-11l4.3-3.3s-1.1-1.1-1.1-4.4H14c0 2.6.4 5.3 1.2 7.8"
          style={{
            fill: "none",
            strokeLinejoin: "round",
            strokeMiterlimit: 10,
          }}
          className={`${dark ? "text-white" : "text-black"}`}
        />
        <path
          d="M23.8 14.8c3.9 1.3 7 4.4 8.3 8.3M22.4 19c2.6.9 4.7 2.9 5.6 5.6"
          style={{ fill: "none" }}
          className={`${dark ? "text-white" : "text-primary"}`}
        />
      </g>
    </svg>
  );
};
