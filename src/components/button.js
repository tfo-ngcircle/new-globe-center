export const Button = ({ label, type = "default", ...props }) => {
  return (
    <button
      className={`${
        type === "outlined"
          ? "px-10 py-2 !text-primary !bg-white border-2 text-xl hover:!bg-primary hover:!text-white hover:!shadow-none hover:border-primary active:border-primary-light" // outlined
          : type === "large"
          ? "px-28" // large
          : "px-14" // default
      } bg-primary transition-all ease-in text-white hover:shadow-primary active:shadow-primary-sm`}
      {...props}
    >
      {label}
    </button>
  );
};
