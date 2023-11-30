import React, { useContext } from "react";
import Header from "../../components/Header/Header";
import NavBar from "../../components/NavBar/NavBar";
import HeroPic from "../../components/HeroPic/HeroPic";

const HomePage = () => {
  return (
    <>
      <HeroPic />
      <Header />
      <NavBar />
    </>
  );
};

export default HomePage;
