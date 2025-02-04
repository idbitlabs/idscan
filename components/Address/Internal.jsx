import React, { useEffect, useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { FaRegCopy } from "react-icons/fa6";
import { FaRegFileAlt } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

import { shortenAddress, convertIntoPOL } from "../../utils/index";
import { Waring } from "../index";

const Internal = ({ INTERNAL_TRANSACTION, addressExplor }) => {
  const [transactions, setTransactions] = useState();

  const loadDetails = async (addressExplor) => {
    ///INTERNAL_TRANSACTION
    const apiData = await INTERNAL_TRANSACTION(addressExplor);
    setTransactions(apiData.data.result);
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
        <div
          class="tab-pane fade active show"
          id="internaltx"
          role="tabpanel"
          aria-labelledby="tab-2"
          tabindex="0"
        >
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
                <p class="mb-0">
                  <i class="far fa-sort-amount-down"></i> Latest 25 internal
                  transactions (<a href="#">{transactions?.length}</a>)
                </p>
              </div>
            </div>
            <div
              id="ContentPlaceHolder1_divinternaltxtable"
              class="table-responsive"
            >
              <table class="table table-hover mb-0">
                <thead class="text-nowrap">
                  <tr>
                    <th scope="col">Parent Txn Hash</th>
                    <th scope="col">Block</th>
                    <th scope="col">
                      <span>
                        <a
                          href="javascript:;"
                          onclick="switchAgeToDateTimeInAddPage(this)"
                          id="lnkIntAgeDateTime"
                          data-bs-toggle="tooltip"
                        >
                          Age
                        </a>
                      </span>
                    </th>
                    <th scope="col" data-highlight="">
                      From
                    </th>
                    <th scope="col" width="30"></th>
                    <th scope="col" data-highlight="">
                      To
                    </th>
                    <th scope="col">Value</th>
                  </tr>
                </thead>
                <tbody class="align-middle text-nowrap">
                  {transactions
                    ?.map((item, index) => (
                      <tr key={index}>
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
                        <td>
                          <a
                            class="hash-tag text-truncate"
                            href={`/block/${item.blockNumber}`}
                          >
                            {item.blockNumber}
                          </a>
                        </td>

                        <td class="showAge ">
                          <span
                            rel="tooltip"
                            data-bs-toggle="tooltip"
                            data-bs-title="2024-03-11 18:14:15"
                          >
                            {new Date(item.timeStamp * 1000).toDateString()}
                          </span>
                        </td>

                        <td>
                          <div class="d-flex align-items-center gap-1">
                            <div class="d-flex align-items-center gap-1 dom-texthighlight border border-white px-1 mx-n1">
                              <i class="far fa-file-alt text-secondary">
                                <FaRegFileAlt />
                              </i>
                              <a
                                class="hash-tag text-truncate"
                                href={`/address/${item.from}`}
                              >
                                {shortenAddress(item.from)}
                              </a>
                            </div>{" "}
                            <a
                              onClick={() =>
                                navigator.clipboard.writeText(item.from)
                              }
                              class="js-clipboard link-secondary  "
                            >
                              <i
                                id="linkIcon_f_itx_1"
                                class="far fa-copy fa-fw"
                              >
                                <FaRegCopy />
                              </i>{" "}
                            </a>
                          </div>
                        </td>
                        <td>
                          <span
                            class="bg-success bg-opacity-10 border border-success border-opacity-25 text-success fs-70x content-center rounded-pill mx-auto"
                            style={{ width: "1.5rem", height: "1.5rem" }}
                          >
                            <i class="far fa-arrow-right-long">
                              <GoArrowRight />
                            </i>
                          </span>
                        </td>
                        <td>
                          <div class="d-flex align-items-center gap-1">
                            <span>
                              <span class="border border-white px-1 mx-n1">
                                {shortenAddress(item.to)}
                              </span>
                            </span>
                            <a
                              onClick={() =>
                                navigator.clipboard.writeText(item.to)
                              }
                              class="js-clipboard link-secondary  "
                            >
                              <i
                                id="linkIcon_t_itx_1"
                                class="far fa-copy fa-fw"
                              ></i>{" "}
                            </a>
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
              id="ContentPlaceHolder1_linkShowMoreInternalTx"
              class="card-footer bg-light fw-medium text-cap link-muted text-center"
              href="/txsInternal?a=0xeedba2484aaf940f37cd3cd21a5d7c4a7dafbfc0"
            >
              View All Internal Transactions
              <i class="far fa-long-arrow-right ms-1">
                <BsArrowRight />
              </i>
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default Internal;
