import MyLink from "./link";

export const SocialIcon = ({
  href,
  children,
  className,
}: React.HTMLProps<HTMLAnchorElement>) => {
  return (
    <MyLink href={href}>
      <div
        className={`p-2 rounded-full bg-opacity-10 bg-white hover:bg-opacity-20 transition-all flex space-x-2 items-center ${className}`}
      >
        {children}
      </div>
    </MyLink>
  );
};
