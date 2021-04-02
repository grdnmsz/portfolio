import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";

export type ExperienceCardProps = {
  body: any;
  frontmatter: {
    title: string;
    dates: string;
    location: string;
  };
};

const ExperienceCard = (node: ExperienceCardProps) => {
  const { title, dates, location } = node.frontmatter;
  return (
    <div className="bg-headerColor rounded">
      <div className="py-6 px-6 mb-1 text-center">
        <div className="text-2xl font-bold mb-4 hover:text-teal-300">
          <Link className="w-full flex justify-center" to="/about">
            {title}
          </Link>
        </div>
        <span className="text-sm">
          {dates}
          <br />
          {location}
          <br />
          <br />
        </span>
        <div className="text-sm sm:px-32 md:px-52 lg:px-0">
          <MDXRenderer>{node.body}</MDXRenderer>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;
