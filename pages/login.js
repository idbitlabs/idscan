import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, Login } from "../components/index";

const login = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Login />
      <Footer />
    </div>
  );
};

export default login;
