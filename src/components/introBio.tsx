import React from "react";
import ButtonLink from "./buttonLink";

type Props = {
  urlResume: string;
};

const IntroBio = ({ urlResume }: Props) => (
  <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-26">
    <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
      <span className="block animate-fade xl:inline">
        Hi, <br />
        I'm Gordon!
      </span>
    </h1>
    <p className="mt-3 animate-fade text-base sm:mt-5 sm:text-lg sm:max-w-xl  md:mt-5 lg:mx-0">
      I’m a Software Engineer looking for new opportunities in Full Stack
      development. Currently unemployed, I’m available and motivated to take on
      creative and challenging missions.
    </p>
    <div className="mt-5 sm:mt-8 sm:flex lg:justify-start">
      <ButtonLink text={"Get in touch"} uri={"mailto:gordonmes@gmail.com"} />

      <div className="mt-3 sm:mt-0 sm:ml-3">
        <ButtonLink text={"Download Resume"} uri={urlResume} />
      </div>
    </div>
  </div>
);

export default IntroBio;
