import React, { ReactElement } from "react";
import { graphql, StaticQuery, PageProps } from "gatsby";
import { SEO, Layout, ArticleCard } from "../components";
import { ArticleCardProps } from "../components/articleCard";

interface allMdx<T> {
  nodes: T[];
}

export type ArticlesPageProps = PageProps & {
  data: {
    allMdx: allMdx<ArticleCardProps>;
  };
};

const ArticlesPage = ({ data }: ArticlesPageProps): ReactElement => {
  const { nodes } = data.allMdx;
  return (
    <Layout>
      <SEO title="articles" />
      <main>
        <h1>Articles</h1>
        <div className="text-lg mb-12">
          Here you will find notes and articles about my different experiments,
          hacks and things that I learn on a day-to-day basis.
        </div>
        {nodes.map((node, i) => {
          return <ArticleCard key={i} {...node} />;
        })}
      </main>
    </Layout>
  );
};

const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { tag: { eq: "article" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          description
          date
        }
        fields {
          slug
        }
      }
    }
  }
`;

const staticQuery = (props: any) => (
  <StaticQuery
    query={query}
    render={(data) => <ArticlesPage data={data} {...props} />}
  />
);

export default staticQuery;
