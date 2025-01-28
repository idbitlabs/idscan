import React from "react";

//INTERNAL IMPORT
import {
  Header,
  Footer,
  TopBar,
  FindSimilarContracts,
} from "../components/index";

const findSimilarContracts = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <FindSimilarContracts />
      <Footer />
    </div>
  );
};

export default findSimilarContracts;
