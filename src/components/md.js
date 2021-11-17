import formatHeadline from "@/lib/utils/text";
import ReactMarkdown from "react-markdown";
import MyLink from "./link";

export const Md = ({ children, ...props }) => {
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
      }}
    >
      {children}
    </ReactMarkdown>
  );
};
