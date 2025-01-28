import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, Accounts } from "../components/index";

const accounts = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Accounts />
      <Footer />
    </div>
  );
};

export default accounts;
