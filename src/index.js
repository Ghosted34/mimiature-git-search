import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider as Router } from "react-router-dom";
import App, { router } from "./App";
import { AppProvider as Provider } from "./context/searchContext.js";
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider>
      <Router router={router}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
