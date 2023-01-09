import * as React from 'react'
import { graphql } from 'gatsby'
import { Layout, SEO, TableOfContents } from '../components'

const BlogPostTemplate = ({ data, location, children}) => {
  const post = data.mdx
  const { items } = post.tableOfContents
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article
        className="blog-post max-w-3xl"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1
            itemProp="headline"
            className="text-center md:mx-12 mt-12 text-3xl md:text-4xl"
          >
            {post.frontmatter.title}
          </h1>
        </header>
        <TableOfContents items={items} />
        {children}
      </article>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query ($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      tableOfContents
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
