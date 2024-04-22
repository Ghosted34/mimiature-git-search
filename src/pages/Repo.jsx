import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/searchContext.js";
import { useContext, useEffect, useState } from "react";
import { getRepo } from "../utils/index.js";

const Repo = () => {
  const { user, isLoadingUser } = useContext(AppContext);
  const { name } = useParams();
  const [repo, setRepo] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const repo = async () => {
      try {
        const res = await getRepo(user.login, name);

        setRepo(res.data);
      } catch (error) {
        navigate("/error");
      } finally {
        setIsLoading(false);
      }
    };

    repo();
  }, [user, name]);
  if (isLoadingUser || !user) {
    return <p>isLoading</p>;
  }

  if (isLoading || !repo) {
    return <p>isLoading</p>;
  }

  return (
    <div className="flex flex-col items-center justify-evenly ">
      <div> repo name is: {name}</div>
      <div> repo full name is: {repo.full_name}</div>
      <div>
        repo desc is:
        {repo.description !== "" && repo.description
          ? ` ${repo.description}`
          : " not given"}
      </div>
    </div>
  );
};

export default Repo;
