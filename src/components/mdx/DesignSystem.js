import React from "react";

const inlineCode = (props) => <code {...props} className="bg-purple-800" />;

const blockquote = (props) => (
  <blockquote className="italic bg-headerColor text-gray-400 rounded-md ml-12 my-10 p-6 shadow">
    <p className="border-l-4 border-gray-400 pl-4 " {...props} />
  </blockquote>
);

export { inlineCode, blockquote };
