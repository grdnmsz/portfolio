import React, { ReactElement } from "react";
import CodeBlock from "./CodeBlock";

const h2 = (props): ReactElement => (
  <h2 className="mt-12" {...props} />
);

const inlineCode = (props): ReactElement => (
  <code {...props} className="bg-gray-700 p-1 rounded-md" />
);

const p = (props): ReactElement => (
  <p {...props} className="xl:text-sm text-xs mx-6" /> //xl:text-base todo
);

const blockquote = (props): ReactElement => (
  <blockquote
    {...props}
    className="border-l-4 border-teal-600 pl-0 bg-bgBlockQuote italic text-gray-300 xl:ml-12 ml-6 mr-6 my-10 p-4 text-xs xl:text-sm"
  ></blockquote>
);

const code = (props): ReactElement => <CodeBlock {...props} />;

const subtitles = (props): ReactElement => (
  <>
    <div
      {...props}
      className="xl:mx-16 px-20 xl:text-base text-xs mt-6 xl:mb-12 mb-6 md:text-left text-center"
    />
    <hr className="md:mx-60 mx-24 xl:mb-12 mb-6" />
  </>
);

export { inlineCode, blockquote, code, subtitles, p, h2};
