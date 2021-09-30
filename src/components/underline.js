export const Underline = ({
  className,
  classNameAlt = "bg-primary",
  shadow,
}) => {
  return (
    <div className={`flex fill-current ${className}`}>
      <svg viewBox="0 0 12.168 12">
        <filter id="dropshadow" x="-2" y="-2" width="10" height="10">
          <feOffset result="offOut" in="SourceGraphic" dx="1" dy="0" />
          <feGaussianBlur stdDeviation="1" />
        </filter>
        {shadow ? (
          <path d="m0 0 11.4 12h.76V0Z" filter="url(#dropshadow)" />
        ) : undefined}
        <path d="m0 0 11.4 12h.76V0Z" />
      </svg>
      <span className={`${classNameAlt} flex-grow`} />
    </div>
  );
};
