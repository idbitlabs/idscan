import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, Myaddress } from "../components/index";

const myaddress = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Myaddress />
      <Footer />
    </div>
  );
};

export default myaddress;
