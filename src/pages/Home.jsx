import { useContext } from "react";
import { Search } from "../components";
import { AppContext } from "../context/searchContext";

const Home = () => {
  const { user } = useContext(AppContext);
  console.log(user);
  return (
    <div>
      <Search />
      Home
    </div>
  );
};

export default Home;
