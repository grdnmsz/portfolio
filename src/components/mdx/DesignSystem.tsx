import React, { ReactElement, ReactPropTypes } from "react";
import CodeBlock, { CodeBlockProps } from "./CodeBlock";

const inlineCode = (props: ReactPropTypes): ReactElement => (
  <code {...props} className="bg-gray-700 p-1 rounded" />
);

const p = (props: ReactPropTypes): ReactElement => (
  <p {...props} className="md:text-base" />
);

const blockquote = (props: ReactPropTypes): ReactElement => (
  <blockquote className="border-l-4 border-teal-600 pl-0 bg-bgBlockQuote rounded text-xs table italic text-gray-300 mr-6 my-10 p-4">
    <div {...props} className="pl-2" />
  </blockquote>
);

const code = (props: CodeBlockProps): ReactElement => <CodeBlock {...props} />;

const subtitles = (props: ReactPropTypes): ReactElement => (
  <>
    <div
      {...props}
      className="xl:mx-16 px-10 md:text-base text-sm mt-6 xl:mb-12 mb-6 md:text-left text-center"
    />
    <hr className="md:mx-60 mx-24 xl:mb-12 mb-6" />
  </>
);

export { inlineCode, blockquote, code, subtitles, p };
