import React, { ReactElement } from "react";
import { Link } from "gatsby";
import { ButtonLink } from "./";

export type ArticleCardProps = {
  frontmatter: {
    title: string;
    description: string;
    date: string;
  };
  fields: {
    slug: string;
  };
};

const ArticleCard = (props: ArticleCardProps): ReactElement => {
  const { title, description, date } = props.frontmatter;
  const { slug } = props.fields;
  return (
    <div className="max-w-lg py-8 ">
      <h3 className="sm:text-2xl text-xl">{title}</h3>
      <div className="text-gray-500 text-it">{description}</div>
      <div className="border hover:text-teal-700 hover:border-teal-700 max-w-max mt-2 p-2 rounded">
        <Link to={slug}>Read article </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
