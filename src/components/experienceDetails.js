import React from "react";
import { MDXRenderer } from "gatsby-plugin-mdx"

/*
  styling markdown using : gatsby-remark-classes
*/

const ExperienceDetails = ({
  node: {
    body,
    frontmatter: { company, dates, location, url, jobTitle },
  },
}) => {
  return (
    <React.Fragment>
      <div className="flex">
        <div className="ml-4 hidden md:block">
          <dt className="text-lg leading-6 font-extrabold font-medium text-orange-300">
            {company}
          </dt>
          <dd className="mt-2 text-orange-100 text-xs">{url}</dd>
          <dd className="text-sm py-1">{dates}</dd>
          <dd className="text-sm">{location}</dd>
        </div>
      </div>

      <div className="flex col-span-3 ">
        <div className="ml-4 ">
          <p className="text-lg md:hidden leading-6 font-extrabold text-orange-300">
            {company}
          </p>
          <dt className="text-lg font-extrabold leading-6 text-orange-200">
            {jobTitle}
          </dt>
          <MDXRenderer>{body}</MDXRenderer>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ExperienceDetails;
