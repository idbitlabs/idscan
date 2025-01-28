import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, BalancecheckTool } from "../components/index";
const balancecheckTool = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <BalancecheckTool />
      <Footer />
    </div>
  );
};

export default balancecheckTool;
