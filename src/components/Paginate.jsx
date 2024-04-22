import React, { useState, useContext } from "react";
import ReactPaginate from "react-paginate";
import { AppContext } from "../context/searchContext.js";
import RepoTab from "./RepoTab";

const Paginate = ({ perPage, repos }) => {
  const { setPerPage } = useContext(AppContext);

  const [page, setPage] = useState();

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + perPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentRepos = repos.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(repos.length / perPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * perPage) % repos.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const onChange = (event) => {
    event.preventDefault();
    setPage(event.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setPerPage(page);
  };

  const Items = ({ repos }) => {
    return (
      <section className="p-8">
        {repos.map((repo) => (
          <RepoTab key={repo.id} repo={repo} />
        ))}
      </section>
    );
  };

  return (
    <>
      <Items repos={currentRepos} />
      <ReactPaginate
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
        className="flex flex-row items-center justify-evenly w-80"
      />
      {/* Remove if you don't wan't */}
      <form>
        <input
          type="text"
          name="perPage"
          id="per_page"
          onChange={onChange}
          className="block m-6 p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />

        <button onClick={onSubmit}>Change page number</button>
      </form>
    </>
  );
};

export default Paginate;
