import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, VerifyContract } from "../components/index";

const verifyContract = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <VerifyContract />
      <Footer />
    </div>
  );
};

export default verifyContract;
