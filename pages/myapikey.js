import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, Myapikey } from "../components/index";

const myapikey = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <Myapikey />
      <Footer />
    </div>
  );
};

export default myapikey;
