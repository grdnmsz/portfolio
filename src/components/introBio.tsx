import React from "react";

const IntroBio = (urlResume: string) => {
  return (
    <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-26">
      <div className="sm:text-center lg:text-left">
        <h1 className="text-4xl tracking-tight font-extrabold sm:text-5xl md:text-6xl">
          <span className="block animate-fade xl:inline">
            Hi, <br />
            I'm Gordon!
          </span>
        </h1>
        <p className="mt-3 animate-fade text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 lg:mx-0">
          I’m a Software Engineer looking for new opportunities in Full Stack
          development. Currently unemployed, I’m available and motivated to take
          on creative and challenging missions.
        </p>
        <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
          <div className="rounded shadow">
            <a
              href="mailto:gordonmes@gmail.com"
              className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded  bg-headerColor hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-3 sm:mt-0 sm:ml-3">
            <div className="rounded shadow">
              <a
                href={`${urlResume}`}
                className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded  bg-headerColor hover:bg-teal-700 md:py-4 md:text-lg md:px-10"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IntroBio;
