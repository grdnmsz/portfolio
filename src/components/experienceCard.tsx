import { Link } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import React from "react";

export type ExperienceCardProps = {
  node: {
    body: any;
    frontmatter: {
      title: string;
      dates: string;
      location: string;
    };
  };
}

const ExperienceCard = ({
  node: {
    body,
    frontmatter: { title, dates, location },
  },
}: ExperienceCardProps) => {
  return (
    <div className="bg-headerColor rounded-xl">
      <div className="py-6 px-6 mb-1 text-center">
        <div className="text-2xl font-bold mb-4">{title}</div>
        <span className="text-sm">
          {dates}
          <br />
          {location}
          <br />
          <br />
        </span>
        <div className="text-sm sm:px-32 md:px-52 lg:px-0">
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>

      <button className="w-full rounded-b-xl text-lg h-16 hover:text-gray-800 hover:bg-orange-400 font-extrabold ">
        <Link className="w-full flex justify-center" to="/about">
          Learn more
        </Link>
      </button>
    </div>
  );
};

export default ExperienceCard;
