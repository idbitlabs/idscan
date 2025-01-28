import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, Mysettings } from "../components/index";

const mysettings = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Mysettings />
      <Footer />
    </div>
  );
};

export default mysettings;
