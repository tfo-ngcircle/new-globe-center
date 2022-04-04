import ReactMarkdown from "react-markdown";
import formatHeadline from "../utils/text";
import { navigateFullpage } from "../utils/utils";
import MyLink from "./link";

export const Md = ({ isHome = false, ...props }) => {
  return (
    <ReactMarkdown
      {...props}
      components={{
        h1: ({ node, ...props }) => (
          <h1 {...props} className="pb-10">
            {formatHeadline(props.children[0] as string)}
          </h1>
        ),
        h2: ({ node, ...props }) => (
          <h2 {...props}>{formatHeadline(props.children[0] as string)}</h2>
        ),
        h3: ({ node, ...props }) => (
          <h3 {...props}>{formatHeadline(props.children[0] as string)}</h3>
        ),
        a: ({ node, ...props }) => (
          <MyLink
            {...props}
            className="border-dotted border-b border-gray-900 hover:border-gray-500"
            onClick={(e) => {
              const link = (e.target as HTMLAnchorElement).getAttribute("href");
              isHome && link?.charAt(1) == `#`
                ? navigateFullpage(e)
                : undefined;
            }}
          />
        ),
        ul: ({ node, ...props }) => (
          <ul className="list-disc pl-5 lg:pl-6 space-y-2" {...props} />
        ),
        ol: ({ node, ...props }) => (
          <ol className="list-decimal pl-5 lg:pl-6" {...props} />
        ),
        li: ({ node, ...props }) => (
          <li className="pl-1 marker:text-primary" {...props} />
        ),
      }}
    >
      {props.children}
    </ReactMarkdown>
  );
};
