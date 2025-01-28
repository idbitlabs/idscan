import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, Topstat } from "../components/index";

const topstat = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Topstat />
      <Footer />
    </div>
  );
};

export default topstat;
