import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, NftTrades } from "../components/index";

const nftTrades = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <NftTrades />
      <Footer />
    </div>
  );
};

export default nftTrades;
