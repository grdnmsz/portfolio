import React, { ReactElement, ReactPropTypes } from "react";
import CodeBlock, { CodeBlockProps } from "./CodeBlock";

const inlineCode = (props: ReactPropTypes): ReactElement => (
  <code {...props} className="bg-gray-700 p-1 rounded" />
);

const p = (props: ReactPropTypes): ReactElement => (
  <p {...props} className="md:text-base" />
);

const blockquote = (props: ReactPropTypes): ReactElement => (
  <blockquote className="border-l-4 border-teal-600 bg-bgBlockQuote italic mr-6 my-10 p-4 pl-0 rounded table text-gray-300 text-xs">
    <div {...props} className="pl-2" />
  </blockquote>
);

const code = (props: CodeBlockProps): ReactElement => <CodeBlock {...props} />;

const subtitles = (props: ReactPropTypes): ReactElement => (
  <>
    <div
      {...props}
      className="mb-6 mt-6 md:text-base md:text-left px-10 text-center text-sm xl:mb-12 xl:mx-16"
    />
    <hr className="mb-6 md:mx-60 mx-24 xl:mb-12" />
  </>
);

export { inlineCode, blockquote, code, subtitles, p };
