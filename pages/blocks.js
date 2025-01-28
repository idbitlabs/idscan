import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, Block } from "../components/index";

const blocks = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Block />
      <Footer />
    </div>
  );
};

export default blocks;
