import React from "react";
import { GoQuestion } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { CiBoxes } from "react-icons/ci";
import { FaRegCopy, FaArrowRightLong } from "react-icons/fa6";
import { MdOutlineMenuOpen } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

import Navigation from "./Navigation";
const Table = () => {
  return (
    <div
      id="datatable_wrapper"
      class="dataTables_wrapper dt-bootstrap4 no-footer"
    >
      <Navigation />
      <div
        id="datatable_processing"
        class="dataTables_processing"
        style={{ display: "none" }}
      >
        <div id="overlay1" class="text-center py-10 ">
          <div class="spinner-border text-primary" role="status">
            <span class="visually-hidden">Loading...</span>
          </div>
          <div class="small text-muted mt-1">Loading</div>
        </div>
      </div>
      <div class="table-responsive">
        <table
          id="datatable"
          class="table table-hover text-nowrap mb-0 dataTable no-footer"
          aria-describedby="datatable_info"
          role="grid"
        >
          <thead class="text-nowrap">
            <tr role="row">
              <th
                scope="col"
                width="10"
                class="text-center sorting_disabled"
                rowspan="1"
                colspan="1"
              >
                <i class="far fa-question-circle text-muted">
                  <GoQuestion />
                </i>
              </th>
              <th scope="col" class="sorting_disabled" rowspan="1" colspan="1">
                Transaction Info
              </th>
              <th
                scope="col"
                data-highlight=""
                class="sorting_disabled"
                rowspan="1"
                colspan="1"
              >
                <span class="text-nowrap">
                  Method{" "}
                  <i class="far fa-question-circle text-muted">
                    <GoQuestion />
                  </i>
                </span>
              </th>
              <th scope="col" class="sorting_disabled" rowspan="1" colspan="1">
                Block
              </th>
              <th scope="col" class="sorting_disabled" rowspan="1" colspan="1">
                <a
                  href="javascript:;"
                  onclick="switchAgeToDateTimeV2(this)"
                  id="lnkAgeDateTimeV2"
                  class="hc_lnkAgeDateTime"
                  data-bs-toggle="tooltip"
                >
                  Age
                </a>
              </th>
              <th
                data-highlight=""
                scope="col"
                width="100"
                class="sorting_disabled"
                rowspan="1"
                colspan="1"
              >
                From
              </th>
              <th
                scope="col"
                width="20"
                class="sorting_disabled"
                rowspan="1"
                colspan="1"
              >
                &nbsp;
              </th>
              <th
                data-highlight=""
                scope="col"
                class="sorting_disabled"
                rowspan="1"
                colspan="1"
              >
                To
              </th>
              <th scope="col" class="sorting_disabled" rowspan="1" colspan="1">
                Type
              </th>
              <th scope="col" class="sorting_disabled" rowspan="1" colspan="1">
                Item
              </th>
            </tr>
          </thead>
          <tbody class="align-middle text-nowrap">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
              <tr
                key={index}
                role="row"
                class={index / 2 == 0 ? "odd" : "even"}
              >
                <td>
                  <button
                    type="button"
                    class="js-tnx-preview btn btn-sm btn-white fs-70x content-center mx-auto myFnExpandBox"
                    style={{ width: "1.75rem", height: "1.75rem" }}
                  >
                    <i class="far fa-eye">
                      <IoEye />
                    </i>
                  </button>
                </td>
                <td>
                  <span
                    class="hash-tag text-truncate myFnExpandBox_searchVal"
                    style={{ maxWidth: "7rem" }}
                  >
                    <a
                      href="tx/0x37053c3b76995835c31000c1b61526820da81a3cbcedf8840c2eb38d6647bb0a"
                      target="_parent"
                    >
                      0x37053c3b76995835c31000c1b61526820da81a3cbcedf8840c2eb38d6647bb0a
                    </a>
                  </span>
                </td>
                <td>
                  <span
                    style={{ maxWidth: "95px" }}
                    class="d-block badge bg-light border border-dark dark:border-white border-opacity-10 text-dark fw-normal text-truncate w-100 py-1.5"
                    data-bs-toggle="tooltip"
                    data-bs-boundary="viewport"
                    data-bs-html="true"
                  >
                    Safe Transfer Fr...
                  </span>
                </td>
                <td>
                  <a href="/block/54523148" target="_parent">
                    54523148
                  </a>
                </td>
                <td>
                  <div class="showAge">
                    <span
                      rel="tooltip"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                      data-bs-html="true"
                      data-bs-boundary="viewport"
                    >
                      17 secs ago
                    </span>
                  </div>
                </td>
                <td>
                  <span class="d-flex d-flex align-items-center gap-2">
                    <a href="/address/0x3662fb55b4b7bf7b4138a0482b48f953212c889c#nfttransfers">
                      <span
                        data-highlight-target="0x3662FB55b4b7bF7B4138a0482B48F953212C889C"
                        class="border border-white ps-1 pe-2 ms-n1 me-n2"
                      >
                        0x3662FB55...3212C889C
                      </span>
                    </a>
                    <a class="js-clipboard link-secondary" href="javascript:;">
                      <i id="linkIcon_f0" class="far fa-copy fa-fw">
                        <FaRegCopy />
                      </i>{" "}
                    </a>
                  </span>
                </td>
                <td>
                  <span
                    class="bg-success bg-opacity-10 border border-success border-opacity-25 text-success fs-70x content-center rounded-pill mx-auto"
                    style={{ width: "1.5rem", height: "1.5rem" }}
                  >
                    <i class="far fa-arrow-right-long">
                      <FaArrowRightLong />
                    </i>
                  </span>
                </td>
                <td>
                  <span class="d-flex d-flex align-items-center gap-2">
                    <a href="/address/0x9af3676b4c76099cff572b9d8f1ac9082f353a41#nfttransfers">
                      <span
                        data-highlight-target="0x9Af3676b4C76099cFF572B9D8f1Ac9082F353A41"
                        class="ps-1 pe-2 ms-n1 me-n2 border border-white px-1 mx-n1"
                      >
                        0x9Af3676b...82F353A41
                      </span>
                    </a>
                    <a class="js-clipboard link-secondary">
                      <i id="linkIcon_t0" class="far fa-copy fa-fw">
                        <FaRegCopy />
                      </i>{" "}
                    </a>
                  </span>
                </td>
                <td>
                  <span class="badge border text-dark fw-normal rounded-pill px-2 py-1.5">
                    ERC-721
                  </span>
                </td>
                <td>
                  <a
                    class="d-flex align-items-center gap-2 link-dark"
                    href="/nft/0x2c3380aaf13ba2f490c48fc63990db72fb46eaf1/96693"
                    target="_parent"
                  >
                    <div
                      class="content-center bg-light border rounded"
                      style={{ width: "40px", height: "40px" }}
                    >
                      <img width="24" src="icon.png" />
                    </div>
                    <div class="flex-grow-1">
                      <span
                        class="hash-tag text-truncate"
                        style={{ maxWidth: "11rem" }}
                      >
                        <span
                          data-bs-toggle="tooltip"
                          data-bs-trigger="hover"
                          data-bs-html="true"
                          data-bs-boundary="viewport"
                          data-bs-placement="top"
                        >
                          NFT: Bitcoin Staking Pioneer Pass#96693
                        </span>
                      </span>
                      <div class="d-flex align-items-center gap-1 small">
                        <span class="hash-tag text-truncate text-muted">
                          <span
                            data-bs-toggle="tooltip"
                            data-bs-trigger="hover"
                            data-bs-html="true"
                            data-bs-boundary="viewport"
                          >
                            NFT: Bitcoin Staking Pioneer Pass
                          </span>
                        </span>
                      </div>
                    </div>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div class="clear"></div>
    </div>
  );
};

export default Table;
