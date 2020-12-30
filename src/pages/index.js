import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ExperienceCard from "../components/experienceCard";

const IndexPage = ({ data }) => {
  const { nodes } = data.allMarkdownRemark;

  return (
    <Layout>
      <SEO title="Home" />
      <div className="relative bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-200 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">
                    Hi{" "}
                    <span role="img" aria-label="wave">
                      👋
                    </span>
                    , I'm{" "}
                  </span>
                  <span className="block text-orange-300 xl:inline">
                    Gordon!
                  </span>
                </h1>
                <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  I’m a Software Engineer looking for new opportunities in Full
                  Stack development. Currently unemployed, I’m available and
                  motivated to take on creative and challenging missions.
                  aliqua.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="/"
                      className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-gray-200 bg-headerColor hover:text-gray-800 hover:bg-orange-400 md:py-4 md:text-lg md:px-10"
                    >
                      Get in touch
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="/about"
                      className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-lg text-gray-200 bg-headerColor hover:text-gray-800 hover:bg-orange-400 md:py-4 md:text-lg md:px-10"
                    >
                      About me
                    </a>
                  </div>
                </div>
              </div>
            </main>
          </div>
          <main className="px-1 text-gray-200 box-content w-150">
            <h3 className="text-4xl sm:text-5xl text-center my-10">
              Where did I work ?
            </h3>

            <div className="grid md:grid-cols-3 gap-8 m-5 max-w-5xl m-auto">
              {nodes.map((node) => {
                return <ExperienceCard node={node} />;
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
    allMarkdownRemark(
      filter: { frontmatter: { tag: { eq: "card" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        html
        frontmatter {
          title
          dates
          location
        }
      }
    }
  }
`;
export default (props) => (
  <StaticQuery
    query={query}
    render={(data) => <IndexPage data={data} {...props} />}
  />
);
