import { useContext } from "react";
import { AppContext } from "../context/searchContext.js";
import { Paginate, Search } from "../components/";
const RepoList = () => {
  const { searchRepos, isLoadingRepos, perPage } = useContext(AppContext);

  if (isLoadingRepos) {
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center m-4 w-[1024px]">
      <Search />
      <Paginate perPage={perPage} repos={searchRepos} />
    </div>
  );
};

export default RepoList;
