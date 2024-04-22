import { useContext } from "react";
import { Search } from "../components";
import { AppContext } from "../context/searchContext";

const Home = () => {
  const { user, isLoadingUser } = useContext(AppContext);

  if (isLoadingUser || !user) {
    return <p>Loading</p>;
  }
  return (
    <div className="flex flex-col items-center justify-between gap-12">
      <Search />
      <section className="flex flex-col md:flex-row shadow-md hover:shadow-2xl rounded-lg hover:rounded-2xl w-[30vw] items-start justify-evenly gap-16 p-8">
        {/* image */}
        <section className="h-auto rounded-md flex-none w-16">
          <img
            src={user.avatar_url}
            alt={user.login}
            className="w-full h-full rounded-md object-contain"
          />
        </section>

        {/* content */}
        <section className="flex-1">
          <div className="flex flex-col items-start justify-evenly gap-3">
            <h1 className="text-3xl">{user.login}</h1>
            <p className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
              <a href={user.html_url}>@{user.login}</a>
            </p>
            <p className="text-md text-slate-900 ">{user.bio}</p>
          </div>
        </section>
      </section>
    </div>
  );
};

export default Home;
