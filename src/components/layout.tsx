/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import Header from "./header";
import { MDXProvider } from "@mdx-js/react";
import * as DesignSystem from "./mdx/DesignSystem";

type LayoutProps = {
  children?: ReactNode;
};

const components = {
  inlineCode: DesignSystem.inlineCode,
  blockquote: DesignSystem.blockquote,
  code: DesignSystem.code,
  p: DesignSystem.p,
  subtitles: DesignSystem.subtitles,
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1080,
          padding: `0 1.0875rem 1.45rem`,
          paddingLeft: "1.65rem",
          paddingRight: "1.65rem",
        }}
      >
        <MDXProvider components={components}>
          <main className="px-4 sm:px-6 lg:px-8">{children}</main>
        </MDXProvider>
      </div>
      <footer className="bg-backgroundColor text-gray-300 px-6 lg:px-8 py-12">
        <div className="max-w-screen-xl mx-auto flex flex-col items-center ">
          <div className="flex items-center space-x-2">
            <a
              href="https://github.com/grdnmsz"
              className="hover:text-orange-100"
            >
              <span className="sr-only">Personal Github profile</span>
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/gordon-meszaros-530649114/"
              className="hover:text-orange-100"
            >
              <span className="sr-only">Personal linkedin profile</span>
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
          </div>
          <div className="text-sm mt-4 flex items-center space-x-1 ">
            <div>{new Date().getFullYear()} • &copy;Gordon Meszaros </div>
            <div>• Made with </div>
            <a
              href="https://www.gatsbyjs.com"
              className="hover:text-purple-400"
            >
              <span className="sr-only">External link to Gatsby homepage</span>
              <svg
                className="h-4 w-4"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 64 64"
              >
                <path d="M32 0C14.4 0 0 14.4 0 32s14.4 32 32 32 32-14.4 32-32S49.6 0 32 0zM14.17 49.83c-4.8-4.8-7.314-11.2-7.314-17.37L31.77 57.143c-6.4-.23-12.8-2.514-17.6-7.314zm23.314 6.63L7.543 26.514C10.057 15.314 20.114 6.857 32 6.857c8.457 0 15.77 4.114 20.343 10.286l-3.43 2.97C45.03 14.857 38.857 11.43 32 11.43c-8.914 0-16.457 5.714-19.43 13.714L38.857 51.43c6.63-2.286 11.657-8 13.257-14.857h-10.97V32h16c0 11.886-8.457 21.943-19.657 24.457z" />
              </svg>
            </a>
            <div>{" & "}</div>
            <a href="https://tailwindcss.com" className="hover:text-cyan-400">
              <span className="sr-only">Tailwindcss homepage</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 256 154"
              >
                <path d="M128,-1.0658141e-14 C93.8666667,-1.0658141e-14 72.5333333,17.0666667 64,51.2 C76.8,34.1333333 91.7333333,27.7333333 108.8,32 C118.537481,34.4343704 125.497363,41.4985481 133.201067,49.3184 C145.750756,62.0567704 160.275437,76.8 192,76.8 C226.133333,76.8 247.466667,59.7333333 256,25.6 C243.2,42.6666667 228.266667,49.0666667 211.2,44.8 C201.462519,42.3656296 194.502637,35.3014519 186.798933,27.4816 C174.249244,14.7432296 159.724563,-1.0658141e-14 128,-1.0658141e-14 Z M64,76.8 C29.8666667,76.8 8.53333333,93.8666667 0,128 C12.8,110.933333 27.7333333,104.533333 44.8,108.8 C54.5374815,111.23437 61.497363,118.298548 69.2010667,126.1184 C81.7507556,138.85677 96.275437,153.6 128,153.6 C162.133333,153.6 183.466667,136.533333 192,102.4 C179.2,119.466667 164.266667,125.866667 147.2,121.6 C137.462519,119.16563 130.502637,112.101452 122.798933,104.2816 C110.249244,91.5432296 95.724563,76.8 64,76.8 Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
