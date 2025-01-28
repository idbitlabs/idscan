import React from "react";
//INTERNAL IMPORT
import {
  Header,
  Footer,
  TopBar,
  VerifiedSignatures,
} from "../components/index";

const verifiedSignatures = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <VerifiedSignatures />
      <Footer />
    </div>
  );
};

export default verifiedSignatures;
