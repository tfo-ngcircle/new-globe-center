import ReactMarkdown from "react-markdown";

export const Md = ({ children, ...props }) => {
  return <ReactMarkdown {...props}>{children}</ReactMarkdown>;
};
