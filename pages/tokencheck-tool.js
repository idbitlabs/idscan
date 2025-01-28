import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, TokencheckTool } from "../components/index";

const tokencheckTool = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <TokencheckTool />
      <Footer />
    </div>
  );
};

export default tokencheckTool;
