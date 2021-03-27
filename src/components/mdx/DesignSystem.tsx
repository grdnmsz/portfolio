import React, { ReactElement, ClassAttributes, HTMLAttributes } from "react";
import CodeBlock from "./CodeBlock";

const inlineCode = (props): ReactElement => (
  <code {...props} className="bg-gray-700 p-1 rounded-md" />
);

const p = (props): ReactElement => (
  <p {...props} className="xl:text-base text-sm" />
);

const blockquote = (props): ReactElement => (
  <blockquote
    {...props}
    className="border-l-4 border-teal-600 pl-4 bg-bgBlockQuote italic text-gray-300 xl:ml-12 ml-6 mr-6 my-10 p-4 text-xs xl:text-sm"
  ></blockquote>
);

const code = (props): ReactElement => <CodeBlock {...props} />;

const subtitles = (props): ReactElement => (
  <>
    <div {...props} className="xl:mx-16 px-20 text-md mb-12" />
    <hr className="border-teal-100 mx-12 mb-16" />
  </>
);

export { inlineCode, blockquote, code, subtitles, p };
