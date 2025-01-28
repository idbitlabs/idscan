import React, { useEffect, useState } from "react";
import { GoQuestion } from "react-icons/go";
import { FaEye } from "react-icons/fa";
import { FaRegCopy } from "react-icons/fa6";
import { BsArrowRight } from "react-icons/bs";

import { shortenAddress, convertIntoMatic } from "../../utils/index";
import { Waring } from "../index";
const TokenTransfer = ({ ERC20_TOKEN_TRANSFER, addressExplor }) => {
  const [transactions, setTransactions] = useState();

  const loadDetails = async (addressExplor) => {
    ///ERC20_TOKEN_TRANSFER
    const apiData = await ERC20_TOKEN_TRANSFER(addressExplor);
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
        <div class="card">
          <input type="hidden" name="hdnAgeText" id="hdnAgeText" value="Age" />
          <input
            type="hidden"
            name="hdnDateTimeText"
            id="hdnDateTimeText"
            value="Date Time (UTC)"
          />
          <input
            type="hidden"
            name="hdnAgeTitle"
            id="hdnAgeTitle"
            value="Click to show Age Format"
          />
          <input
            type="hidden"
            name="hdnDateTimeTitle"
            id="hdnDateTimeTitle"
            value="Click to show Datetime Format"
          />
          <input
            type="hidden"
            name="hdnSiteName"
            id="hdnSiteName"
            value="polygonscan"
          />

          <div id="divDataInfo" class="card-body">
            <div class="d-flex flex-wrap align-items-center justify-content-between gap-3">
              <div id="divTokenStatus">
                <p class="mb-0">
                  <i
                    id="spinwheel"
                    class="fa fa-spin fa-spinner fa-1x fa-pulse"
                    style={{
                      display: "none",
                      marginTop: "4px",
                      marginRight: "4px",
                    }}
                  >
                    &nbsp;
                  </i>
                  <i
                    class="far fa-sort-amount-down"
                    data-bs-toggle="tooltip"
                    data-bs-placement="bottom"
                    aria-label="Oldest First"
                  ></i>
                  &nbsp;Latest 25 ERC-20 Token Transfer Events (
                  <a href="#" target="_parent">
                    {transactions?.length}
                  </a>
                  )
                </p>
              </div>
              <div class="d-flex gap-2 flex-wrap"></div>
            </div>
          </div>
          <div class="table-responsive">
            <table class="table table-hover mb-0">
              <thead id="theadTokenERC20Table" class="text-nowrap">
                <tr>
                  <th scope="col" width="10" class="text-center">
                    <i class="far fa-question-circle text-muted">
                      <GoQuestion />
                    </i>
                  </th>
                  <th scope="col" width="90">
                    Txn Hash
                  </th>
                  <th scope="col" data-highlight="">
                    <span class="text-nowrap">
                      Symbol{" "}
                      <i class="far fa-question-circle text-muted">
                        <GoQuestion />
                      </i>
                    </span>
                  </th>
                  <th scope="col">Block</th>
                  <th scope="col">
                    <a
                      href="javascript:;"
                      onclick="switchAgeToDateTimeAddToken(this)"
                      id="lnkErc20AgeDateTime"
                      data-bs-toggle="tooltip"
                    >
                      Age
                    </a>
                  </th>
                  <th scope="col" data-highlight="">
                    From
                  </th>
                  <th scope="col" width="30"></th>
                  <th scope="col" data-highlight="">
                    To
                  </th>
                  <th scope="col">Value</th>
                  <th scope="col" data-highlight="">
                    Token
                  </th>
                </tr>
              </thead>

              <tbody class="align-middle text-nowrap">
                {transactions
                  ?.map((item, index) => (
                    <tr key={index}>
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
                          <span
                            class="hash-tag text-truncate myFnExpandBox_searchVal"
                            style={{ maxWidth: "7rem" }}
                          >
                            <a href={`/tx/${item.hash}`} target="_parent">
                              {item.hash}
                            </a>
                          </span>
                        </div>
                      </td>
                      <td class="">
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

                      <td class="showAge ">
                        <span
                          rel="tooltip"
                          data-bs-toggle="tooltip"
                          data-bs-title="2024-03-15 2:44:33"
                        >
                          {new Date(item.timeStamp * 1000).toDateString()}
                        </span>
                      </td>

                      <td style={{ whiteSpace: "nowrap" }}>
                        <div class="d-flex align-items-center gap-1">
                          <div class="d-flex align-items-center gap-1 dom-texthighlight border px-1 mx-n1 border-white">
                            <i
                              class="far fa-file-alt text-secondary"
                              data-bs-toggle="tooltip"
                              aria-label="Contract"
                            ></i>
                            <a class="hash-tag text-truncate">{item.from}</a>
                          </div>{" "}
                          <a
                            class="js-clipboard-required-confirmation link-secondary  btn-show-copy-confirmation"
                            onClick={() =>
                              navigator.clipboard.writeText(item.from)
                            }
                          >
                            <i
                              id="linkIcon_f_tx_20_1"
                              class="far fa-copy fa-fw"
                            >
                              {" "}
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
                      <td style={{ whiteSpace: "nowrap" }}>
                        <div class="d-flex align-items-center gap-1">
                          <span>
                            <span class="border px-1 mx-n1 border-white">
                              {shortenAddress(item.to)}
                            </span>
                          </span>
                          <a
                            class="js-clipboard-required-confirmation link-secondary  btn-show-copy-confirmation"
                            href="javascript:;"
                          >
                            <i
                              id="linkIcon_t_tx_20_1"
                              class="far fa-copy fa-fw"
                            >
                              <FaRegCopy />
                            </i>{" "}
                          </a>
                        </div>
                      </td>
                      <td>{convertIntoMatic(item.value)}</td>
                      <td>
                        <a class="d-flex align-items-center gap-1 link-dark">
                          <div class="d-flex align-items-center gap-1 link-dark">
                            <div class="d-flex align-items-center gap-1 dom-texthighlight border border-white px-1 mx-n1">
                              <img
                                src="/icon.png"
                                width="18"
                                height="18"
                                class="rounded-circle"
                              />
                              <div class="d-flex gap-1">
                                {item.tokenName}{" "}
                                <span class="text-muted">
                                  ({item.tokenSymbol})
                                </span>
                              </div>
                            </div>
                          </div>
                        </a>
                      </td>
                    </tr>
                  ))
                  .slice(0, 25)}
              </tbody>
            </table>
          </div>
          <a
            id="linkShowAllTokenTxns"
            title="View All ERC-20 Token Transfer Events"
            class="card-footer bg-light fw-medium text-cap link-muted text-center"
            href="/tokentxns?a=0x794e44d1334a56fea7f4df12633b88820d0c5888"
            target="_parent"
          >
            View All ERC-20 Transactions
            <i class="far fa-long-arrow-right ms-1">
              <BsArrowRight />
            </i>
          </a>
        </div>
      )}
    </>
  );
};

export default TokenTransfer;
