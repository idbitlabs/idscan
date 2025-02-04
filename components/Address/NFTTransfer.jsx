import React, { useEffect, useState } from "react";
import { GoQuestion } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";

import { shortenAddress, convertIntoPOL } from "../../utils/index";
import { Waring } from "../index";
const NFTTransfer = ({ ERC721_TOKEN_TRANSFER, addressExplor }) => {
  const [transactions, setTransactions] = useState();

  const loadDetails = async (addressExplor) => {
    ///ERC721_TOKEN_TRANSFER
    const apiData = await ERC721_TOKEN_TRANSFER(addressExplor);
    setTransactions(apiData.data.result);
    console.log(apiData);
  };

  useEffect(() => {
    loadDetails(addressExplor);
  }, [addressExplor]);
  return (
    <>
      {transactions == "Max rate limit reached" ||
      transactions == "Error! Invalid address format" ? (
        <Waring />
      ) : (
        <div class="tab-content " id="pills-tabContent">
          <input
            type="hidden"
            id="hdnErc20"
            value="Age"
            onchange="setGlobalValue(this)"
          />
          <div
            class="tab-pane fade show active"
            id="transactions"
            role="tabpanel"
            aria-labelledby="tab-1"
            tabindex="0"
          >
            <div class="card">
              <div id="ContentPlaceHolder1_divTxDataInfo" class="card-body">
                <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
                  <p class="mb-0">
                    <i
                      class="far fa-sort-amount-down"
                      data-bs-toggle="tooltip"
                      aria-label="Oldest First"
                    ></i>
                    &nbsp;Latest 25 from a total of{" "}
                    <a
                      href="/txs?a=0x794e44d1334a56fea7f4df12633b88820d0c5888"
                      data-bs-toggle="tooltip"
                      data-bs-trigger="hover"
                    >
                      {transactions?.length}
                    </a>{" "}
                    transactions
                  </p>
                </div>
              </div>
              <div
                id="datatable_processing"
                class="dataTables_processing"
                style={{ display: "none" }}
              >
                Processing...
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
                        data-highlight=""
                        class="sorting_disabled"
                        rowspan="1"
                        colspan="1"
                      >
                        <span class="text-nowrap">
                          Symbol{" "}
                          <i class="far fa-question-circle text-muted">
                            {" "}
                            <GoQuestion />
                          </i>
                        </span>
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
                    {transactions?.map((item, index) => (
                      <tr key={index} role="row" class="odd">
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
                          <span
                            class="hash-tag text-truncate myFnExpandBox_searchVal"
                            style={{ maxWidth: "7rem" }}
                          >
                            <a href={`tx/${item.hash}`} target="_parent">
                              {item.hash}
                            </a>
                          </span>
                        </td>
                        <td>
                          <span
                            style={{ maxWidth: "95px" }}
                            class="d-block badge bg-light border border-dark dark:border-white border-opacity-10 text-dark fw-normal text-truncate w-100 py-1.5"
                          >
                            {item.tokenSymbol}
                          </span>
                        </td>
                        <td>
                          <a href={`/block/${item.blockNumber}`}>
                            {item.blockNumber}
                          </a>
                        </td>
                        <td>
                          <div class="showAge">
                            <span>
                              {" "}
                              {new Date(item.timeStamp * 1000).toDateString()}
                            </span>
                          </div>
                        </td>
                        <td>
                          <span class="d-flex d-flex align-items-center gap-2">
                            <div class="d-flex align-items-center gap-1 dom-texthighlight border border-white ps-1 pe-2 ms-n1 me-n2">
                              <i class="far fa-memo text-secondary">
                                <FaRegFileAlt />
                              </i>
                              <span class="hash-tag text-truncate">
                                <a href="#">{item.from}</a>
                              </span>
                            </div>
                            <a
                              class="js-clipboard link-secondary"
                              href="javascript:;"
                            >
                              <i id="linkIcon_f0" class="far fa-copy fa-fw">
                                <FaRegCopy />
                              </i>{" "}
                            </a>
                          </span>
                        </td>
                        <td>
                          <span class="badge bg-success bg-opacity-10 border border-success border-opacity-25 text-success fs-70x text-uppercase w-100 py-1.5">
                            IN
                          </span>
                        </td>
                        <td>
                          <span class="d-flex d-flex align-items-center gap-2">
                            <span>
                              <span class="border border-white ps-1 pe-2 ms-n1 me-n2">
                                {shortenAddress(item.to)}
                              </span>
                            </span>
                            <a
                              class="js-clipboard link-secondary"
                              href="javascript:;"
                            >
                              <i id="linkIcon_t0" class="far fa-copy fa-fw">
                                <FaRegCopy />
                              </i>{" "}
                            </a>
                          </span>
                        </td>
                        <td>
                          <span class="badge border text-dark fw-normal rounded-pill px-2 py-1.5">
                            ERC721
                          </span>
                        </td>
                        <td>
                          <a class="d-flex align-items-center gap-2 link-dark">
                            <div
                              class="content-center bg-light border rounded"
                              style={{ width: "40px", height: "40px" }}
                            >
                              <img width="24" src="/icon.png" />
                            </div>
                            <div class="flex-grow-1">
                              <span
                                class="hash-tag text-truncate"
                                style={{ maxWidth: "11rem" }}
                              >
                                <span>{item.tokenName}</span>
                              </span>
                              <div class="d-flex align-items-center gap-1 small">
                                <span class="hash-tag text-truncate text-muted">
                                  <span>
                                    <span>{item.tokenSymbol}</span>
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
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default NFTTransfer;
