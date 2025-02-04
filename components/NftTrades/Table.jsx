import React from "react";
import { GoQuestion } from "react-icons/go";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import { CiBoxes } from "react-icons/ci";
import { FaRegCopy } from "react-icons/fa6";
import { MdOutlineMenuOpen } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
const Table = () => {
  return (
    <div class="card-body p-0">
      <div
        id="datatable_wrapper"
        class="dataTables_wrapper dt-bootstrap4 no-footer"
      >
        <div class="card-header d-flex flex-wrap justify-content-between gap-2">
          <div class="divSelectMarket">
            <div class="dropdown">
              <button
                id="datatable_selectNftDex"
                class="btn btn-sm btn-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <div
                  class="content-center me-0.5"
                  style={{ width: "16px", height: "16px" }}
                >
                  <i class="far fa-grid-2 text-dark">
                    <MdOutlineMenuOpen />
                  </i>
                </div>
                All Marketplaces
                <span id="datatable_spanSelectedNftDex"></span>
              </button>
              <ul
                id="datatable_selectNftDexButton"
                class="dropdown-menu scrollbar-custom"
                aria-labelledby="datatable_selectNftDex"
                style={{
                  minWidth: "200px",
                  maxHeight: "450px",
                  overflowY: "auto",
                }}
              >
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:;"
                    onclick="datatableDexFilter('datatable', '', this)"
                  >
                    <div
                      class="content-center me-1.5"
                      style={{ width: "16px", height: "16px" }}
                    >
                      <i class="far fa-grid-2 text-dark">
                        <MdOutlineMenuOpen />
                      </i>
                    </div>
                    All Marketplaces
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:;"
                    onclick="datatableDexFilter('datatable', '13', this)"
                  >
                    <img
                      class="u-xs-avatar me-1"
                      src="/icon.png"
                      style={{ height: "auto", width: "1rem" }}
                    />
                    Mooar
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:;"
                    onclick="datatableDexFilter('datatable', '8', this)"
                  >
                    <img
                      class="u-xs-avatar me-1"
                      src="/icon.png"
                      style={{ height: "auto", width: "1rem" }}
                    />
                    Seaport
                  </a>
                </li>
                <li>
                  <a
                    class="dropdown-item d-flex align-items-center"
                    href="javascript:;"
                    onclick="datatableDexFilter('datatable', '10', this)"
                  >
                    <img
                      class="u-xs-avatar me-1"
                      src="/icon.png"
                      style={{ height: "auto", width: "1rem" }}
                    />
                    tofuNFT
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <div
              id="datatable_filter"
              class="dataTables_filter position-relative"
            >
              <label>
                <span
                  class="d-flex align-items-center position-absolute top-0 bottom-0"
                  style={{ left: "0.5rem" }}
                >
                  <i class="far fa-search fs-sm text-muted">
                    <FiSearch />
                  </i>
                </span>
                <input
                  type="search"
                  class="form-control form-control-sm datatable-form-control bg-light bg-focus-white"
                  placeholder="Search by Token Address"
                  aria-controls="datatable"
                />
              </label>
            </div>
          </div>
        </div>
        <div class="top card-body d-flex flex-wrap align-items-center justify-content-between gap-3 topdivdt">
          <div class="datainfo">
            <div
              class="dataTables_info"
              id="datatable_info"
              role="status"
              aria-live="polite"
            >
              <div class="text-muted">
                <span class="text-dark">More than 100,000 records found</span>
                <span class="d-flex small">(Showing last 100k records)</span>
              </div>
            </div>
          </div>
          <div class="d-flex flex-column gap-2">
            <div class="d-flex align-items-center align-self-sm-end"></div>
            <div class="d-sm-flex align-items-center align-self-sm-end">
              <div
                class="dataTables_paginate paging_full"
                id="datatable_paginate"
              >
                <ul class="pagination pagination-sm mb-0">
                  <li
                    class="paginate_button page-item first disabled"
                    id="datatable_first"
                  >
                    <a
                      href="#"
                      aria-controls="datatable"
                      data-dt-idx="0"
                      tabindex="0"
                      class="page-link"
                    >
                      First
                    </a>
                  </li>
                  <li
                    class="paginate_button page-item previous disabled"
                    id="datatable_previous"
                  >
                    <a
                      href="#"
                      aria-controls="datatable"
                      data-dt-idx="1"
                      tabindex="0"
                      class="page-link px-3"
                    >
                      <i class="fa fa-chevron-left small">
                        <IoIosArrowBack />
                      </i>
                    </a>
                  </li>
                  <li class="page-item disabled">
                    <span class="page-link">Page 1 of 4000</span>
                  </li>
                  <li
                    class="paginate_button page-item next"
                    id="datatable_next"
                  >
                    <a
                      href="#"
                      aria-controls="datatable"
                      data-dt-idx="2"
                      tabindex="0"
                      class="page-link px-3"
                    >
                      <i class="fa fa-chevron-right small">
                        <IoIosArrowForward />
                      </i>
                    </a>
                  </li>
                  <li
                    class="paginate_button page-item last"
                    id="datatable_last"
                  >
                    <a
                      href="#"
                      aria-controls="datatable"
                      data-dt-idx="3"
                      tabindex="0"
                      class="page-link"
                    >
                      Last
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
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
            class="table table-lg table-hover text-nowrap mb-0 dataTable no-footer"
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
                <th
                  scope="col"
                  class="sorting_disabled"
                  rowspan="1"
                  colspan="1"
                >
                  Transaction Info
                </th>
                <th
                  scope="col"
                  class="sorting_disabled"
                  rowspan="1"
                  colspan="1"
                >
                  Block
                </th>
                <th
                  scope="col"
                  class="sorting_disabled"
                  rowspan="1"
                  colspan="1"
                >
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
                  scope="col"
                  class="sorting_disabled"
                  rowspan="1"
                  colspan="1"
                >
                  Action
                </th>
                <th
                  scope="col"
                  class="sorting_disabled"
                  rowspan="1"
                  colspan="1"
                >
                  Price
                </th>
                <th
                  scope="col"
                  class="sorting_disabled"
                  rowspan="1"
                  colspan="1"
                >
                  Market
                </th>
                <th
                  data-highlight=""
                  scope="col"
                  width="100"
                  class="sorting_disabled"
                  rowspan="1"
                  colspan="1"
                >
                  Buyer
                </th>
                <th
                  scope="col"
                  class="sorting_disabled"
                  rowspan="1"
                  colspan="1"
                >
                  Type
                </th>
                <th
                  scope="col"
                  class="sorting_disabled"
                  rowspan="1"
                  colspan="1"
                >
                  Item
                </th>
              </tr>
            </thead>
            <tbody class="align-middle text-nowrap">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((item, index) => (
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
                      <a href="tx/0xb319c45e4db8e40c8ff591a7a10c1fd8a28227992804d3f75d7e6a84b8bfd0b8">
                        0xb319c45e4db8e40c8ff591a7a10c1fd8a28227992804d3f75d7e6a84b8bfd0b8
                      </a>
                    </span>
                  </td>
                  <td>
                    <a href="/block/54522352" target="_parent">
                      54522352
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
                        1 min ago
                      </span>
                    </div>
                  </td>
                  <td>
                    <span class="text-success">Bought</span>
                  </td>
                  <td>0.1 POL ($0.12)</td>
                  <td>
                    <div class="d-flex align-items-center gap-1">
                      <img
                        src="icon.png"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-html="true"
                        data-bs-boundary="viewport"
                        class="rounded"
                        width="16"
                        aria-label="Seaport"
                      />
                      <span>Seaport</span>
                    </div>
                  </td>
                  <td>
                    <span class="d-flex d-flex align-items-center gap-2">
                      <a
                        href="/address/0xeaab0bc7f79c90e55e5f0d67c0537da251c7fb36#nfttransfers"
                        target="_parent"
                        data-bs-toggle="tooltip"
                        data-bs-trigger="hover"
                        data-bs-html="true"
                        data-bs-boundary="viewport"
                      >
                        <span
                          data-highlight-target="0xeaaB0bc7f79C90e55e5f0d67C0537Da251C7fB36"
                          class="border border-white ps-1 pe-2 ms-n1 me-n2"
                        >
                          0xeaaB0bc7...251C7fB36
                        </span>
                      </a>
                      <a class="js-clipboard link-secondary">
                        <i id="linkIcon_m0" class="far fa-copy fa-fw">
                          <FaRegCopy />
                        </i>{" "}
                      </a>
                    </span>
                  </td>
                  <td>
                    <span class="badge border text-dark fw-normal rounded-pill px-2 py-1.5">
                      ERC-1155
                    </span>{" "}
                    <span class="badge border text-dark fw-normal rounded-pill px-2 py-1.5">
                      &gt;99
                    </span>
                  </td>
                  <td>
                    <a
                      class="d-flex align-items-center gap-2 link-dark"
                      href="#"
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
                            PEPE 3D#45
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
                              PEPE 3D
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
    </div>
  );
};

export default Table;
