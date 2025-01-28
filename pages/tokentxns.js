import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, Tokentxns } from "../components/index";

const tokentxns = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Tokentxns />
      <Footer />
    </div>
  );
};

export default tokentxns;
