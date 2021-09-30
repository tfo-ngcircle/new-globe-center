export const Underline = ({ className }) => {
  return (
    <div className={`flex fill-current ${className}`}>
      <svg viewBox="0 0 12.168 12">
        <path d="m0 0 11.4 12h.76V0Z" />
      </svg>
      <span className="bg-primary flex-grow" />
    </div>
  );
};
