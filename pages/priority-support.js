import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, PrioritySupport } from "../components/index";

const prioritySupport = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <PrioritySupport />
      <Footer />
    </div>
  );
};

export default prioritySupport;
