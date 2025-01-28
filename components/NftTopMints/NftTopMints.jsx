import React from "react";

//INTERNAL IMPORT
import { Input, Title, Table, Navigation, Pagination } from "./index";

const NftTopMints = () => {
  return (
    <main id="content" class="main-content" role="main">
      <Input />

      <main class="main-content" role="main">
        <Title />

        <section class="container-xxl pt-5 pb-12">
          <Navigation />

          <div class="card">
            <Table />
            <Pagination />
          </div>
        </section>
      </main>
    </main>
  );
};

export default NftTopMints;
