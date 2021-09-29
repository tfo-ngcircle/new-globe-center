export const Underline = ({ className, height = 12, width = "100%" }) => {
  return (
    <div className={className}>
      <svg height={height} className="fill-current w-full">
        <path d="m0 0 11.4 12h.76V0Z" />
        <rect x={11.4} height={height} width={width} />
      </svg>
    </div>
  );
};
