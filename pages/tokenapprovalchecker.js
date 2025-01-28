import React from "react";
//INTERNAL IMPORT
import {
  Header,
  Footer,
  TopBar,
  Tokenapprovalchecker,
} from "../components/index";

const tokenapprovalchecker = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Tokenapprovalchecker />
      <Footer />
    </div>
  );
};

export default tokenapprovalchecker;
