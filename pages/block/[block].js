import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, BlockID } from "../../components/index";

const blockId = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <BlockID />
      <Footer />
    </div>
  );
};

export default blockId;
