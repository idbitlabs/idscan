import React from "react";

//INTERNAL IMPORT
import { Input, Title, Search, Table, Pagination } from "./index";

const index = () => {
  return (
    <main id="content" class="main-content" role="main">
      <Input />
      {/* //1 */}
      <Title />
      <span id="ContentPlaceHolder1_lblAdResult"></span>
      {/* //2 */}

      <section className="container-xxl pt-5 pb-12">
        <div id="ContentPlaceHolder1_mainrow" className="card">
          {/* //1 */}
          <Search />
          {/* //2 */}
          <div
            id="ContentPlaceHolder1_divTopPage"
            class="card-body d-flex flex-column flex-sm-row justify-content-between gap-3"
          >
            <div class="text-muted">
              <span class="text-dark">A total of 179 pending txns found</span>
            </div>
          </div>
          {/* //3 */}
          <Table />
          {/* //4 */}
          <Pagination />
        </div>
      </section>
    </main>
  );
};

export default index;
