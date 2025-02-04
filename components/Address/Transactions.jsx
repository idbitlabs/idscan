import React, { useState } from "react";
import { CiStar } from "react-icons/ci";
import { MdFormatListBulletedAdd } from "react-icons/md";
import { FiFilter } from "react-icons/fi";
import { IoMdDownload } from "react-icons/io";
import { GoQuestion } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
import { TbBulb } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";

//IMTERNAL IMPORT
import { shortenAddress, convertIntoPOL } from "../../utils/index";
import { Waring } from "../index";

const Transactions = ({ transactions, readload }) => {
  const [openFilterModel, setOpenFilterModel] = useState(false);

  return (
    <>
      {transactions == "Max rate limit reached" ||
      transactions == "Error! Invalid address format" ? (
        <Waring readload={readload} />
      ) : (
        <div
          class="tab-pane fade show active"
          id="transactions"
          role="tabpanel"
          aria-labelledby="tab-1"
          tabindex="0"
        >
          <div class="card">
            <div id="ContentPlaceHolder1_divTxDataInfo" class="card-body">
              {/* //1? */}
              <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
                <p class="mb-0">
                  <i
                    class="far fa-sort-amount-down"
                    data-bs-toggle="tooltip"
                    aria-label="Oldest First"
                  ></i>
                  &nbsp;Latest 25 from a total of{" "}
                  <a href="#" data-bs-toggle="tooltip" data-bs-trigger="hover">
                    {transactions?.length}
                  </a>{" "}
                  transactions
                </p>
                <div class="d-flex gap-2 flex-wrap">
                  <button
                    class="btn btn-sm btn-white text-nowrap"
                    id="btnExportQuickTableToCSV"
                  >
                    <i class="far fa-download text-muted me-1">
                      <IoMdDownload />
                    </i>{" "}
                    Download Page Data
                  </button>
                  <div class="dropdown">
                    <button
                      class="btn btn-sm btn-white dropdown-toggle d-block"
                      type="button"
                      onClick={() =>
                        openFilterModel
                          ? setOpenFilterModel(false)
                          : setOpenFilterModel(true)
                      }
                    >
                      <i class="far fa-filter text-muted me-1">
                        <FiFilter />
                      </i>
                    </button>
                    {openFilterModel && (
                      <ul
                        class="dropdown-menu dropdown-menu-sm-end new_disply_Block_buy_adddess"
                        aria-labelledby="dropdownTxnMore"
                        style={{
                          minWidth: "10rem",
                          marginLeft: "-9rem",
                          marginTop: ".5rem",
                        }}
                      >
                        <li>
                          <a class="dropdown-item">
                            <i class="fa fa-circle fa-fw dropdown-item-icon me-1"></i>{" "}
                            View Completed Txns
                          </a>
                        </li>
                        <li>
                          <a class="dropdown-item">
                            <i class="far fa-circle fa-fw dropdown-item-icon me-1"></i>{" "}
                            View Pending Txns
                          </a>
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              </div>
              {/* //2 */}
              <div class="table-responsive">
                <table class="table table-hover mb-0">
                  <thead
                    id="ContentPlaceHolder1_theadTxnTable"
                    class="text-nowrap"
                  >
                    <tr>
                      <th scope="col" width="10" class="text-center">
                        <i class="far fa-question-circle text-muted">
                          <GoQuestion />
                        </i>
                      </th>
                      <th scope="col">Transaction Hash</th>
                      <th scope="col" data-highlight="">
                        <div class="d-flex align-items-center gap-2">
                          <span class="text-nowrap">
                            Method{" "}
                            <i class="far fa-question-circle text-muted">
                              {" "}
                              <GoQuestion />
                            </i>
                          </span>
                        </div>
                      </th>
                      <th scope="col" class="d-none d-sm-table-cell">
                        <div class="d-flex align-items-center gap-2">
                          <span class="text-nowrap">Block</span>
                        </div>
                      </th>
                      <th scope="col">
                        <div class="d-flex align-items-center gap-2">
                          <a href="#">Age</a>
                        </div>
                      </th>
                      <th scope="col" width="100" data-highlight="">
                        <div class="d-flex align-items-center gap-2">
                          <span>From</span>
                        </div>
                      </th>
                      <th scope="col" width="20"></th>
                      <th scope="col" data-highlight="">
                        <div class="d-flex align-items-center gap-2">
                          <span>To</span>
                        </div>
                      </th>
                      <th scope="col">Value</th>
                      <th scope="col">
                        <div class="me-2">
                          <a class="switch-txn-fee-gas-price">Txn Fee</a>
                        </div>
                      </th>
                    </tr>
                  </thead>
                  <tbody class="align-middle text-nowrap">
                    {transactions
                      ?.map((item, index) => (
                        <tr>
                          <td>
                            <button
                              type="button"
                              class="js-tnx-preview btn btn-sm btn-white fs-70x content-center mx-auto myFnExpandBox"
                              style={{ width: "1.75rem", height: "1.75rem" }}
                            >
                              <i class="far fa-eye">
                                <FaEye />
                              </i>
                            </button>
                          </td>
                          <td>
                            <div class="d-flex align-items-center gap-1">
                              <a
                                class="hash-tag text-truncate myFnExpandBox_searchVal"
                                style={{ maxWidth: "7rem" }}
                                href={`/tx/${item.hash}`}
                              >
                                {item.hash}
                              </a>
                            </div>
                          </td>
                          <td class="">
                            <span
                              style={{ maxWidth: "95px" }}
                              class="d-block badge bg-light border border-dark dark:border-white border-opacity-10 text-dark fw-normal text-truncate w-100 py-1.5"
                            >
                              Transfer
                            </span>
                          </td>
                          <td class="d-none d-sm-table-cell">
                            <a href="/block/52935702"> {item.blockNumber}</a>
                          </td>
                          <td class="showAge ">
                            <span>
                              {new Date(item.timeStamp * 1000).toDateString()}
                            </span>
                          </td>

                          <td>
                            <div class="d-flex align-items-center gap-1">
                              <a class="me-1 " href={`/address/${item.from}`}>
                                <span class="border border-white px-1 mx-n1">
                                  {shortenAddress(item.from)}
                                </span>
                              </a>
                              <a
                                class="js-clipboard link-secondary  "
                                onClick={() =>
                                  navigator.clipboard.writeText(item.from)
                                }
                              >
                                <i
                                  id="linkIcon_f_tx_1"
                                  class="far fa-copy fa-fw"
                                >
                                  <FaRegCopy />
                                </i>{" "}
                              </a>
                            </div>
                          </td>
                          <td>
                            <span class="badge bg-success bg-opacity-10 border border-success border-opacity-25 text-success fs-70x text-uppercase w-100 py-1.5">
                              IN
                            </span>
                          </td>
                          <td>
                            <div class="d-flex align-items-center gap-1">
                              <span class="me-1">
                                <span class="border border-white px-1 mx-n1">
                                  {shortenAddress(item.to)}
                                </span>
                              </span>
                              <a
                                class="js-clipboard link-secondary  "
                                onClick={() =>
                                  navigator.clipboard.writeText(item.to)
                                }
                              >
                                <i
                                  id="linkIcon_t_tx_1"
                                  class="far fa-copy fa-fw"
                                >
                                  <FaRegCopy />
                                </i>{" "}
                              </a>
                            </div>
                          </td>
                          <td class="text-nowrap">
                            {convertIntoPOL(item.value)} POL
                          </td>
                          <td class="small text-muted showTxnFee ">
                            {convertIntoPOL(item.gasPrice)}
                          </td>
                        </tr>
                      ))
                      .slice(0, 25)}
                  </tbody>
                </table>
              </div>
            </div>
            {/* //TAB */}
            <a
              class="card-footer bg-light fw-medium text-cap link-muted text-center"
              href="/txs?a=0xeedba2484aaf940f37cd3cd21a5d7c4a7dafbfc0"
            >
              View all transactions{" "}
              <i class="far fa-long-arrow-right ms-1">
                <BsArrowRight />
              </i>
            </a>
          </div>
          <div class="mt-4">
            <p class="d-flex align-items-baseline fs-sm text-muted gap-1 mb-3">
              <i class="far fa-lightbulb-on">
                <TbBulb />
              </i>
              <span>
                A wallet address is a publicly available address that allows its
                owner to receive funds from another party. To access the funds
                in an address, you must have its private key. Learn more about
                addresses in our{" "}
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
      )}
    </>
  );
};

export default Transactions;
