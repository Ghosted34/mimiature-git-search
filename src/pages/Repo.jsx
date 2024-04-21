import { useParams } from "react-router-dom";
import { AppContext } from "../context/searchContext.js";
import { useContext, useEffect, useState } from "react";
import { getRepo } from "../utils/index.js";

const Repo = () => {
  const { user } = useContext(AppContext);
  const { name } = useParams();
  const [repo, setRepo] = useState();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const repo = async () => {
      try {
        const res = await getRepo(user.login, name);

        setRepo(res.data);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    };

    repo();
  }, [user, name]);

  if (isLoading) {
    return <p>isLoading</p>;
  }

  return (
    <div className="flex flex-col items-center justify-evenly ">
      <div> repo name is: {name}</div>
      <div> repo full name is: {repo.full_name}</div>
      <div> repo desc is: {repo.description}</div>
    </div>
  );
};

export default Repo;
