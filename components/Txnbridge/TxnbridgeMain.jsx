import React from "react";
import { IoEye } from "react-icons/io5";
import { FaArrowRightLong, FaRegCopy } from "react-icons/fa6";

import { Input, Pagination, Table, Title } from "./index";

const TxnbridgeMain = () => {
  return (
    <main id="content" class="main-content" role="main">
      {/* //2 */}
      <Input />

      <Title />
      {/* //3 */}
      <section class="container-xxl pt-5 pb-12">
        <span id="ContentPlaceHolder1_lblAdResult"></span>
        {/* //4 */}
        <div id="ContentPlaceHolder1_divTransactions" class="card">
          <div id="ContentPlaceHolder1_divDataInfo" class="card-body">
            <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div>
                <span class="text-dark content-center gap-1">
                  More than 3,623,106,242 transactions found
                </span>
                <div class="d-block text-muted small">
                  (Showing the last 500k records)
                </div>
              </div>
            </div>
          </div>
          {/* 11? */}

          <Table />
          <Pagination />
        </div>
        {/* //5 */}
      </section>
    </main>
  );
};

export default TxnbridgeMain;
