import React from "react";
//INTERNAL IMPORT
import { Header, Footer, TopBar, Gastracker } from "../components/index";

const gastracker = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Gastracker />
      <Footer />
    </div>
  );
};

export default gastracker;
