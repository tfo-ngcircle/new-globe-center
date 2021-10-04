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
