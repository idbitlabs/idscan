import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, Apis } from "../components/index";

const apis = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Apis />
      <Footer />
    </div>
  );
};

export default apis;
