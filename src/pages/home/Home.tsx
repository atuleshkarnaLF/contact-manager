import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/layout";
import { NAVBAR_PAGES } from "../../constants/navbar";

const Home = () => {
  return (
    <>
      <Header navbarPages={NAVBAR_PAGES} />
      <main className="bg-grey-base pb-10x">
        <div className="container-fluid px-15x full-screen">
          <Outlet />
        </div>
      </main>
    </>
  );
};

export default Home;
