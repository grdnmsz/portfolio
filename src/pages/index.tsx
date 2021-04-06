import React, { ReactElement } from "react";
import { graphql, StaticQuery, PageProps } from "gatsby";
import { Layout, SEO, ExperienceCard, IntroBio } from "../components";
import { ExperienceCardProps } from "../components/experienceCard";

interface allMdx<T> {
  nodes: T[];
}

interface allFile {
  edges: {
    node: {
      publicURL: string;
    };
  }[];
}

type IndexpPageProps = PageProps & {
  data: {
    allMdx: allMdx<ExperienceCardProps>;
    allFile: allFile;
  };
};

const IndexPage = ({
  data: { allMdx, allFile },
}: IndexpPageProps): ReactElement => {
  const { nodes } = allMdx;
  const urlResume = allFile.edges[0].node.publicURL;
  return (
    <Layout>
      <SEO title="Home" />
      <main className="mt-10 mx-auto max-w-7xl sm:mt-12 md:mt-16 lg:mt-20 xl:mt-28">
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <IntroBio urlResume={urlResume} />
            <h2 className="text-4xl sm:text-5xl text-center my-10 font-extrabold">
              Where I've worked
            </h2>

            <div className="grid lg:grid-cols-3 gap-8 m-5 max-w-5xl m-auto">
              {nodes.map((node, i) => {
                return <ExperienceCard key={i} {...node} />;
              })}
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { tag: { eq: "card" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        body
        frontmatter {
          title
          dates
          location
        }
      }
    }
    allFile(filter: { name: { eq: "resume" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`;

const staticQuery = (props: any) => (
  <StaticQuery
    query={query}
    render={(data) => <IndexPage data={data} {...props} />}
  />
);

export default staticQuery;
