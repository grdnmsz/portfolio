import React, { ReactElement } from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'

/*
 * styling markdown using : gatsby-remark-classes
 */

export type ExperienceDetailsProps = {
  body: any
  frontmatter: {
    company: string
    dates: string
    location: string
    url: string
    jobTitle: string
  }
}

const ExperienceDetails = (node: ExperienceDetailsProps): ReactElement => {
  const { company, dates, location, url, jobTitle } = node.frontmatter
  return (
    <React.Fragment>
      <div className="flex">
        <div className="md:block hidden">
          <dt className="font-extrabold font-medium leading-6 text-lg">
            {company}
          </dt>
          <dd className="mt-2 text-xs hover:text-teal-100">
            <a href={url}>{url}</a></dd>
          <dd className="py-1 text-sm">{dates}</dd>
          <dd className="text-sm">{location}</dd>
        </div>
      </div>

      <div className="col-span-3 flex">
        <div className="ml-4">
          <p className="font-extrabold leading-6 md:hidden text-lg">
            {company}
          </p>
          <dt className="font-extrabold leading-6 text-lg">{jobTitle}</dt>
          <MDXRenderer>{node.body}</MDXRenderer>
        </div>
      </div>
    </React.Fragment>
  )
}

export default ExperienceDetails
