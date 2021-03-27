import React, { ReactElement } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import vsDark from "prism-react-renderer/themes/shadesOfPurple";

const CodeBlock = ({ children, className }): ReactElement => {
  const language = className ? className.replace(/language-/, "") : "";
  defaultProps.theme = vsDark;
  return (
    <Highlight
      {...defaultProps}
      code={children}
      language={language}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre
          className={className + " overflow-x-scroll my-10 rounded-md max-w-3xl mx-6 text-xs xl:text-sm"}
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
