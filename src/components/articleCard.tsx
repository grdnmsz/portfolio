import React, { ReactElement } from "react";
import { Link } from "gatsby";

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
    <div className="">
      <Link to={slug}>
        <h1 className="sm:text-2xl text-xl">{title}</h1>
        <div className="text-it">{description}</div>
        <br />
        {date}
      </Link>
    </div>
  );
};

export default ArticleCard;
