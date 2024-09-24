import React from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

export const Markdown = ({ markdown }) => {
  return (
    <div>
      <div className="prose max-w-full">
        <ReactMarkdown rehypePlugins={[rehypeRaw]}>
          {markdown}
        </ReactMarkdown>
      </div>
    </div>
  );
};
