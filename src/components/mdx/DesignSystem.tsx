import React, { ReactElement } from "react";
import CodeBlock from "./CodeBlock";

const inlineCode = (props): ReactElement => (
  <code {...props} className="bg-gray-700 p-1 rounded-md" />
);

const blockquote = (props): ReactElement => (
  <blockquote className="italic bg-headerColor text-gray-400 rounded-md ml-12 my-10 p-6 shadow">
    <p className="border-l-4 border-gray-400 pl-4 " {...props} />
  </blockquote>
);

const code = (props): ReactElement => <CodeBlock {...props} />;

export { inlineCode, blockquote, code };
