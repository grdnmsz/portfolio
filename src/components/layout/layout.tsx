/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { ReactNode } from "react";
import PropTypes from "prop-types";
import Header from "./header";
import Footer from "./footer";

import { MDXProvider } from "@mdx-js/react";
import * as DesignSystem from "../mdx/DesignSystem";

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
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
