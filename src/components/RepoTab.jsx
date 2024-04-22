import React from "react";
import { Link } from "react-router-dom";

const RepoTab = ({ repo }) => {
  return (
    <section className="flex items-center justify-between w-full flex-row border-double border-green-950 p-2 gap-16">
      <Link to={`/repoes/${repo.name}`}>
        <h1>{repo.name} </h1>
      </Link>
      <p>{repo.id}</p>
    </section>
  );
};

export default RepoTab;
