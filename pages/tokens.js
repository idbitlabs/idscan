import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, Tokens } from "../components/index";

const tokens = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Tokens />
      <Footer />
    </div>
  );
};

export default tokens;
