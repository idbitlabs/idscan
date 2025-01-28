import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, ExportData } from "../components/index";

const exportData = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <ExportData />
      <Footer />
    </div>
  );
};

export default exportData;
