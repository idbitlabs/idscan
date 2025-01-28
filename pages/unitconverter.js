import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, Unitconverter } from "../components/index";

const unitconverter = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Unitconverter />
      <Footer />
    </div>
  );
};

export default unitconverter;
