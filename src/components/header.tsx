import { useState } from "react";
import { Link } from "gatsby";
import React from "react";

const Header = () => {
  const [isOn, setIsOn] = useState(false);
  return (
    <nav className="bg-headerColor">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            <button
              className="inline-flex items-center justify-center p-2 rounded text-gray-300 hover:text-white hover:bg-teal-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-expanded="false"
              onClick={() => setIsOn(!isOn)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOn ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOn ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex-shrink-0 flex items-center">
              <Link to={`/`}>
                <img
                  className="block h-10 w-auto"
                  src={"https://i.imgur.com/CBlWry2.png"}
                  alt="PP"
                />
              </Link>
            </div>
            <div className="hidden sm:block sm:ml-6">
              <div className="flex space-x-4">
                <Link
                  to={`/`}
                  className="hover:bg-teal-800  px-3 py-2 block rounded-sm text-sm font-medium"
                  activeClassName="bg-teal-900 hover:bg-teal-800  px-3 py-2 block text-sm font-medium"
                >
                  Home
                </Link>
                <Link
                  to={`/about`}
                  className=" hover:bg-teal-800 hover:text-white px-3 py-2 rounded-sm text-sm font-medium"
                  activeClassName="bg-teal-900 hover:bg-teal-800  px-3 py-2 block text-sm font-medium"
                >
                  About
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${isOn ? "block" : "hidden"} sm:hidden`}
        aria-checked={isOn}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          <Link
            to={"/"}
            className="hover:bg-teal-800  px-3 py-2 block rounded text-sm font-medium"
            activeClassName="bg-teal-900 hover:bg-teal-800  px-3 py-2 block rounded text-sm font-medium"
          >
            Home
          </Link>
          <Link
            to={"/about"}
            className=" hover:bg-teal-800 hover:text-white px-3 py-2 block rounded text-sm font-medium"
            activeClassName="bg-teal-900 hover:bg-teal-800  px-3 py-2 block rounded text-sm font-medium"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
