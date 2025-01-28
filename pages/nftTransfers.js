import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, NftTransfers } from "../components/index";

const nftTransfers = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <NftTransfers />
      <Footer />
    </div>
  );
};

export default nftTransfers;
