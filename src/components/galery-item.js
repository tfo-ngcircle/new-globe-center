export const GaleryItem = ({ className, ...props }) => {
  return (
    <div
      className="transition filter ease-out duration-300 brightness-90 hover:drop-shadow-primary hover:scale-110 hover:brightness-100 hover:z-40 cursor-pointer"
      {...props}
    >
      <div
        className={`${className} bg-primary h-[14rem]`}
        style={{
          clipPath:
            "polygon(0.00% 0.00%,80.00% 0.00%,100% 100%,20.00% 100.00%)",
        }}
      ></div>
    </div>
  );
};
