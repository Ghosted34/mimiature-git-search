import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
        <div className="flex flex-wrap justify-evenly items-center mx-auto max-w-screen-xl">
          <Link to={"/"} className="flex items-center">
            <h1 className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
              GitSearch
            </h1>
          </Link>
          <div className="flex items-center lg:order-2">
            <Link
              to={"/repoes"}
              className="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800"
            >
              Home
            </Link>
            <Link
              to={"/repoes"}
              className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
            >
              Repo List
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
