import React, { useEffect } from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, HomePage } from "../components/index";

const index = () => {
  return (
    <div id="body" class="d-flex flex-column min-vh-100">
      <section id="masterNoticeBar"></section>
      <TopBar />
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
};

export default index;
