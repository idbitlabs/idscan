import React from "react";
import { FiSearch } from "react-icons/fi";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Multichain = () => {
  return (
    <div
      class="tab-pane fade active show"
      style={{ scrollMarginTop: "98px" }}
      id="multichain-portfolio"
      role="tabpanel"
      aria-labelledby="tab-multichain"
      tabindex="0"
    >
      <div class="card mb-3">
        <div class="card-body">
          <div class="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
            <h3 class="h6 mb-0">
              Multichain Portfolio <span class="text-muted">| 23 Chains</span>
            </h3>
            <div class="d-flex flex-wrap align-items-center gap-2">
              <a
                id="js-chain-filter-all"
                class="small link-secondary pointer-events-none text-decoration-underline"
                href="javascript:;"
              >
                Display all chains
              </a>
              <span>•</span>
              <div id="multichain-lastupdated" class="small text-muted">
                Last updated: <span class="text-dark">less than 1 sec ago</span>
              </div>
            </div>
          </div>
          <div class="js-tokens row g-2">
            <div class="js-chain col-6 col-md-3 col-xl-2 " data-chain="MATIC">
              <a
                href="javascript:;"
                class="card bg-light hover:bg-secondary hover:border-secondary hover:border-opacity-50 transition-all h-100 shadow-none rounded p-2"
              >
                <div class="d-flex align-items-center gap-1 mb-1">
                  <div>
                    <img
                      class="js-chain-icon"
                      width="18"
                      src="https://images.blockscan.com/chain-logos/matic.svg"
                      alt="Polygon"
                    />
                  </div>
                  <span class="text-muted small">
                    Polygon <span class="text-muted">(6)</span>
                  </span>
                </div>
                <div>
                  <div class="text-dark mb-n0.5 ms-1">
                    $122,235 <span class=" text-muted small">(88%)</span>
                  </div>
                </div>
              </a>
            </div>
            <div class="js-chain col-6 col-md-3 col-xl-2 " data-chain="ETH">
              <a
                href="javascript:;"
                class="card bg-light hover:bg-secondary hover:border-secondary hover:border-opacity-50 transition-all h-100 shadow-none rounded p-2"
              >
                <div class="d-flex align-items-center gap-1 mb-1">
                  <div>
                    <img
                      class="js-chain-icon"
                      width="18"
                      src="https://images.blockscan.com/chain-logos/eth.svg"
                      alt="Ethereum"
                    />
                  </div>
                  <span class="text-muted small">
                    Ethereum <span class="text-muted">(1)</span>
                  </span>
                </div>
                <div>
                  <div class="text-dark mb-n0.5 ms-1">
                    $15,906 <span class=" text-muted small">(12%)</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>

        <div class="js-chain-header d-flex flex-wrap gap-2 justify-content-between align-items-center pt-1 pb-2 px-4">
          <div class="js-show-chain-count">
            Showing <span class="fw-medium">7</span> tokens with a value of{" "}
            <span class="fw-medium">$138,141</span>
          </div>
          <div>
            <div id="js-chain-table_filter" class="dataTables_filter">
              <label class="position-relative">
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
                  class="form-control form-control-sm datatable-form-control bg-light bg-focus-white py-1.5"
                  placeholder="Search"
                  aria-controls="js-chain-table"
                />
              </label>
            </div>
          </div>
        </div>
        <div class="table-responsive">
          <div
            id="js-chain-table_wrapper"
            class="dataTables_wrapper dt-bootstrap5 no-footer"
          >
            <table
              id="js-chain-table"
              class="table table-hover dataTable no-footer border-top border-bottom"
              style={{ marginBottom: "0 !important" }}
            >
              <thead class="text-nowrap align-middle">
                <tr>
                  <th
                    scope="col"
                    width="70"
                    class="text-muted sorting"
                    tabindex="0"
                    aria-controls="js-chain-table"
                    rowspan="1"
                    colspan="1"
                    aria-label="Chain: activate to sort column ascending"
                    style={{ width: "70px" }}
                  >
                    <span class="sort-icon"></span>Chain
                  </th>
                  <th
                    scope="col"
                    class="sorting"
                    tabindex="0"
                    aria-controls="js-chain-table"
                    rowspan="1"
                    colspan="1"
                    aria-label="Token: activate to sort column ascending"
                    style={{ width: "491.406px" }}
                  >
                    <span class="sort-icon"></span>Token
                  </th>
                  <th
                    scope="col"
                    class="sorting"
                    tabindex="0"
                    aria-controls="js-chain-table"
                    rowspan="1"
                    colspan="1"
                    aria-label="Portfolio %: activate to sort column ascending"
                    style={{ width: "149.078px" }}
                  >
                    <span class="sort-icon"></span>Portfolio %
                  </th>
                  <th
                    scope="col"
                    class="sorting"
                    tabindex="0"
                    aria-controls="js-chain-table"
                    rowspan="1"
                    colspan="1"
                    aria-label="Price: activate to sort column ascending"
                    style={{ width: " 127.93px" }}
                  >
                    <span class="sort-icon"></span>Price
                  </th>
                  <th
                    scope="col"
                    class="sorting"
                    tabindex="0"
                    aria-controls="js-chain-table"
                    rowspan="1"
                    colspan="1"
                    aria-label="Amount: activate to sort column ascending"
                    style={{ width: " 143.445px" }}
                  >
                    <span class="sort-icon"></span>Amount
                  </th>
                  <th
                    scope="col"
                    class="sorting sorting_desc"
                    tabindex="0"
                    aria-controls="js-chain-table"
                    rowspan="1"
                    colspan="1"
                    aria-sort="descending"
                    aria-label="Value: activate to sort column ascending"
                    style={{ width: "164.141px" }}
                  >
                    <span class="sort-icon"></span>Value
                  </th>
                </tr>
              </thead>
              <tbody class="js-assets text-nowrap align-middle">
                <tr class="odd">
                  <td class="text-cap">
                    <a
                      class="link-muted"
                      href="https://polygonscan.com"
                      target="_blank"
                    >
                      MATIC
                    </a>
                  </td>
                  <td>
                    <div class="d-flex align-items-center1 gap-4">
                      <div class="position-relative">
                        <img
                          width="22"
                          src="https://polygonscan.com/token/images/poly.svg"
                          alt=""
                        />
                      </div>
                      <span
                        class="hash-tag text-truncate"
                        style={{ maxWidth: "15rem" }}
                      >
                        Polygon <span class="text-muted">(MATIC)</span>
                      </span>
                    </div>
                  </td>
                  <td>88.48%</td>
                  <td>$1.16</td>
                  <td>105,730.16</td>
                  <td data-totalval="122232.852873" class="sorting_1">
                    $122,232.85
                  </td>
                </tr>
                <tr class="even">
                  <td class="text-cap">
                    <a
                      class="link-muted"
                      href="https://etherscan.io"
                      target="_blank"
                    >
                      ETH
                    </a>
                  </td>
                  <td>
                    <div class="d-flex align-items-center1 gap-4">
                      <div class="position-relative">
                        <img
                          width="22"
                          src="https://etherscan.io/token/images/eth.svg"
                          alt=""
                        />
                      </div>
                      <a
                        href="https://etherscan.io/address/0x67b94473d81d0cd00849d563c94d0432ac988b49"
                        target="_blank"
                        class="link-dark hash-tag text-truncate"
                        style={{ maxWidth: "15rem" }}
                      >
                        Ether <span class="text-muted">(ETH)</span>
                      </a>
                    </div>
                  </td>
                  <td>11.51%</td>
                  <td>$3,747.96</td>
                  <td>4.244</td>
                  <td data-totalval="15906.345606" class="sorting_1">
                    $15,906.35
                  </td>
                </tr>
                <tr class="odd">
                  <td class="text-cap">
                    <a
                      class="link-muted"
                      href="https://polygonscan.com"
                      target="_blank"
                    >
                      MATIC
                    </a>
                  </td>
                  <td>
                    <div class="d-flex align-items-center1 gap-4">
                      <div class="position-relative">
                        <img
                          width="22"
                          src="https://polygonscan.com/token/images/centre-usdc_32.png"
                          alt=""
                        />
                      </div>
                      <a
                        href="https://polygonscan.com/token/0x2791bca1f2de4661ed88a30c99a7a9449aa84174?a=0x67b94473d81d0cd00849d563c94d0432ac988b49"
                        target="_blank"
                        class="link-dark hash-tag text-truncate"
                        style={{ maxWidth: "15rem" }}
                      >
                        USD Coin (PoS) <span class="text-muted">(USDC.E)</span>
                      </a>
                    </div>
                  </td>
                  <td>&lt;0.01%</td>
                  <td>$1</td>
                  <td>0.5472</td>
                  <td data-totalval="0.5488" class="sorting_1">
                    $0.5488
                  </td>
                </tr>
                <tr class="even">
                  <td class="text-cap">
                    <a
                      class="link-muted"
                      href="https://polygonscan.com"
                      target="_blank"
                    >
                      MATIC
                    </a>
                  </td>
                  <td>
                    <div class="d-flex align-items-center1 gap-4">
                      <div class="position-relative">
                        <img
                          width="22"
                          src="https://polygonscan.com/token/images/wETH_32.png"
                          alt=""
                        />
                      </div>
                      <a
                        href="https://polygonscan.com/token/0x7ceb23fd6bc0add59e62ac25578270cff1b9f619?a=0x67b94473d81d0cd00849d563c94d0432ac988b49"
                        target="_blank"
                        class="link-dark hash-tag text-truncate"
                        style={{ maxWidth: "15rem" }}
                      >
                        Wrapped Ether <span class="text-muted">(WETH)</span>
                      </a>
                    </div>
                  </td>
                  <td>&lt;0.01%</td>
                  <td>$3,752.42</td>
                  <td>0.00012632</td>
                  <td data-totalval="0.474" class="sorting_1">
                    $0.474
                  </td>
                </tr>
                <tr class="odd">
                  <td class="text-cap">
                    <a
                      class="link-muted"
                      href="https://polygonscan.com"
                      target="_blank"
                    >
                      MATIC
                    </a>
                  </td>
                  <td>
                    <div class="d-flex align-items-center1 gap-4">
                      <div class="position-relative">
                        <img
                          width="22"
                          src="https://polygonscan.com/token/images/kred_32.png"
                          alt=""
                        />
                      </div>
                      <a
                        href="https://polygonscan.com/token/0x5e6602b762f76d8bfdc7321aa0b787b1e67b187f?a=0x67b94473d81d0cd00849d563c94d0432ac988b49"
                        target="_blank"
                        class="link-dark hash-tag text-truncate"
                        style={{ maxWidth: "15rem" }}
                      >
                        KRED <span class="text-muted">(KRED)</span>
                      </a>
                    </div>
                  </td>
                  <td>&lt;0.01%</td>
                  <td>$0.000013</td>
                  <td>23,000</td>
                  <td data-totalval="0.3017" class="sorting_1">
                    $0.3017
                  </td>
                </tr>
                <tr class="even">
                  <td class="text-cap">
                    <a
                      class="link-muted"
                      href="https://polygonscan.com"
                      target="_blank"
                    >
                      MATIC
                    </a>
                  </td>
                  <td>
                    <div class="d-flex align-items-center1 gap-4">
                      <div class="position-relative">
                        <img
                          width="22"
                          src="https://polygonscan.com/token/images/usdc_32.png"
                          alt=""
                        />
                      </div>
                      <a
                        href="https://polygonscan.com/token/0x3c499c542cef5e3811e1192ce70d8cc03d5c3359?a=0x67b94473d81d0cd00849d563c94d0432ac988b49"
                        target="_blank"
                        class="link-dark hash-tag text-truncate"
                        style={{ maxWidth: "15rem" }}
                      >
                        USD Coin <span class="text-muted">(USDC)</span>
                      </a>
                    </div>
                  </td>
                  <td>&lt;0.01%</td>
                  <td>$1</td>
                  <td>0.192</td>
                  <td data-totalval="0.1925" class="sorting_1">
                    $0.1925
                  </td>
                </tr>
                <tr class="odd">
                  <td class="text-cap">
                    <a
                      class="link-muted"
                      href="https://polygonscan.com"
                      target="_blank"
                    >
                      MATIC
                    </a>
                  </td>
                  <td>
                    <div class="d-flex align-items-center1 gap-4">
                      <div class="position-relative">
                        <img
                          width="22"
                          src="https://polygonscan.com/token/images/sheeshafinance_32.png?v-2"
                          alt=""
                        />
                      </div>
                      <a
                        href="https://polygonscan.com/token/0x88c949b4eb85a90071f2c0bef861bddee1a7479d?a=0x67b94473d81d0cd00849d563c94d0432ac988b49"
                        target="_blank"
                        class="link-dark hash-tag text-truncate"
                        style={{ maxWidth: "15rem" }}
                      >
                        SHEESHA POLYGON{" "}
                        <span class="text-muted">(MSHEESHA)</span>
                      </a>
                    </div>
                  </td>
                  <td>&lt;0.01%</td>
                  <td>$0.001747</td>
                  <td>100</td>
                  <td data-totalval="0.1746" class="sorting_1">
                    $0.1746
                  </td>
                </tr>
              </tbody>
            </table>
            <div style={{ width: "70px" }}></div>
          </div>
        </div>

        <div class="js-chain-footer d-flex flex-wrap gap-2 align-items-center justify-content-between p-4">
          <div class="dataTables_length">
            <label class="d-flex align-items-center gap-2 text-muted">
              Show{" "}
              <select
                name="js-chain-table_length"
                aria-controls="js-chain-table"
                class="form-select form-select-sm"
              >
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
                <option value="100">100</option>
              </select>{" "}
              of <span id="js-total-entries"></span> entries
            </label>
          </div>
          <div
            class="dataTables_paginate paging_full"
            id="js-chain-table_paginate"
          >
            <ul class="pagination pagination-sm mb-0">
              <li
                class="paginate_button page-item first disabled"
                id="js-chain-table_first"
              >
                <a
                  aria-controls="js-chain-table"
                  aria-disabled="true"
                  role="link"
                  data-dt-idx="first"
                  tabindex="-1"
                  class="page-link"
                >
                  First
                </a>
              </li>
              <li
                class="paginate_button page-item previous disabled"
                id="js-chain-table_previous"
              >
                <a
                  aria-controls="js-chain-table"
                  aria-disabled="true"
                  role="link"
                  data-dt-idx="previous"
                  tabindex="-1"
                  class="page-link px-3"
                >
                  <i class="fa fa-chevron-left small">
                    <MdKeyboardArrowLeft />
                  </i>
                </a>
              </li>
              <li class="page-item disabled">
                <span class="page-link">Page 1 of 1</span>
              </li>
              <li
                class="paginate_button page-item next disabled"
                id="js-chain-table_next"
              >
                <a class="page-link px-3">
                  <i class="fa fa-chevron-right small">
                    <MdKeyboardArrowRight />
                  </i>
                </a>
              </li>
              <li
                class="paginate_button page-item last disabled"
                id="js-chain-table_last"
              >
                <a class="page-link">Last</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="mt-4">
        <p class="d-flex align-items-baseline fs-sm text-muted gap-1 mb-3">
          <i class="far fa-lightbulb-on"></i>
          <span>
            A wallet address is a publicly available address that allows its
            owner to receive funds from another party. To access the funds in an
            address, you must have its private key. Learn more about addresses
            in our{" "}
            <a
              target="_blank"
              href="https://info.polygonscan.com//what-is-an-address/"
            >
              Knowledge Base
            </a>
            .
          </span>
        </p>
      </div>
    </div>
  );
};

export default Multichain;
