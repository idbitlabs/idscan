import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, NameLookup } from "../components/index";
const nameLookup = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <NameLookup />
      <Footer />
    </div>
  );
};

export default nameLookup;
