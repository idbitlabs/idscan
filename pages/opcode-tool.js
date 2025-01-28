import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, OpcodeTool } from "../components/index";

const opcodeTool = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <OpcodeTool />
      <Footer />
    </div>
  );
};

export default opcodeTool;
