import React, { ReactElement } from "react";
import { graphql, StaticQuery, PageProps } from "gatsby";
import { Layout, SEO, ExperienceCard } from "../components";
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
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-26">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold  sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    Hi{" "}
                    <span role="img" aria-label="wave">
                      👋🏽
                    </span>
                    <br />
                    I'm{" "}
                    <span className="block text-orange-300 inline">
                      Gordon!
                    </span>
                  </span>
                </h1>
                <p className="mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
                  I’m a Software Engineer looking for new opportunities in Full
                  Stack development. Currently unemployed, I’m available and
                  motivated to take on creative and challenging missions.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded shadow">
                    <a
                      href="mailto:gordonmes@gmail.com"
                      className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded  bg-headerColor hover:text-gray-800 hover:bg-orange-400 md:py-4 md:text-lg md:px-10"
                    >
                      Get in touch
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <div className="rounded shadow">
                      <a
                        href={`${urlResume}`}
                        className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded  bg-headerColor hover:text-gray-800 hover:bg-orange-400 md:py-4 md:text-lg md:px-10"
                      >
                        Download Resume
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <main className="px-1  box-content w-150">
            <h3 className="text-4xl sm:text-5xl text-center my-10 font-extrabold">
              Where did I work ?
            </h3>

            <div className="grid lg:grid-cols-3 gap-8 m-5 max-w-5xl m-auto">
              {nodes.map((node, i) => {
                return <ExperienceCard key={i} {...node} />;
              })}
            </div>
          </main>
        </div>
      </div>
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
