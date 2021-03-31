import React, { ReactElement } from "react";
import Highlight, { defaultProps, Language } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/shadesOfPurple";

export type CodeBlockProps = {
  children : any,
  className: string
};

const CodeBlock = ({ children, className }: CodeBlockProps): ReactElement => {
  const language = (className ? className.replace(/language-/, "") : "") as Language;
  defaultProps.theme = vsDark;
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className + " overflow-x-scroll my-10 rounded-md max-w-3xl mr-6 text-xs xl:text-sm"}
          style={{ ...style, padding: "20px" }}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};

export default CodeBlock;
