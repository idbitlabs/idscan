import React from "react";

//INTERNAL IMPORT
import { Input, Title, Table, Pagination } from "./index";

const BlockFork = () => {
  return (
    <main id="content" class="main-content" role="main">
      <Input />
      <Title />

      <section class="container-xxl pt-5 pb-12">
        <div class="card">
          <div id="ContentPlaceHolder1_divDataInfo" class="card-body">
            <div class="d-flex flex-column flex-sm-row justify-content-between gap-3">
              <div class="text-muted">
                <span class="text-dark">
                  A total of 11,425 forked blocks found
                </span>
              </div>
            </div>
          </div>

          <Table />
          <Pagination />
        </div>
      </section>
    </main>
  );
};

export default BlockFork;
