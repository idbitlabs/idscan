import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, Charts } from "../components/index";

const charts = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Charts />
      <Footer />
    </div>
  );
};

export default charts;
