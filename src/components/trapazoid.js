export const Trapazoid = ({ className, children, ...props }) => {
  return (
    <div
      className={`${className} transition filter ease-out duration-300`}
      {...props}
      style={{
        clipPath: "polygon(0.00% 0.00%,80.00% 0.00%,100% 100%,20.00% 100.00%)",
      }}
    >
      {children}
    </div>
  );
};
