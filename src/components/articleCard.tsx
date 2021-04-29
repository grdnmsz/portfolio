import React, { ReactElement } from "react";
import { Link } from "gatsby";

export type ArticleCardProps = {
  frontmatter: {
    title: string;
    description: string;
    category: string;
  };
  fields: {
    slug: string;
  };
};

const ArticleCard = (props: ArticleCardProps): ReactElement => {
  const { title, description, category } = props.frontmatter;
  const { slug } = props.fields;
  return (
    <div className="max-w-lg my-20 ">
      <div className="bg-orange-700 max-w-max mb-2 px-4 py-1 rounded-2xl text-xs">
        {category}
      </div>
      <h3 className="sm:text-2xl text-xl">{title}</h3>
      <div className="text-gray-500 italic">{description}</div>
      <div className="border hover:text-teal-700 hover:border-teal-700 max-w-max mt-2 p-2 rounded">
        <Link to={slug}>Read article </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
