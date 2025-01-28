import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, NftTopMints } from "../components/index";

const nftTopMints = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <NftTopMints />
      <Footer />
    </div>
  );
};

export default nftTopMints;
