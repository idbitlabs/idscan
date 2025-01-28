import React from "react";
import { GoQuestion } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { CiBoxes } from "react-icons/ci";
import { FaRegCopy } from "react-icons/fa6";
import { MdOutlineMenuOpen } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

//INTERNAL IMPORT
import { Input, Title, Table, Navigation, Pagination } from "./index";

const NftTrades = () => {
  return (
    <main id="content" class="main-content" role="main">
      <Input />

      <main class="main-content" role="main">
        <Title />

        <section class="container-xxl pt-5 pb-12">
          <div class="card">
            <Table />
            <Pagination />
          </div>
          <div class="fs-80x text-muted text-end mt-3">
            [&nbsp;Download:{" "}
            <a
              id="csvlink"
              data-bs-toggle="tooltip"
              data-bs-trigger="hover"
              href="/exportData?type=nft-trades"
              target="_blank"
              class="fw-medium"
            >
              CSV Export
            </a>{" "}
            <i class="far fa-download fa-fw"></i>&nbsp;]
          </div>
        </section>
      </main>
    </main>
  );
};

export default NftTrades;
