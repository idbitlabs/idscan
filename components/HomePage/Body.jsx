import React from "react";
import { FaRegSquare, FaRegFileAlt } from "react-icons/fa";

//INTERNAL IMPORT
import { LatestBlocks, LatestTransactions, CustomizeCardModal } from "./index";

const Body = ({ Data }) => {
  return (
    <>
      <section class="container-xxl pb-20">
        {/* //ONE */}
        <LatestBlocks Data={Data} />
        <div class="d-flex d-lg-none justify-content-center mb-4"></div>

        {/* //SECOND */}
        <LatestTransactions />
      </section>
      <CustomizeCardModal />
    </>
  );
};

export default Body;
