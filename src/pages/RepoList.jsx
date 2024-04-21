import { useContext, useState } from "react";
import { AppContext } from "../context/searchContext.js";
import { Paginate } from "../components/";
const RepoList = () => {
  const { repos, isLoadingRepos } = useContext(AppContext);

  const [perPage, setPerPage] = useState(5);
  if (isLoadingRepos) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center m-4 w-[1024px]">
      <Paginate perPage={perPage} repos={repos} />
    </div>
  );
};

export default RepoList;
