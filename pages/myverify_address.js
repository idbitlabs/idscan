import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, MyverifyAddress } from "../components/index";

const myverifyAddress = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <MyverifyAddress />
      <Footer />
    </div>
  );
};

export default myverifyAddress;
