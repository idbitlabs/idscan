import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, PushTx } from "../components/index";

const pushTx = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <PushTx />
      <Footer />
    </div>
  );
};

export default pushTx;
