import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, Tx } from "../../components/index";
const transaction = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Tx />
      <Footer />
    </div>
  );
};

export default transaction;
