import React, { ReactElement } from "react";
import { graphql, StaticQuery, PageProps } from "gatsby";
import { Layout, SEO, ExperienceDetails } from "../components";
import { ExperienceDetailsProps } from "../components/experienceDetails";

interface allMdx<T> {
  nodes: T[];
}

type AboutPageProps = PageProps & {
  data: {
    allMdx: allMdx<ExperienceDetailsProps>;
  };
};

const About = ({ data }: AboutPageProps): ReactElement => {
  const { nodes } = data.allMdx;
  return (
    <Layout>
      <SEO title="About me" />
      <div className="py-12 max-w-7xl mx-auto">
        <div className="text-left">
          <h1 className="mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight sm:text-4xl">
            About Me
          </h1>
          <p className="mt-4 bg-headerColor rounded py-6 px-6 text-sm md:text-base lg:mx-auto ">
            I hold a <span className="block inline">MEng</span> in Electronics,
            in addition to having experience in various domains, from
            fundamental sciences and applied research, to professional mobile
            development.
            <br />
            <br />2 years ago, I took my focus off Computer Science to be more
            involved in creative projects such as music composition and
            filmmaking. I’ve since been growing as a Full Stack Engineer with
            React and Node.js expertise, eager to take on challenging missions
            as well as to keep on improving my skills.
          </p>
        </div>

        <div className="mt-10">
          <div className="space-y-16 md:space-y-0 md:grid md:grid-cols-4 md:gap-y-16">
            {nodes.map((node, i) => {
              return <ExperienceDetails key={i} {...node} />;
            })}
          </div>
        </div>
      </div>
    </Layout>
  );
};

const query = graphql`
  query {
    allMdx(
      filter: { frontmatter: { tag: { eq: "details" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        body
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

const staticQuery = (props: any) => (
  <StaticQuery
    query={query}
    render={(data) => <About data={data} {...props} />}
  />
);

export default staticQuery;
