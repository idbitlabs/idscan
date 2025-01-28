import React from "react";

//INTERNAL IMPORT
import { Header, Footer, TopBar, BlockFork } from "../components/index";

const blocksForked = () => {
  return (
    <div>
      <TopBar />
      <Header />
      <BlockFork />
      <Footer />
    </div>
  );
};

export default blocksForked;
