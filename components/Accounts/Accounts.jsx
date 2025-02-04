import React from "react";

import { Input, Title, Table, Pagination } from "./index";

const Accounts = () => {
  return (
    <main id="content" class="main-content" role="main">
      <Input />
      <Title />

      <section class="container-xxl pt-5 pb-12">
        <div class="card">
          <div
            id="ContentPlaceHolder1_topPageDiv"
            class="card-body d-flex flex-column flex-sm-row justify-content-between gap-3"
          >
            <div>
              More than
              <a>1,999,999 accounts found</a>
              (9,634,695,183<b>.</b>719 POL)
              <span class="d-block text-muted small">
                (Showing the last 10,000 top accounts only)
              </span>
            </div>
          </div>

          <Table />
          <Pagination />
        </div>
      </section>
    </main>
  );
};

export default Accounts;
