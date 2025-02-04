import React, { useEffect, useState } from "react";
import { GoQuestion } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

import { shortenAddress, convertIntoPOL } from "../../utils/index";
import { Waring } from "../index";

const ProductBlock = ({ BLOCK_VALIDATED, addressExplor }) => {
  const [transactions, setTransactions] = useState();

  const loadDetails = async (addressExplor) => {
    ///BLOCK_VALIDATED
    const apiData = await BLOCK_VALIDATED(addressExplor);
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
                <table class="table table-hover mb-0">
                  <thead class="text-nowrap">
                    <tr>
                      <th scope="col">Block</th>
                      <th scope="col">
                        <a
                          href="javascript:;"
                          onclick="switchAgeToDateTimeInAddPage(this)"
                          id="lnkMinBlkAgeDateTime"
                          data-bs-toggle="tooltip"
                        >
                          Age
                        </a>
                      </th>
                      <th scope="col">TraceId</th>
                      <th scope="col">Difficulty</th>
                      <th scope="col">Gas Used</th>
                      <th scope="col">Reward</th>
                    </tr>
                  </thead>
                  <tbody class="align-middle text-nowrap">
                    {transactions
                      ?.map((item, index) => (
                        <tr key={index}>
                          <td>
                            <span class="hash-tag text-truncate">
                              <a href={`/block/${item.blockNumber}`}>
                                {item.blockNumber}
                              </a>
                            </span>
                          </td>

                          <td class="showAge ">
                            <span>
                              {" "}
                              {new Date(item.timeStamp * 1000).toDateString()}
                            </span>
                          </td>

                          <td>{item.traceId}</td>
                          <td>{index + 1}</td>
                          <td>
                            {convertIntoPOL(item.gas)}{" "}
                            <span class="small text-muted">(53.31%)</span>
                            <div
                              class="progress mt-1"
                              style={{ height: "2px" }}
                            >
                              <div
                                class="progress-bar bg-primary"
                                role="progressbar"
                                style={{ width: "53.31%" }}
                                aria-valuenow="53.31"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </td>
                          <td>{convertIntoPOL(item.value)} POL</td>
                        </tr>
                      ))
                      .slice(0, 25)}
                  </tbody>
                </table>
              </div>
              <a
                id="ContentPlaceHolder1_linkShowAllBlocksMined"
                class="card-footer bg-light fw-medium text-cap link-muted text-center"
              >
                View All Blocks Produced
                <i class="far fa-long-arrow-right ms-1">
                  <BsArrowRight />
                </i>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductBlock;
