import Link from "./link";

export const SocialIcon = ({ href, children, className }) => {
  return (
    <Link href={href}>
      <div
        className={`p-2 rounded-full bg-opacity-10 bg-white hover:bg-opacity-20 transition-all flex space-x-2 items-center ${className}`}
      >
        {children}
      </div>
    </Link>
  );
};
