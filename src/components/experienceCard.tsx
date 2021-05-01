import { Link } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React, { ReactElement } from 'react'

export type ExperienceCardProps = {
  body: any
  frontmatter: {
    title: string
    dates: string
    location: string
  }
}

const ExperienceCard = (node: ExperienceCardProps): ReactElement => {
  const { title, dates, location } = node.frontmatter
  return (
    <div className="bg-headerColor rounded">
      <div className="mb-1 px-6 py-6 text-center">
        <div className="mb-4 font-bold hover:text-teal-600 text-2xl">
          <Link className="flex justify-center w-full" to="/about">
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
        <div className="md:px-52 lg:px-0 sm:px-32 text-sm">
          <MDXRenderer>{node.body}</MDXRenderer>
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard
