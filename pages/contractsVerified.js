import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, ContractsVerified } from "../components/index";

const contractsVerified = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <ContractsVerified />
      <Footer />
    </div>
  );
};

export default contractsVerified;
