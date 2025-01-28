import React from "react";
import { GoQuestion } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { CiBoxes } from "react-icons/ci";
import { FaRegCopy, FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineMenuOpen } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

import { Input, Title, Table, Pagination, Navigation } from "./index";

const NftTransfers = () => {
  return (
    <main id="content" class="main-content" role="main">
      <Input />
      <Title />

      <section class="container-xxl pt-4 pb-12">
        <div class="card">
          <div class="card-body p-0">
            <Table />
            <Pagination />
          </div>
        </div>
      </section>
    </main>
  );
};

export default NftTransfers;
