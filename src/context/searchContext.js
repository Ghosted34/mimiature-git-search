import { useState, createContext, useEffect } from "react";
import { getRepoes, getUser } from "../utils";

export const AppContext = createContext();
const { Provider } = AppContext;

export const AppProvider = ({ children }) => {
  const [page, setPage] = useState(1);
  const [repos, setRepos] = useState([]);
  const [perPage, setPerPage] = useState(5);
  const [user, setUser] = useState();
  const [isLoadingUser, setIsLoadingUser] = useState(false);
  const [isLoadingRepos, setIsLoadingRepos] = useState(false);

  useEffect(() => {
    if (!user || !user.hasOwnProperty("login")) {
      return;
    }
    const repos = async () => {
      try {
        setIsLoadingUser(true);
        const res = await getRepoes(user.login);
        setRepos(res);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingUser(false);
      }
    };
    repos();
  }, [user]);

  useEffect(() => {
    const user = async () => {
      try {
        setIsLoadingRepos(true);
        const res = await getUser();
        setUser(res.data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoadingRepos(false);
      }
    };
    user();
  }, []);

  return (
    <Provider
      value={{
        page,
        setPage,
        repos,
        perPage,
        setPerPage,
        user,
        isLoadingRepos,
        isLoadingUser,
      }}
    >
      {children}
    </Provider>
  );
};
