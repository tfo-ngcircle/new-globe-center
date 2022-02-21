import React from "react";
import Link from "next/link";

export default function MyLink({
  href = "/",
  className,
  children,
  ...props
}: React.HTMLProps<HTMLAnchorElement>) {
  return (
    <Link href={href}>
      <a className={className} {...props}>
        {children}
      </a>
    </Link>
  );
}
