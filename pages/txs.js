import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar } from "../components/index";
import { Txs } from "../components/TxsPage/index";

const txs = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Txs />
      <Footer />
    </div>
  );
};

export default txs;
