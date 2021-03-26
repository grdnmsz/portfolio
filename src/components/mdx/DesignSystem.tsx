import React, { ReactElement } from "react";
import CodeBlock from "./CodeBlock";

const inlineCode = (props): ReactElement => (
  <code {...props} className="bg-gray-700 p-1 rounded-md" />
);

const blockquote = (props): ReactElement => (
  <blockquote className="italic bg-headerColor text-gray-400 rounded-md xl:ml-12 ml-6 mr-6 my-10 p-4 text-xs xl:text-sm shadow">
    <p className="border-l-4 border-gray-400 pl-4 " {...props} />
  </blockquote>
);

const code = (props): ReactElement => <CodeBlock {...props} />;

export { inlineCode, blockquote, code };
