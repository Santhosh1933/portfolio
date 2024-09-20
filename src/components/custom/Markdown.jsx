import React from "react";
import ReactMarkdown from 'react-markdown'
export const Markdown = ({ markdown }) => {
  return (
    <div>
      <div className="prose max-w-full">
        <ReactMarkdown>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
};
