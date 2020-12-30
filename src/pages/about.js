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
      <div className="py-12 bg-white text-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
              About Me
            </p>
            <p className="mt-4 border  rounded-xl py-6 px-6 text-xl lg:mx-auto">
              I hold a MEng in Electronics, in addition to having experience in
              various domains, from fundamental sciences and applied research,
              to professional mobile development{" "}
              <span role="img" aria-label="wave">
                📱
              </span>
              .
              <br />2 years ago, I took my focus off Computer Science to be more
              involved in creative projects such as music composition and
              filmmaking. I’ve since been growing as a Full Stack Engineer with
              React and Node.js expertise{" "}
              <span role="img" aria-label="wave">
                💻
              </span>{" "}
              , eager to take on challenging missions as well as to keep on
              improving my skills.
            </p>
          </div>

          <div className="mt-10">
            <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-4 md:gap-x-8 md:gap-y-10">
              {nodes.map((node) => {
                return <ExperienceDetails key={node.company} node={node} />;
              })}
            </dl>
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

export default (props) => (
  <StaticQuery
    query={query}
    render={(data) => <About data={data} {...props} />}
  />
);
