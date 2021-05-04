/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React, { ReactNode, ReactElement } from 'react'
import { MDXProvider } from '@mdx-js/react'

import { Header, Footer } from '../'
import * as DesignSystem from '../mdx/DesignSystem'

type LayoutProps = {
  children?: ReactNode
}

const components = {
  inlineCode: DesignSystem.inlineCode,
  blockquote: DesignSystem.blockquote,
  code: DesignSystem.code,
  p: DesignSystem.p,
  a: DesignSystem.a,
  subtitles: DesignSystem.subtitles,
}

const Layout = ({ children }: LayoutProps): ReactElement => {
  return (
    <>
      <Header />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 1080,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <MDXProvider components={components}>
          <main>{children}</main>
        </MDXProvider>
      </div>
      <Footer />
    </>
  )
}

export default Layout
