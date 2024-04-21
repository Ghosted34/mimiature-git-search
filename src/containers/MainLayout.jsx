import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../components";

const Layout = () => {
  return (
    <>
      <Header />
      <main className="flex items-center justify-center w-full h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
