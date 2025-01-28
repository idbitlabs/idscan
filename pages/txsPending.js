import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, TxsPending } from "../components/index";

const txsPending = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <TxsPending />
      <Footer />
    </div>
  );
};

export default txsPending;
