import React from "react";

//INTERNAL IMPORT
import { Input, Title, Table, Navigation, Pagination } from "./index";

const NftTopContracts = () => {
  return (
    <main id="content" class="main-content" role="main">
      <Input />

      <main class="main-content" role="main">
        <Title />

        <section class="container-xxl pt-2 pb-12">
          <Navigation />
          <Table />
          <Pagination />
        </section>
      </main>
    </main>
  );
};

export default NftTopContracts;
