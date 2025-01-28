import React from "react";
import { GoQuestion } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { CiBoxes } from "react-icons/ci";
import { FaRegCopy, FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineMenuOpen } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { Input, Title, Table, Pagination, Navigation } from "./index";

const Nftlatestmints = () => {
  return (
    <main id="content" class="main-content" role="main">
      <Input />

      <main class="main-content" role="main">
        <Title />
        <section class="container-xxl pt-5 pb-12">
          <div class="card">
            <div class="card-body p-0">
              <div
                id="datatable_wrapper"
                class="dataTables_wrapper dt-bootstrap4 no-footer"
              >
                <Navigation />
                <Table />
                <Pagination />
                <div class="clear"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </main>
  );
};

export default Nftlatestmints;
