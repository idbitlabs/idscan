import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, NftTopContracts } from "../components/index";

const nftTopContracts = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <NftTopContracts />
      <Footer />
    </div>
  );
};

export default nftTopContracts;
