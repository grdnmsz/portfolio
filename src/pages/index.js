import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-200 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Hi, I'm Gordon ! </span>
                <span className="block text-orange-300 xl:inline">
                  colortest
                </span>
              </h1>
              <p className="mt-3 text-base text-gray-200 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                I’m a Software Engineer looking for new opportunities in Full
                Stack development. Currently unemployed, I’m available and
                motivated to take on creative and challenging missions. aliqua.
              </p>
              <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div className="rounded-md shadow">
                  <a
                    href="/"
                    className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-gray-800 bg-orange-400 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get started
                  </a>
                </div>
                <div className="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="/about"
                    className="w-full flex items-center justify-center px-8 py-3 text-base font-medium rounded-md text-gray-800 bg-orange-400 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    About me
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
