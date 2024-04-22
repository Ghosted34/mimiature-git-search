import React, { useState } from "react";
import ReactPaginate from "react-paginate";
import RepoTab from "./RepoTab";

const Paginate = ({ perPage, repos }) => {
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
    </>
  );
};

export default Paginate;
