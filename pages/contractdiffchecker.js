import React from "react";

//INTERNAL IMPORT
import {
  Header,
  Footer,
  TopBar,
  Contractdiffchecker,
} from "../components/index";

const contractdiffchecker = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Contractdiffchecker />
      <Footer />
    </div>
  );
};

export default contractdiffchecker;
