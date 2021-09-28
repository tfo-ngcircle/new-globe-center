export const Phone = ({ size = 48, className }) => {
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
          className="text-black"
        />
        <path
          d="M23.8 14.8c3.9 1.3 7 4.4 8.3 8.3M22.4 19c2.6.9 4.7 2.9 5.6 5.6"
          style={{ fill: "none" }}
          className="text-primary"
        />
      </g>
    </svg>
  );
};
