import formatHeadline from "../utils/text";
import ReactMarkdown from "react-markdown";
import MyLink from "./link";

export const Md = ({ ...props }) => {
  return (
    <ReactMarkdown
      {...props}
      components={{
        h1: ({ node, ...props }) => (
          <h1 {...props} className="pb-10">
            {formatHeadline(props.children[0])}
          </h1>
        ),
        h2: ({ node, ...props }) => (
          <h2 {...props}>{formatHeadline(props.children[0])}</h2>
        ),
        h3: ({ node, ...props }) => (
          <h3 {...props}>{formatHeadline(props.children[0])}</h3>
        ),
        a: ({ node, ...props }) => <MyLink {...props} />,
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
