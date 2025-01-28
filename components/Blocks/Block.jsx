import React, { useContext, useEffect, useState } from "react";

//INTERNAL IMPORT
import { Input, Title, Table, Pagination, Anylitic } from "./index";
import { CONTEXT } from "../../context/ContextProvider";

const Block = () => {
  const { getLatestBlock, getLatestTransaction, PROVIDER } =
    useContext(CONTEXT);
  const [blocks, setBlocks] = useState([]);

  useEffect(() => {
    getLatestBlock(30).then((items) => {
      setBlocks(items?.reverse());
    });
  }, []);
  return (
    <main id="content" class="main-content" role="main">
      <Input />
      <Title />

      <section class="container-xxl pt-5 pb-12">
        {/* //1 */}
        <Anylitic />

        {/* //2 */}
        <div class="card">
          <div class="card-body" id="divDataInfo">
            <div class="d-flex flex-column flex-sm-row justify-content-between gap-3">
              <div class="text-muted">
                <span class="text-dark">Total of 53,618,186 blocks</span>
                <span class="d-block small">
                  Showing blocks between #53618161 to #53618185
                </span>{" "}
              </div>
            </div>
          </div>

          <Table blocks={blocks} PROVIDER={PROVIDER} />
          <Pagination />
        </div>
      </section>
    </main>
  );
};

export default Block;
