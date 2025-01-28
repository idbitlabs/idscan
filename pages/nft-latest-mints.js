import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, Nftlatestmints } from "../components/index";

const nftlatestmints = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Nftlatestmints />
      <Footer />
    </div>
  );
};

export default nftlatestmints;
