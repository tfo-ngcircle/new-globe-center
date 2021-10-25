import Link from "./link";

export const SocialIcon = ({ href, children }) => {
  return (
    <Link href={href}>
      <div className="p-2 rounded-full bg-opacity-10 bg-white hover:bg-opacity-20 transition-all flex space-x-2 items-center">
        {children}
      </div>
    </Link>
  );
};
