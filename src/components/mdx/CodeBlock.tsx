import React, { ReactElement } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/shadesOfPurple";
import CopyButton from "./copyButton";

export type CodeBlockProps = {
  children: any;
  className: string;
};

const CodeBlock = ({ children, className }: CodeBlockProps): ReactElement => {
  const language = (className
    ? className.replace(/language-/, "")
    : "") as Language;
  defaultProps.theme = vsDark;
  return (
    <Highlight {...defaultProps} code={children} language={language}>
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className + " max-w-3xl my-10 rounded text-sm"}
          style={{ ...style, padding: "20px", position: "relative" }}
        >
          <div className="overflow-x-scroll ">
            {language ? (
              <span className="absolute bg-orange-800 rounded-b pb-1 px-3 top-0">
                {language}
              </span>
            ) : null}
            <br />
            <CopyButton toCopy={children} />
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line, key: i })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token, key })} />
                ))}
              </div>
            ))}
          </div>
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
