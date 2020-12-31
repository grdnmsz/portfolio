import React from "react";

const ExperienceCard = ({
  node: {
    html,
    frontmatter: { title, dates, location },
  },
}) => {
  return (
    <div className="bg-headerColor rounded-xl">
      <div className="py-6 px-6 mb-10 text-center">
        <div className="text-2xl font-bold mb-4">{title}</div>
        <span className="text-sm">
          {dates}
          <br />
          {location}
          <br />
          <br />
        </span>

        <div
          className="text-sm"
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </div>

      <button className="w-full rounded-b-xl text-lg h-16 hover:text-gray-800 hover:bg-orange-400 font-extrabold ">
        <a className="w-full flex justify-center" href="/about">
          Learn more
        </a>
      </button>
    </div>
  );
};

export default ExperienceCard;
