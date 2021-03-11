import React from "react";
import { graphql, StaticQuery } from "gatsby";

import Layout from "../components/layout";
import SEO from "../components/seo";

import ExperienceDetails from "../components/experienceDetails";

const About = ({ data }) => {
  const { nodes } = data.allMarkdownRemark;
  return (
    <Layout>
      <SEO title="About me" />
      <div className="py-12 text-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left">
            <p className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl">
              About Me
            </p>
            <p className="mt-4 bg-headerColor rounded-xl py-6 px-6 text-sm md:text-base lg:mx-auto ">
              I hold a{" "}
              <span className="block text-orange-200 inline">MEng</span> in
              Electronics, in addition to having experience in various domains,
              from fundamental sciences and applied research, to professional
              mobile development{" "}
              <span role="img" aria-label="wave">
                📱
              </span>
              .
              <br />
              <br className="" />2 years ago, I took my focus off
              Computer Science to be more involved in creative projects such as
              music composition and filmmaking. I’ve since been growing as a
              Full Stack Engineer with
              <span className="block text-orange-200 inline">
                {" "}
                React
              </span> and{" "}
              <span className="block text-orange-200 inline">Node.js</span>{" "}
              expertise{" "}
              <span role="img" aria-label="wave">
                💻
              </span>{" "}
              , eager to take on{" "}
              <span className="block text-orange-200 inline">
                challenging missions
              </span>{" "}
              as well as to keep on improving my skills.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-4 md:gap-y-16">
              {nodes.map((node, i) => {
                return <ExperienceDetails key={i} node={node} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { tag: { eq: "details" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        html
        frontmatter {
          company
          dates
          location
          url
          jobTitle
        }
      }
    }
  }
`;

const staticQuery = (props) => (
  <StaticQuery
    query={query}
    render={(data) => <About data={data} {...props} />}
  />
);

export default staticQuery