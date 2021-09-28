import React from "react";
import Link from "next/link";

const MyLink = ({ href = "/", className, children }) => {
  return (
    <Link href={href}>
      <a className={className}>{children}</a>
    </Link>
  );
};

export default MyLink;
