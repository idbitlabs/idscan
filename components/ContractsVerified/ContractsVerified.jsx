import React from "react";
import { FaArrowRightLong, FaRegCopy } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { AiFillTool } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { IoWarningOutline } from "react-icons/io5";

//INTERNAL IMPORT
import { Input, Title, Pagination, Table, Filter, TableHead } from "./index";

const ContractsVerified = () => {
  return (
    <main id="content" class="main-content" role="main">
      <Input />
      <Title />

      <span id="ContentPlaceHolder1_lblAdResult"></span>

      <section class="container-xxl pt-5 pb-12">
        <div id="ContentPlaceHolder1_mainrow" class="card">
          <Filter />
          <TableHead />
          <Table />
          <Pagination />
        </div>

        <div class="text-end me-1">
          <br />
          Source Code <a href="/source-code-usage-terms">Terms of Usage.</a>
        </div>
      </section>
    </main>
  );
};

export default ContractsVerified;
