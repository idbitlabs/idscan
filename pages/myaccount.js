import React, { useState } from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, Myaccount } from "../components/index";

const myaccount = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Myaccount />
      <Footer />
    </div>
  );
};

export default myaccount;
