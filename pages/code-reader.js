import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, CodeReader } from "../components/index";

const codeReader = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <CodeReader />
      <Footer />
    </div>
  );
};

export default codeReader;
