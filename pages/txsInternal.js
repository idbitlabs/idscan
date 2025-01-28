import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, TxsInternalMain } from "../components/index";

const txsInternal = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <TxsInternalMain />
      <Footer />
    </div>
  );
};

export default txsInternal;
