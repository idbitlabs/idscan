import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, TxnbridgeMain } from "../components/index";

const txnbridge = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <TxnbridgeMain />
      <Footer />
    </div>
  );
};

export default txnbridge;
