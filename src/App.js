import { createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Layout } from "./containers/";
import { ErrorPage, Home, List, Repo } from "./pages";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    path: "/",
    children: [
      { path: "/", element: <Home /> },
      {
        path: "repoes",
        element: <List />,
      },
      {
        path: "repoes/:name",
        element: <Repo />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);

const App = () => {
  return <Layout />;
};

export default App;
