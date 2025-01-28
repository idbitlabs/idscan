import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, MynotesAddress } from "../components/index";

const mynotes_address = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <MynotesAddress />
      <Footer />
    </div>
  );
};

export default mynotes_address;
