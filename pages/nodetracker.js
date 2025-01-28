import React from "react";
//INTERNAL IMPORT
import { Header, Footer, TopBar, Nodetracker } from "../components/index";
const nodetracker = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Nodetracker />
      <Footer />
    </div>
  );
};

export default nodetracker;
